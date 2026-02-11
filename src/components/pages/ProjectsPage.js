import { Container, Row, Col, Image } from "react-bootstrap";
import { GithubLogo } from "../../assets/icons/icons";
import { YoutubeLogo } from "../../assets/icons/icons";
import { FadeInFromLeft } from "../Animations";
import YourSongList from "../../assets/Top-Songs.gif";
import FlexLogin from "../../assets/FlexLogin.png";
import FlexRegister from "../../assets/FlexRegister.png";
import FlexFeed from "../../assets/FlexFeed.png";
import HomeListing from "../../assets/home-listing.jpg";
import SimpleCalc from "../../assets/SimpleCalc.png";
import BFF from "../../assets/BFF-APP.png"

// TODO: Programmatically create the projects blocks from a json.

const ProjectPage = () => {
    return (
        <Container>
            <FadeInFromLeft>
                <Container className="auto" style={{ padding: "4rem 0" }}>
                    <Row>
                        <Col >
                            <h3>Personal Portfolio Website</h3>
                            <p>
                                This personal website is open-source and free to
                                use as a template. Developed using React and
                                hosted on Github Pages as SPA (Single Page
                                Application).
                            </p>
                            <a href ="https://github.com/abandomingo/abandomingo.github.io" target="blank">View Code Here</a>
                            <GithubLogo
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.open("https://github.com/abandomingo/abandomingo.github.io", "_blank");
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container className="auto" style={{ padding: "4rem 0" }}>
                    <Row>
                        <Col xs={12} lg={6}>
                            <h3>BFF Finance Calculator</h3>
                            <p>
                                This is a finance calculator SPA where users can learn more about their finances 
                                and see insightful inforgraphics based on their spending. This was created using Angular 17
                                and hosted on Github Pages. 
                            </p>
                            <a href ="https://abandomingo.github.io/BFF-App/home" target="blank">View Site Here</a>
                            <GithubLogo 
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.open("https://github.com/abandomingo/BFF-App", "_blank");
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={6}>
                            <Image src={BFF} className="mobile-image"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="auto" style={{ padding: "4rem 0" }}>
                    <Row >
                        <Col xs={12} lg={6} >
                            <h3>Your Song List</h3>
                            <p>
                            See what's currently playing on Spotify or fetch your favorite Songs in the past month, 6 months or all time! 
                            Made using Spotify API, Express, React, HTML, and CSS. This webiste was made for my frontend engineering class.
                            </p>
                            <a href ="https://github.com/abandomingo/Your-Song-List" target="blank">View Code Here</a>
                            <GithubLogo
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.open("https://github.com/abandomingo/Your-Song-List", "_blank");
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={6}>
                            <Image src={YourSongList} className="mobile-image"/>
                        </Col>
                    </Row>
                </Container>
                <Container  className="auto" style={{ padding: "4rem 0" }}>
                    <Row>
                        <Col xs={12} lg={6} >
                            <h3>Flex - Social Media App</h3>
                            <p>
                            A Social Media, Fitness App that emphasized daily progress for users.
                            Featured login, register, user account profile, file upload, file storage, 
                            camera use and post interaction. Developed using SwiftUI and Firebase Database.
                            Created by Me, Derek Lee, David Vu, Valeria Sanchez.
                            </p>
                            <a href ="https://github.com/abandomingo/Flex" target="blank">View Code Here</a>
                            <GithubLogo
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.open("https://github.com/abandomingo/Flex", "_blank");
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={6} className="justify-content-center" style={{ padding: "1rem 0 0 0"}}>
                            <Image style={{ margin: "0 0.5rem "}} src={FlexLogin} className="mobile-screenshot"/>
                            <Image style={{ margin: "0 0.5rem "}} src={FlexRegister} className="mobile-screenshot"/>
                            <Image style={{ margin: "0 0.5rem "}} src={FlexFeed} className="mobile-screenshot"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="auto" style={{ padding: "4rem 0" }}>
                    <Row>
                        <Col xs={12} lg={6}>
                            <h3>Example Home Listing Website</h3>
                            <p>
                                This is a personal project I made using Angular and TypeScript
                                to help me get accustomed to the Angular Framework. It features examples of listed
                                homes in the marketplace and details about each home.
                            </p>
                            <a href ="https://abandomingo-angular.netlify.app/" target="blank">View Site Here</a>
                            <GithubLogo
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.open("https://github.com/abandomingo/angular-app-1", "_blank");
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={6} className="justify-content-center" style={{ textAlign: "center", padding: "1rem 0 0 0"}}>
                            <Image src={HomeListing} className="mobile-image"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="auto" style={{ padding: "4rem 0" }}>
                    <Row>
                        <Col xs={12} lg={6}>
                            <h3>Python - Flask Backend Authentication</h3>
                            <p>
                            A mock backend server demonstration that allows users to 
                            authenticate themselves with a JSON Web Token. Allowed users to view public information as well 
                            as upload certain file types. Created for my 449 Backend Engineering Class.
                            </p>
                            <a href ="https://www.youtube.com/watch?v=GUVLpjrvIDo" target="blank">View Demo Here</a>
                            <YoutubeLogo
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.open("https://www.youtube.com/watch?v=GUVLpjrvIDo", "_blank");
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={6}>
                            <iframe  className="mobile-image" src="https://www.youtube.com/embed/GUVLpjrvIDo" 
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                            </iframe>
                        </Col>
                    </Row>
                </Container>
                <Container className="auto" style={{ padding: "4rem 0" }}>
                    <Row>
                        <Col xs={12} lg={6}>
                            <h3>Doctor Office Website</h3>
                            <p>
                            A mock hospital website with database integration that allows users to 
                            retrieve and update data from a MYSQL Workbench database. 
                            Made using PHP, SQL, HTML, and CSS with the use of XAMPP and MYSQL Workbench.
                            </p>
                            <a href ="https://www.youtube.com/watch?v=Lb-wremQen0" target="blank">View Demo Here</a>
                            <YoutubeLogo
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={( ) => {
                                    window.open ("https://www.youtube.com/watch?v=Lb-wremQen0", "_blank");
                                }}

                            />
                        </Col>
                        <Col xs={12} lg={6}>
                            <iframe className="mobile-image" src="https://www.youtube.com/embed/Lb-wremQen0" 
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                        </Col>
                    </Row>
                </Container>
                <Container className="auto" style={{ padding: "4rem 0" }}>
                    <Row>
                        <Col>
                            <h3>Simple Calculator</h3>
                            <p>
                            Simple HTML CSS and JS program. It follows the order of operations and has addition, subtraction, 
                            multiplication, division, and modulus.
                            </p>
                            <a href ="https://abandomingo.github.io/Simple-Calulator/" target="blank">View Site Here</a>
                            <GithubLogo
                                style={{ marginLeft: "1rem"}}
                                className="icon-link jiggle-icon"
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/abandomingo/Simple-Calulator";
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={6} className="justify-content-center" style={{ textAlign: "center", padding: "1rem 0 0 0"}}>
                            <Image src={SimpleCalc} className="mobile-image"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="auto" style={{ padding: "4rem 0" }}>
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
                                className="icon-link jiggle-icon"
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
