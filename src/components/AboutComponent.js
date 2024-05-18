import React, {useState} from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg, Row, Col, Media, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import demo from "../image/14 about.jpg"
import { motion, AnimatePresence } from 'framer-motion';
import { baseUrl } from '../shared/baseurl';

function RenderLeader({ leader }) {
  const [modal, setModal] = useState(false);

  const handleShow = () => setModal(true);
  const handleHide = () => setModal(false);

  return (
    <>
      <Col md={4}>
        <motion.div onClick={handleShow} initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
          <CardImg src={baseUrl + leader.image} />
        </motion.div>
        <h2 className='text-center pt-2'>{leader.name}</h2>
        <p className='text-center'>{leader.designation}</p>
      </Col>
      <AnimatePresence>
        {modal && (
          <motion.div
            className='modal-back'
            onClick={handleHide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='d-flex justify-content-center'
              style={{ marginTop: "10vh" }}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
            >
              <Container style={{ position: "absolute" }}>
                <Row className="justify-content-center ml-1 mr-1">
                  <Col md={5} className="p-4">
                    <h2 className="text-center mb-4 text-white">{leader.name}</h2>
                    <p className="text-center mb-4 text-white">{leader.designation}</p>
                    <h5 className="text-center mb-4 text-white">{leader.description}</h5>
                  </Col>
                </Row>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function About(props) {

  const leaders = props.leaders.leaders.map((leader) => {
      return (
          <div key={ leader.id }>
              <RenderLeader leader={leader}/>
          </div>
      );
  });

  return(
    <>
        <div className='text-center'>
            <h1>Our Identity</h1>
            <p>Say somethings about the company</p>
            <h1 className='pt-3'>Our Team</h1>
        </div>
        <Container style={{maxWidth: "85%"}}>
            <Row className="px-5 py-5">
                {leaders}
            </Row>
        </Container>
    </>
  );
}

export default About;    