import React, {useState, useRef} from 'react';
import {Form, CardImg, Row, Col, Container, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import demo from "../image/14 about.jpg"
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { baseUrl } from '../shared/baseurl';

function CatItems ({item}) {
    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhnNumber] = useState('');
    const [people, setPeople] = useState('');
    const formRef = useRef(null);

    const handleShow = () => {
        setModal(!modal);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {caterId: item._id ,email: email, phoneNumber: phoneNumber, people: people}
        console.log(data)
        try {
          const pay = await axios.post('http://localhost:9000/catermenu/addcater', data)
        } catch (error) {
          console.log(error.response.data);
        }
    }

    return (
        <Col md={5} style={{ border: "2px solid black", padding: "10px", marginBottom: "20px", marginLeft: "10px" }}>
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div>
                        {item.description}
                        <div onClick={handleShow} className="d-flex pt-2 pb-4 home-butt">
                            <div className="rounded-0 butt">
                                Inquire {">"}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <CardImg src={baseUrl + item.image} />
                </Col>
            </Row>
                <AnimatePresence>
                {modal && (
                    <motion.div
                        className='modal-back'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className='d-flex justify-content-center m-5'
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -500 }}
                            transition={{ duration: 0.25, delay: 0.25 }}
                        >
                            <Container style={{ position: "relative" }}>
                                <Row className="justify-content-center ml-1 mr-1">
                                    <Col md={5} className="p-4" style={{ backgroundColor: "rgb(255, 193, 0)", border: "black solid 2px" }}>
                                        <FaTimes onClick={handleShow} style={{ position: "absolute", top: "10px", right: "10px" }} />
                                        <h2 className="text-center mb-2">Catering orders</h2>
                                        <p className='text-center mb-2'>Notify us if you are intersed with our catering orders</p>
                                        <Form ref={formRef} onSubmit={handleSubmit}>
                                            <FormGroup>
                                                <Label>Email</Label>
                                                <Input
                                                    style={{
                                                        border: "2px solid black",
                                                        backgroundColor: "transparent"
                                                    }}
                                                    className="rounded-0"
                                                    type="text"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Phone Number</Label>
                                                <Input
                                                    style={{
                                                        border: "2px solid black",
                                                        backgroundColor: "transparent"
                                                    }}
                                                    className="rounded-0"
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhnNumber(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>People</Label>
                                                <Input
                                                    style={{
                                                        border: "2px solid black",
                                                        backgroundColor: "transparent"
                                                    }}
                                                    className="rounded-0"
                                                    type="text"
                                                    placeholder="People"
                                                    value={people}
                                                    onChange={(e) => setPeople(e.target.value)}
                                                />
                                            </FormGroup>
                                            <div className='d-flex justify-content-center pb-2 pt-2 home-butt'>
                                                <button
                                                    className='butt'
                                                    type="submit"
                                                >
                                                    Confirm
                                                </button>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Col>
    )
}

function Catering (props) {
    console.log(props)
    const cater = props.catering.catering.map((cat) => {
        return (
            <CatItems item={cat}/>
        )
    })

    return(
        <motion.div
        style={{backgroundColor: "rgb(255, 193, 0)"}}
        transition={{duration: 0.5, type: "tween", ease: "easeIn"}}
        initial = {{x: 1000, opacity: 0}}
        animate= {{x: 0, opacity: 1}}
        exit= {{x: -1000, opacity: 0}}>
            <Container style={{maxWidth: "95%"}}>
                <h1 className='text-center pt-3 row-header' style={{fontSize: "clamp(54px, 4vw, 100px)"}}>Catering</h1>
                <p className='text-center'>Say somethings about the company</p>
                <Row className="d-flex justify-content-center">
                    {cater}
                </Row>
            </Container>
        </motion.div>
    )
}

export default Catering