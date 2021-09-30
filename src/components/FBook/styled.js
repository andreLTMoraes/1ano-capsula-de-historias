import styled from "styled-components"

export const ImgBox = styled.div`
    width: 100%;
	height: 100%;
	position: relative;
	transform-origin: left;
	transition: .7s;
`;

export const Bark = styled.div`
    position: absolute;
	background: #e0e1dc;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: .7s;
`;

export const Details = styled.div`
    position: absolute;
	top: 0;
	left: 0;
	box-sizing: border-box;
	padding: 0 0 0 10px;
	z-index: -1;
	margin-top: 70px;
`;

export const P = styled.p`
    font-family: 'Indie Flower', cursive !important;
    font-size: 18px;
    line-height: 25px;
    transform: rotate(-10deg);
    padding: 0 0 0 20px;
`;

export const Color1 = styled.h2`
    font-family: 'Amatic SC', cursive !important;
    color:#1BBC9B;
`;

export const Color2 = styled.h3`
    font-family: 'Amatic SC', cursive !important;
    color:#C0392B;
`;

export const TextRight = styled.p`
    font-family: 'Indie Flower', cursive !important;
    margin-top: 10px;
    text-align: right;
`;

export const Card = styled.div`
    color: #013243;
	position: absolute;
	top: 30%;
	left: 75%;
	width: 200px;
	height: 268px;
	background: #e0e1dc;
	transform-style: preserve-3d;
	transform: translate(-50%,-50%) perspective(2000px);
	box-shadow: inset 300px 0 50px rgba(0,0,0,.5), 20px 0 60px rgba(0,0,0,.5);
	transition: 1s;

    &:hover {
        transform: translate(-50%,-50%) perspective(2000px) rotate(15deg) scale(1.2);
	    box-shadow: inset 20px 0 50px rgba(0,0,0,.5), 0 10px 100px rgba(0,0,0,.5);
    }

    &:hover ${ImgBox} {
        transform: rotateY(-135deg);
    }

    &:hover ${Bark} {
        opacity: 1;
        transition: .6s;
      box-shadow: 200px 268px 100px rgba(0, 0, 0, .4) inset;
    }

    &:before {
        content:'';
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
        height: 5px;
        background: #BAC1BA;
        transform-origin: bottom;
        transform: skewX(-45deg);
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: -5px;
        width: 5px;
        height: 100%;
        background: #92A29C;
        transform-origin: left;
        transform: skewY(-45deg);
    }

    @media screen and (max-width: 767px) {
        top: 18%;
        left: 50%;
    }
`;