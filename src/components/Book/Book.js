import React from 'react'
import './book.css'


export default function Book({
    year = '1º ano',
    classCode = '',
    hardcoverColor = 'yellow',
    bookClick = () => {}
}) {
    return (
        <div>
            <figure className='book'>

                <ul className='hardcover_front'>
                    <li>
                        <div className={`coverDesign ${hardcoverColor}`}>
                            <p>{year}</p>
                            <h1>{classCode}</h1>
                        </div>
                    </li>
                    <li></li>
                </ul>

                <ul className='page'>
                    <li></li>
                    <li>
                        <button className="btn" onClick={bookClick}>Era uma vez...</button>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <ul className='hardcover_back'>
                    <li></li>
                    <li></li>
                </ul>
                <ul className='book_spine'>
                    <li></li>
                    <li></li>
                </ul>
            </figure>
        </div>
    )
}
