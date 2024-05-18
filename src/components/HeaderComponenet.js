import React, { useState } from 'react';
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import Brand from "../image/icons8-restaurant-64.png"
import demo from "../image/14.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import events from "../image/Header/pexels-dana-tentis-118658-750073.jpg"
import catering from "../image/Header/pexels-leslie-torres-229759733-12087878.jpg"
import gift from "../image/Header/Gift-Card-Mag-Stripe-Gold-Foil-The-Glass-Knife-HS094278-Sample.jpg"
import MediaQuery from 'react-responsive';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Burger from './Burger';

const Example = (props) => {
  /* const [modal, setModal] = useState(false); */
  const [ResMod, setResMod] = useState(false)
/*   const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef(null); */
  const Current = new Date();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [show, setShow] = useState(false); // Initialize with false
  const [dateTime, setDateTime] = useState(null); // New state for dateTime

  const filterTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return selectedDate.getTime() >= currentDate.getTime();
  };

  const DatePickerWrapper = styled.div`
  position: relative;
  display: inline-block;
  `;

  const IconWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  `;

/*   const handleShow = () => {
    setModal(true);
  };

  const handleHide = () => {
    setModal(false);
  }; */

  const handleShowRes = () => {
    setResMod(true);
  };

  const handleHideRes = () => {
    setResMod(false);
  };

/*   const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser({username: name, password: password});
    setName('');
    setPassword('');
    handleHide()
  }; */

  const handleSubmitRes = (event) => {
    event.preventDefault();
    if (date) {
      const selectedDateTime = new Date(date);
      selectedDateTime.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
      setDateTime(selectedDateTime);
      setShow(true);
    } else {
      console.log('Please select a date.');
    }
  };

/*   const handleLogout = () => {
    props.logoutUser();
  } */
  
  const containerVariants = {
    initial: { backgroundColor: 'transparent', color: 'white' },
    animate: { backgroundColor: 'white', color: 'black' },
  };
  
  const transitionProps = {
    duration: 0.5, // Duration of the transition in seconds
    ease: 'easeInOut', // Easing function for the transition
  };

  return (
    <div>
      <div className='nav-c'>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={Brand} alt="ConFusante" style={{ height: '30px' }} />
          </NavbarBrand>
          <MediaQuery maxWidth={639}>
            <Burger />
          </MediaQuery>
          <MediaQuery minWidth={640}>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <div className='nav-items mt-1 mr-2 p-1'>
                    Menu
                      <div className='nav-items-inner'/>
                  </div >
                </NavItem>
                <NavItem>
                  <div className='nav-items mt-1 mr-2 p-1'>
                    Location
                      <div className='nav-items-inner'/>
                  </div >
                </NavItem>
                <NavItem>
                  <div className='nav-items mt-1 mr-2 p-1'>
                    Gallery
                      <div className='nav-items-inner'/>
                  </div >
                </NavItem>
                <NavItem>
                  <div onClick={handleShowRes} className="text-center rounded-0 butt">
                    Reservation
                  </div>
                </NavItem>
                <NavItem>
                  <div className="text-center rounded-0 butt">
                      Order Now
                  </div>
{/*                   {!props.auth.isAuthenticated ?
                    <div className='mt-2 ml-4'>
                      <div onClick={handleShow}>
                        <FaUser/>
                        {props.auth.isFetching ?
                          <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          : null
                        }
                      </div>
                    </div>
                    :
                    <div>
                      <div className="navbar-text mr-3 text-white">{props.auth.user.username}</div>
                      <Button outline onClick={handleLogout}>
                        <span className="fa fa-sign-out fa-lg"></span> Logout
                        {props.auth.isFetching ?
                          <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          : null
                        }
                      </Button>
                    </div>
                  } */}
                </NavItem>
              </Nav>
          </MediaQuery>
        </Navbar>
      </div>
{/*       <AnimatePresence>
        {modal && (
                    <motion.div 
                    className='modal-back'
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}>
                      <motion.div 
                      className='d-flex justify-content-center m-5'
                      initial={{ opacity: 0, y: -70}}
                      animate={{ opacity: 1, y: 0}}
                      exit={{ opacity: 0, y: -70}}>
                        <Container style={{position: "absolute"}}>
                          <Row className="justify-content-center ml-1 mr-1">
                            <Col md={5} className="p-4" style={{borderRadius: "20px", backgroundColor: "whitesmoke", border: "black solid 2px" }}>
                              <h2 className="text-center mb-4">Login</h2>
                              <Form ref={formRef} onSubmit={handleSubmit} >
                                <FormGroup floating controlId="formName" className='mb-2'>
                                  <Label>Username</Label>
                                  <input
                                        style={{
                                          marginLeft: "20px",
                                          border: "0px",
                                          backgroundColor: "transparent",
                                          boxShadow: "none",
                                          borderColor: "transparent"
                                        }}
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                </FormGroup>
                                <FormGroup controlId="formEmail" className='mb-3'>
                                  <Label>Password</Label>
                                  <input
                                        style={{
                                          marginLeft: "20px",
                                          border: "0px",
                                          backgroundColor: "transparent",
                                          boxShadow: "none",
                                          borderColor: "transparent"
                                        }}
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                </FormGroup>
                                <div className='d-flex justify-content-center pb-2'>
                                  <Button  variant="primary" type="submit">
                                    Login
                                  </Button>
                                </div>
                              </Form>
                            </Col>
                          </Row>
                        </Container>
                      </motion.div>
                    </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {ResMod && (
          <motion.div 
          className='modal-back'
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}>
            <motion.div 
              className='d-flex justify-content-center m-5'
              initial={{ opacity: 0, y: -70}}
              animate={{ opacity: 1, y: 0}}
              exit={{ opacity: 0, y: -70}}
              transition={{duration: .25, delay: .25}}>
              <Container style={{position: "absolute"}}>
                <Row className="justify-content-center ml-1 mr-1">
                <div style={{ backgroundColor: "whitesmoke", display: "inline-block", padding: "40px" }}>
                  <h1 className='text-center'>Reserve a Table</h1>
                  <Form onSubmit={handleSubmitRes} className='d-flex pr-2 pt-4 pb-4'>
                    <select aria-label="Default select example" className='p-3'>
                      <option>Select People</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <DatePickerWrapper>
                      <DatePicker
                        placeholderText="Select Date"
                        id="date-picker"
                        selected={date}
                        minDate={Current}
                        onChange={(newDate) => setDate(newDate)}
                        dateFormat="dd/MM/yyyy"
                        className="text-center p-3"
                      />
                      <IconWrapper>
                        <FaCalendarAlt />
                      </IconWrapper>
                    </DatePickerWrapper>
                    <DatePickerWrapper>
                      <DatePicker
                        id="time-picker"
                        placeholderText="Select Time"
                        selected={time}
                        onChange={(newTime) => setTime(newTime)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="hh:mm aa"
                        filterTime={filterTime}
                        className='text-center p-3'
                      />
                      <IconWrapper>
                        <FaClock />
                      </IconWrapper>
                    </DatePickerWrapper>
                    <Button 
                    variant='dark' 
                    type="submit"
                    style={{border: "1px solid black", backgroundColor: "black"}} 
                    outline  
                    className="rounded-0 text-white" >Find a Table</Button>
                  </Form>
                  {show && (
                    <p className='text-center'>Table Reserved on <span className='text-bold'>{dateTime.toLocaleString()}</span></p>
                  )}
                </div>
                </Row>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Swiper
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        speed={2500}
      >
       <SwiperSlide className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundImage: `url(${events})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-3 text-white">Hello There It's A Demo Header</h1>
            <h6 className='mb-2 text-white'>Some Extra Descriptions</h6>
            <div className="rounded-0 butt" style={{fontSize: "21px"}}>
              Demo
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundImage: `url(${catering})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-3 text-white">Hello There It's A Demo Header</h1>
            <h6 className='mb-2 text-white'>Some Extra Descriptions</h6>
            <div className="rounded-0 butt" style={{fontSize: "21px"}}>
              Demo
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundImage: `url(${gift})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-3 text-white">Hello There It's A Demo Header</h1>
            <h6 className='mb-2 text-white'>Some Extra Descriptions</h6>
            <div className="rounded-0 butt" style={{fontSize: "21px"}}>
              Demo
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Example;