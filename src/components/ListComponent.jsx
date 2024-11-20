import { Container, Row, Col, Accordion } from "react-bootstrap";
import { listG } from "../data/index";


const ListComponent = () => {
    return (
        <div className="faq">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center fw-bold">Pertanyaan yang sering ditanyakan</h2>
                    </Col>
                </Row>

                <Row className="row-cols-1 row-cols-1 g-4 pt-5">
                    {/* LOOPING */}
                    {listG.map((data) => {
                        return (
                            <Col key={data.id}>
                                <Accordion className="shadow-sm">
                                    <Accordion.Item eventKey={data.eventKey}>
                                        <Accordion.Header>{data.title}</Accordion.Header>
                                        <Accordion.Body>{data.desc}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    )
}

export default ListComponent