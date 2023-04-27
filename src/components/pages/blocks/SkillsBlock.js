import { Container, Row, Col } from "react-bootstrap";
import {
    JavascriptLogo,
    PythonLogo,
    CSharpLogo,
    Html5Logo,
    CPPLogo,
    PHPLogo,
    SQLLogo,

} from "../../../assets/icons/icons";
import { FadeInFromRight, FadeInFromLeft } from "../../Animations";

const SkillsBlock = () => {
    return (
        <Container class="bg-white">
            <FadeInFromLeft>
                <Row>
                    <h1 class="display-3 my-3 text-info">Languages</h1>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row
                    className="justify-content-center"
                    style={{ padding: "25px", paddingBottom: "100px" }}
                >
                    <Col sm="auto" md="auto">
                        <JavascriptLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <PythonLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <PHPLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <SQLLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <CPPLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <Html5Logo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <CSharpLogo width="100" height="100" />
                    </Col>
                </Row>
            </FadeInFromRight>
            <FadeInFromLeft>
                <Row>
                    <h1 class="display-3 my-3 text-info">Skills</h1>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row style={{ padding: "10px" }}>
                    <Col>
                        <h3 class="text-info">Platforms</h3>
                        <ul class="display-5 text-info">
                            <li>Windows</li>
                            <li>Mac</li>
                            <li>Linux</li>
                            <li>Ubuntu</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3 class="text-info">Tools</h3>
                        <ul class="display-5 text-info">
                            <li>Visual Studio Code</li>
                            <li>Visual Studio IDE</li>
                            <li>Git and Github Desktop</li>
                            
                        </ul>
                    </Col>
                </Row>
            </FadeInFromRight>
            <FadeInFromRight>
                <Row style={{ padding: "10px", paddingBottom: "100px" }}>
                    <Col>
                        <h4 class="text-info">Database and Data Analysis</h4>
                        <ul class="display-5 text-info">
                            <li>R Studio</li>
                            <li>MySQL</li>
                            <li>Microsoft Excel</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3 class="text-info">Other</h3>
                        <ul class="display-5 text-info">
                            <li>Unity</li>
                            <li>Postman</li>
                            <li>Replit</li>
                        </ul>
                    </Col>
                </Row>
            </FadeInFromRight>
            <FadeInFromLeft>
                <Row>
                    <h1 class="display-3 my-3 text-info">Certification</h1>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row style={{ padding: "10px", paddingBottom: "200px" }}>
                   <span class="display-5 text-info">Google Data Analytics Certified  September 2022 - January 2023</span>
                </Row>
            </FadeInFromRight>
        </Container>
    );
};

export default SkillsBlock;
