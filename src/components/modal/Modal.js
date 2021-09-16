import React, { useState, useRef, useEffect } from 'react'
import * as S from './styled'
import ReactPlayer from 'react-player'
import { mock } from './mock'

function useOutsideAlerter(ref, action) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                action()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function Modal({
    closeModal = () => {}
}) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, closeModal)
    const player = useRef(null)
    const [play, setPlay] = useState(false)
    const [selectedHistory, setSelectedHistory] = useState(0)
    
    const gotoHistory = (time, idx) => {
        player.current.seekTo(time, "seconds")
        setSelectedHistory(idx)
    }

    const gotoBegin = () => {
        setPlay(true)
        player.current.seekTo(0, "seconds")
    }

    const handleList = (time) => {
        if(selectedHistory + 1 < mock.stories.length) {
            if(time >= mock.stories[selectedHistory + 1].beginAt) {
                setSelectedHistory(selectedHistory + 1)
            }
        }
    }

    return (
        <S.Shadow>
            <S.PopUpContainer ref={wrapperRef}>
                <S.StoriesList>
                    <ul style={{direction: 'ltr'}}>
                        {mock.stories.map((history, idx) => {
                            return (
                                <li key={idx}>
                                    <S.StoriesItem actual={selectedHistory === idx} onClick={() => gotoHistory(history.beginAt, idx)}>
                                        <S.HistoryTitle actual={selectedHistory === idx}>{history.name}</S.HistoryTitle>
                                        <S.HistoryAuthor actual={selectedHistory === idx}>{history.author}</S.HistoryAuthor>
                                    </S.StoriesItem>
                                </li>
                            )
                        })}
                    </ul>
                </S.StoriesList>
                <S.HistoryContent>
                    <S.CardHeader>
                        <S.CardHistoryTitle>{mock.stories[selectedHistory].name}</S.CardHistoryTitle>
                        <S.CardHistoryAuthor>{mock.stories[selectedHistory].author}</S.CardHistoryAuthor>
                    </S.CardHeader>
                    <S.VideoConteiner>
                        <ReactPlayer
                            ref={player}
                            url={`${mock.url}`}
                            controls={true}
                            width="83%"
                            height="90%"
                            playing={play}
                            onProgress={(oP) => handleList(Math.round(oP.playedSeconds))}
                            onReady={gotoBegin}
                        />
                    </S.VideoConteiner>
                </S.HistoryContent>
            </S.PopUpContainer>
        </S.Shadow>
    )
}
