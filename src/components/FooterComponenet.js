import {useState, useRef} from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MediaQuery from 'react-responsive';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const formRef = useRef(null);
    const [modal, setModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:3443/subscribe', { email });
            setStatus(response.data.message);
            setEmail('');
            handleHide()
          } catch (error) {
            setStatus('Error subscribing. Please try again later.');
            console.error(error);
          }
      };
    
    const handleShow = () => {
        setModal(true);
      };
    
      const handleHide = () => {
        setModal(false);
      };

    return(
        <>
            <MediaQuery minWidth={640}>
                <div style={{backgroundColor: "rgb(0, 0, 0)", padding: "30px 0px 30px 0px"}}>
                    <Container style={{maxWidth: "100%"}}>
                        <Row>
                            <Col md={4} xs={12} className="d-flex">
                                <div>
                                    <div className="text-center">
                                        <FaFacebook color="rgb(255, 193, 0)" size={30} className='mr-3'/>
                                        <FaWhatsapp color="rgb(255, 193, 0)" size={30} className='mr-3'/>
                                        <FaInstagram color="rgb(255, 193, 0)" size={30} className='mr-3'/>
                                        <SiGmail color="rgb(255, 193, 0)" size={30} className='mr-3'/>
                                    </div>           
                                </div>
                            </Col>
                            <Col md={4}></Col>
                            <Col md={4} className="d-flex justify-content-end">
                                <Link to="/aboutus">
                                    <div style={{fontWeight: "300", fontSize: "20px", color: "rgb(255, 193, 0)"}} className="pt-1 pr-3">About</div>
                                </Link>
                                <div style={{fontWeight: "300", fontSize: "20px", color: "rgb(255, 193, 0)"}} className="pt-1 pr-3">Contact Us</div>
                                <div onClick={handleShow} className="butt">Email-Signup</div>
                            </Col>
                        </Row>
                    </Container>
                    <AnimatePresence>
                        {modal && (
                            <motion.div 
                            className='modal-back'
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0}}>
                                <motion.div 
                                className='d-flex justify-content-center m-5'
                                initial={{ opacity: 0, y: 500}}
                                animate={{ opacity: 1, y: 0}}
                                exit={{ opacity: 0, y: 500}}
                                transition={{duration: .25, delay: .25}}>
                                        <Container style={{position: "absolute"}}>
                                        <Row className="justify-content-center ml-1 mr-1">
                                            <Col md={5} className="p-4" style={{backgroundColor: "rgb(255, 193, 0)", border: "black solid 2px" }}>
                                            <h2 className="text-center mb-4">Newsletter</h2>
                                            <p className='text-center mb-4'>You will get regular updates on our invents</p>
                                            <Form ref={formRef} onSubmit={handleSubmit} >
                                                <FormGroup>
                                                    <Label>First Name</Label>
                                                    <Input
                                                        style={{
                                                            border: "2px solid black",
                                                            backgroundColor: "transparent"
                                                        }}
                                                        className="rounded-0"
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Last Name</Label>
                                                    <Input
                                                        style={{
                                                            border: "2px solid black",
                                                            backgroundColor: "transparent"
                                                        }}
                                                        className="rounded-0"
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </FormGroup>
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
                                                <div className='d-flex justify-content-center pb-2 pt-2 home-butt'>
                                                    <div
                                                        className='butt' 
                                                        type="submit">
                                                        Send
                                                    </div>
                                                </div>
                                            </Form>
                                            </Col>
                                        </Row>
                                        </Container>
                                    </motion.div>
                                </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={639}>
                <Link to="/order">
                    <div className="text-center" style={{position: "sticky", bottom: 0, width: "100%", backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 193, 0)", overflow: "hidden", padding: "10px 0px 0px 0px", textDecoration: "none"}}>
                        <h2>Order Now</h2>
                        <p>01793158660</p>
                    </div>
                </Link>
            </MediaQuery>
        </>
    )
}

export default Footer;