import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt='logo'/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href='https://linkedin.com/OkoliEvans'><img src={navIcon} alt='nav icon1' /></a>
                            <a href='https://twitter.com/OkoliEvans'><img src={navIcon2} alt='nav icon2' /></a>
                            <a href='https://github.com/OkoliEvans'><img src={navIcon3} alt='nav icon3' /></a>
                        </div>
                        <p>CopyRight &copy; 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
