import { Container, Row, Col, Image } from "react-bootstrap";
import Profile from "../../../assets/me_nature.jpg";
import {
    FadeInFromLeft,
    FadeInFromRight,
} from "../../Animations";

const BioBlock = () => {
    return (
        <Container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <FadeInFromRight>
                <Row>
                    <h1 class="display-3 my-3 text-info">About Me</h1>
                </Row>
            </FadeInFromRight>
            <Row>
                <Col md={4}>
                    <FadeInFromLeft>
                        <Row>
                            <Image src={Profile} roundedCircle/>
                        </Row>
                    </FadeInFromLeft>
                </Col>

                <Col md={8}>
                    <FadeInFromRight>
                        <Container style={{ padding: "50px" }}>
                            <Row>
                                <p  
                        
                                    class="text-light"
                                    style={{ fontSize: "1.3em" }}
                                >
                                    Hello! My name is Aban Michael Domingo, I am currently a student at 
                                    CSUF and in search for internship opportunities. 
                                    <br />
                                    <br />
                                    &emsp; I love the outdoors, spending quality time with my friends,
                                    and working on side projects in my free time. 
                                    I am really passionate about innovating and creating something 
                                    new and exciting.
                                </p>
                            </Row>
                            <Row style={{ padding: "10px" }}>
                                <p class="text-light">
                                    Currently at California State University
                                    , Fullerton
                                    <br />
                                    2020-2024
                                    <br />
                                    Majored in Computer Science
                                </p>
                            </Row>
                        </Container>
                    </FadeInFromRight>
                </Col>
            </Row>
        </Container>
    );
};

export default BioBlock;
