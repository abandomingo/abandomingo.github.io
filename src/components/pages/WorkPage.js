import { Container, Row, Col } from "react-bootstrap";

import { FadeInFromRight, FadeInFromLeft } from "../Animations";

const WorkPage = () => {
    return (
        <Container>
        <FadeInFromLeft>
            <Container style={{ padding: "50px" }}>
                <Row>
                    <Col>
                        <h3>Web Developer / IT Intern - Eibach</h3>
                        <p>Janurary 2023 - Present </p>
                        <ul>
                            <li> Created 10+ new Broadcast Pages for upcoming products using  HTML, CSS, and PHP 
                                with the Laravel Framework. Focused on web responsiveness and SEO (Search Engine Optimization) 
                                in mind.</li>
                            <li>Worked closely with Lead Web Developer to deploy CRUD (Create, Read, Update, Delete) 
                                operations, API Controllers, and Laravel Input Validation for their new website and 
                                tested using Postman.</li>
                            <li>Created a Python program that re-formatted over 300 outdated HTML Web Pages with updated 
                                CSS in order to incorporate them into the new website.</li>
                            <li>Devised and produced a Python program that programmatically downloaded 700 screen captures 
                                of the old website in order to create a visual sitemap and keep records of our previous 
                                iteration.</li>
                        </ul>
                        
                    </Col>
                </Row>
            </Container>
        </FadeInFromLeft>
        <FadeInFromRight>
            <Container style={{ padding: "50px" }}>
                <Row>
                    <Col>
                        <h3>Cashier/Barista  - ChatTea</h3>
                        <p>April 2022 - Janurary 2023 </p>
                        <ul>
                            <li>Created artisan, original drinks in a fast-paced work enviorment</li>
                            <li>Collaborated with multiple co-workers in the planning and inventory management.</li>
                            <li>Assisted customers with recomendations that suited their palate</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </FadeInFromRight>
        <FadeInFromLeft>
            <Container style={{ padding: "50px" }}>
                <Row>
                    <Col>
                    <h3>Cashier/Barista - ShareTea</h3>
                        <p>November 2022- April 2022 </p>
                        <ul>
                            <li>Created artisan, original drinks in a fast-paced work enviorment</li>
                            <li>Collaborated with multiple co-workers in the planning and inventory management.</li>
                            <li>Assisted customers with recomendations that suited their palate</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </FadeInFromLeft>
        <FadeInFromRight>
            <Container style={{ padding: "50px" }}>
                <Row>
                    <Col>
                        <h3>Line Chef - Yoshiharu Ramen</h3>
                        <p>September 2020 - September 2021 </p>
                        <ul>
                            <li> Learned how to operate in a  fast-paced environment. Prepared and made ramen, basic sushi, and appetizers.</li>
                            <li>Served and seated customers in a timely manner.</li>
                            <li>Learned how to handle stressful situations and work under pressure.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </FadeInFromRight>
        
    </Container>
    );
};

export default WorkPage;
