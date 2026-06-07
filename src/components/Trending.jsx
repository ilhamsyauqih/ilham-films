import { Card, Col, Container, Row } from "react-bootstrap"
import duneImg from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return (
        <Container>
            <Row>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={duneImg} alt="Dune movies" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={everything} alt="Everything movies" />
                            <Card.Title className="text-center">Card title</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark p-2 m-1 text-white text-center movieImage">
                        <Card.Img src={infinite} alt="Infinite movies" />
                            <Card.Title className="text-center">Card title</Card.Title>
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

export default Trending;