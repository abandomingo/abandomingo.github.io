import { Col, Row, Image } from "react-bootstrap";
import { GithubLogo, LinkedInLogo } from "../../../assets/icons/icons";
import Profile from "../../../assets/me_@SB.jpg";
import {
    FadeInFromTop,
    FadeInFromLeft,
    FadeInFromRight,
} from "../../Animations";


const HomeBlock = () => {
    return (
        <div class="heading-3 center text-info">
        
            <FadeInFromTop>
                <Row>
                    <Col>
                        <Image 
                            className="rounded mx-auto d-block img-fluid" 
                            src={Profile}
                            alt="Profile Picture"
                        />
                    </Col>
                </Row>
            </FadeInFromTop>
            <FadeInFromTop>
                <Row>
                    <h3 class="display-4 auto">Aban Michael Domingo</h3>
                </Row>
            </FadeInFromTop>
            <FadeInFromLeft>
                <Row>
                    <h3 class="display-5 auto">Undergraduate at California State University, Fullerton</h3>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row>
                    <Col xs={6} md={{ span: 2, offset: 8 }}>
                        <GithubLogo
                            width="50"
                            height="50"
                            onClick={() => {
                                window.location.href =
                                    "https://github.com/abandomingo";
                            }}
                        />
                    </Col>
                    <Col xs={6} md={{ span: 2 }}>
                        <LinkedInLogo
                            style={{ borderRadius: "15px" }}
                            width="50"
                            height="50"
                            onClick={() => {
                                window.location.href =
                                    "https://www.linkedin.com/in/aban-domingo-486337224/";
                            }}
                        />
                    </Col>
                </Row>
            </FadeInFromRight>
        </div>
    );
};

export default HomeBlock;
