import { Container, Row, Col } from "react-bootstrap";
import { GithubLogo } from "../../assets/icons/icons";
import { YoutubeLogo } from "../../assets/icons/icons";
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
                                <a href ="https://github.com/abandomingo/abandomingo.github.io" target="blank">View Code Here</a>
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/abandomingo/abandomingo.github.io";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Flex - Social Media App</h3>
                            <p>
                            A Social Media, Fitness App that emphasized daily progress for users.
                            Featured login, register, user account profile, file upload, file storage, 
                            camera use and post interaction. Developed using SwiftUI and Firbase Database.
                            Created by Me, Derek Lee, David Vu, Valeria Sanchez.
                            <br/>
                            <a href ="https://github.com/abandomingo/Flex" target="blank">View Code Here</a>
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/abandomingo/Flex";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Python - Flask Backend Authentication</h3>
                            <p>
                            A mock backend server demonstration that allows users to 
                            authenticate themselves with a JSON Web Token. Allowed users to view public information as well 
                            as upload certain file types. Created for my 449 Backend Engineering Class.
                            <br/>
                            <a href ="https://www.youtube.com/watch?v=GUVLpjrvIDo" target="blank">View Demo Here</a>
                            </p>
                            <YoutubeLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://www.youtube.com/watch?v=GUVLpjrvIDo";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Doctor Office Website</h3>
                            <p>
                            A mock hospital website with database integration that allows users to 
                            retrieve and update data from a MYSQL Workbench database. 
                            Made using PHP, SQL, HTML, and CSS with the use of XAMPP and MYSQL Workbench.
                            <br/>
                            <a href ="https://www.youtube.com/watch?v=Lb-wremQen0" target="blank">View Demo Here</a>
                            </p>
                            <YoutubeLogo
                                width="40"
                                height="40"
                                onClick={( ) => {
                                    window.location.href =
                                        "https://www.youtube.com/watch?v=Lb-wremQen0";
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
            </FadeInFromLeft>
        </Container>
    );
};

export default ProjectPage;
