import { Card, Col, Container, Row } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
    return (
        <Container>
            <br />
            <h1 className="text-white">SUPERHERO MOVIES</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={antmanImage} alt="Dune movies" className="images"/>
                            <Card.Title className="text-center">ANT MAN</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={avengerImage} alt="Everything movies" className="images"/>
                            <Card.Title className="text-center">AVENGER</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={batmanImage} alt="Infinite movies" className="images"/>
                            <Card.Title className="text-center">BATMAN</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={robinhoodImage} alt="Infinite movies" className="images"/>
                            <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={spidermanImage} alt="Infinite movies" className="images"/>
                            <Card.Title className="text-center">SPIDERMAN</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={supermanImage} alt="Infinite movies" className="images"/>
                            <Card.Title className="text-center">SUPERMAN</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SuperHero;