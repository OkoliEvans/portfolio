import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import HeaderImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from "react-on-screen";



export const Banner = () => {

    const [ loopNum, setLoopNum ] = useState(0);
    const [ text, setText ] = useState('');
    const toRotate = [ 'web developer', 'blockchain developer', 'smart contracts developer'];
    const [ isDeleting, setIsDeleting ] = useState(false);
    const period = 2000;
    const [ delta, setDelta ] = useState(300 - Math.random() + 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } 

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{'Hi, meet Evans '} <span className="wrap">{text}</span></h1>
                                <p>I am a dedicated software developer and engineer, with years of experience under my belt. I became 
                                    intrigued by the possibilities in the blockchain technology, I decided to learn more about the new tech,
                                    and I found myself here, building Dapps and web apps. Mine is born out of fiery passion and love for new
                                    technology.
                                </p>
                                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                            </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='header img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}