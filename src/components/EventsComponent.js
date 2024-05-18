import { useRef } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Container, Row, Col, Button } from 'reactstrap';
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseurl';
import { motion, useInView as Fview } from "framer-motion";
import demo from "../image/14.jpg";

const colorVariants = {
  initial: { color: "black" },
  hover: { color: "white" },
};

function Events() {
  return (
    <>
      <Container style={{ maxWidth: "100%", overflow: "hidden", backgroundColor: "grey" }} className="px-0">
        <h2 className="text-center">Heading Text</h2>
        <p className="text-center">Some Description Text</p>
        <motion.div initial={{ y: 50, opacity: 0 }} transition={{ duration: 1, type: "tween", ease: "easeIn" }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <Row>
            <Col md={8}>
              <CardImg src={demo}></CardImg>
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <div>
                <div className="text-center" style={{ fontSize: "24px" }}>Description Goes Here</div>
                <motion.div className="d-flex justify-content-center pt-2">
                  <div className="rounded-0 butt">
                    Demo
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>
        </motion.div>
        <motion.div initial={{ y: 50, opacity: 0 }} transition={{ duration: 1, type: "tween", ease: "easeIn" }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <Row>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <div>
                <div className="text-center" style={{ fontSize: "24px" }}>Description Goes Here</div>
                <div className="d-flex justify-content-center pt-2"><Button>Demo</Button></div>
              </div>
            </Col>
            <Col md={8}>
              <CardImg src={demo}></CardImg>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </>
  );
}

export default Events;