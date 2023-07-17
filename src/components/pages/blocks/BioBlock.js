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
                    <h1 class="display-3 my-3 auto text-info">About Me</h1>
                </Row>
            </FadeInFromRight>
            <Row>
                <Col xs={12} md={4}>
                    <FadeInFromLeft>
                        <Row>
                            <Image src={Profile} roundedCircle/>
                        </Row>
                    </FadeInFromLeft>
                </Col>

                <Col xs={12} md={8}>
                    <FadeInFromRight>
                        <Container style={{ padding: "50px" }}>
                            <Row>
                                <p  
                        
                                    class="text-light auto"
                                    style={{ fontSize: "1.3em" }}
                                >
                                    Hello! My name is Aban Michael Domingo, I am currently a student at 
                                    CSUF and I am looking to grow in Fullstack and Mobile Development. 
                                    <br />
                                    <br />
                                    I love the outdoors, spending quality time with my friends,
                                    and working on side projects in my free time. 
                                    I am really passionate about innovating and creating something 
                                    that will have an impact.
                                </p>
                            </Row>
                            <Row style={{ padding: "10px" }}>
                                <p class="text-light auto">
                                    Currently at California State University
                                    , Fullerton
                                    <br />
                                    August 2020- May 2024
                                    <br />
                                    B.S. Computer Science
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
