import { Container, Row, Col } from "react-bootstrap";
import { GithubLogo } from "../../assets/icons/icons";
import { FadeInFromLeft } from "../Animations";

// TODO: Programmatically create the projects blocks from a json.

const ProjectPage = () => {
    return (
        <Container>
            <FadeInFromLeft>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Personal Portfolio Website</h3>
                            <p>
                                This personal website is open-source and free to
                                use as a template. Developed using React and
                                hosted on Github Pages as SPA (Single Page
                                Application).
                                <br/>
                                <a href ="https://github.com/abandomingo">View Here</a>
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/abandomingo";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Click Your Friends!</h3>
                            <p>
                                Interactive idle game that allows users to import photos of 
                                their friends and generate clones of them. Created using Unity engine 
                                and C#.
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/abandomingo/AccumulateRenzel";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Kaprekar's Constant Calculator</h3>
                            <p>
                            Python program that takes a 4-digit user input (ex. 4123) and sorts the number in 
                            ascending order (4321) and another in descending order (1234), then subtracting 
                            the two (4321 - 1234 = 3087) which repeats until we reach Kaprekar's Constant, 6174. 
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/abandomingo/kaprekarconstant";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </FadeInFromLeft>
        </Container>
    );
};

export default ProjectPage;
