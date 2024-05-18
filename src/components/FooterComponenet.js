import {useState, useRef} from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MediaQuery from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

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
                <div className="footer">
                    <Container style={{maxWidth: "100%"}}>
                        <Row>
                            <Col md={4} xs={12} className="d-flex">
                                <div>
                                    <div className="text-center">
                                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                                    </div>           
                                </div>
                            </Col>
                            <Col md={4}></Col>
                            <Col md={4} className="d-flex justify-content-end">
                                <div style={{fontWeight: "300", fontSize: "20px"}} className="pt-1 pr-3">About</div>
                                <Button onClick={handleShow} outline className="m-1">Email-Signup</Button>
                                <Button outline className="m-1">Contact Us</Button>
                            </Col>
                        </Row>
                        <div className="row justify-content-center">             
                            <div className="col-auto">
                                <p>© Copyright 2018 Ristorante Con Fusion</p>
                            </div>
                        </div>
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
                                            <Col md={5} className="p-4" style={{backgroundColor: "whitesmoke", border: "black solid 2px" }}>
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
                                                <div className='d-flex justify-content-center pb-2'>
                                                <Button
                                                style={{border: "2px solid black"}} 
                                                outline variant="primary" 
                                                className="rounded-0 mt-2" 
                                                type="submit">
                                                    Send
                                                </Button>
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
                <div className="footer text-center" style={{position: "sticky", bottom: 0, width: "100%"}}>
                    <h2>Order Now</h2>
                </div>
            </MediaQuery>
        </>
    )
}

export default Footer;