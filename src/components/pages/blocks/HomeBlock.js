import { Col, Row, Image } from "react-bootstrap";
import { GithubLogo, LinkedInLogo } from "../../../assets/icons/icons";
import Profile from "../../../assets/Grad-Photo.jpg";
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
                    <Col xs={10} sm={8} className="mx-auto">
                        <Image 
                            className="rounded img-fluid"
                            src={Profile}
                            alt="Profile Picture"
                        />
                    </Col>
                </Row>
            </FadeInFromTop>
            <FadeInFromTop>
                <Row className="justify-content-center">
                    <h3 class="display-4 auto">Aban Michael Domingo</h3>
                </Row>
            </FadeInFromTop>
            <FadeInFromLeft>
                <Row className="justify-content-center">
                    <h3 class="display-5 auto ">Junior Frontend Developer, <i>Currently Seeking Work Opportunities</i></h3>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <GithubLogo
                        className="icon-link jiggle-icon"
                        width="50"
                        height="50"
                        onClick={() => {
                            window.location.href =
                                "https://github.com/abandomingo";
                        }}
                    />
                </Col>
                <Col className="text-center">
                    <LinkedInLogo
                        className="icon-link jiggle-icon" 
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
