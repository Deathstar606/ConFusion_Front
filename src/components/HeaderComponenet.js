import React, { useState } from 'react';
import {
  Container,
  Row,
  Form,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import Brand from "../image/icons8-restaurant-64.png"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import events from "../image/Header/pexels-dana-tentis-118658-750073.jpg"
import catering from "../image/Header/pexels-leslie-torres-229759733-12087878.jpg"
import gift from "../image/Header/Gift-Card-Mag-Stripe-Gold-Foil-The-Glass-Knife-HS094278-Sample.jpg"
import { Link, NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import 'react-datepicker/dist/react-datepicker.css';
import { AnimatePresence, motion } from 'framer-motion';
import "./reserveForm.css"
import Burger from './Burger';

export const Reserve = ({setResMod}) => {
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleSubmitRes = (event) => {
    event.preventDefault();
    alert(`Table Set for ${people} at Date: ${date}, Time: ${time}`);
    setPeople("")
    setTime("")
    setDate("")
    setResMod(false)
  };

  return (
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
              <form className="reservation-form" onSubmit={handleSubmitRes}>
                <h1>Reserve a Table</h1>
                <div className="form-group">
                  <select value={people} onChange={(e) => setPeople(e.target.value)} required>
                    <option value="" disabled>Select People</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                  </select>
                </div>
                <div className="form-group">
                  <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    min={today}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                  />
                </div>
                <div className='home-butt'>
                  <button type="submit" className='butt'>Find a Table</button>
                </div>
              </form>
      </motion.div>
    </motion.div>
  )
}

const Example = (props) => {
    // State to keep track of the active link
  const [activeLink, setActiveLink] = useState('');

    // Function to handle click on NavLink
  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };
  
  const [ResMod, setResMod] = useState(false)
/*   const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef(null); */


/*   const handleShow = () => {
    setModal(true);
  };

  const handleHide = () => {
    setModal(false);
  }; */

  const handleShowRes = () => {
    setResMod(true);
  };

/*   const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser({username: name, password: password});
    setName('');
    setPassword('');
    handleHide()
  }; */

/*   const handleLogout = () => {
    props.logoutUser();
  } */

  return (
    <div>
      <div className='nav-c'>
        <Navbar light expand="md">
          <NavbarBrand href="http://Deathstar606.github.io/ConFusion_Front/">
            <img src={Brand} alt="ConFusante" style={{ height: '30px' }} />
          </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <MediaQuery minWidth={640}>
                  <NavItem>
                    <NavLink
                      to="/menu"
                      activeClassName="active"
                      onClick={() => handleNavLinkClick('/menu')} // Update active link on click
                    >
                      <div className={`nav-items pr-2 pl-2 ${activeLink === '/menu' ? 'active' : ''}`}>
                        Menu
                        <div className='nav-items-inner'/>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/location"
                      activeClassName="active"
                      onClick={() => handleNavLinkClick('/location')} // Update active link on click
                    >
                      <div className={`nav-items pr-2 pl-2 ${activeLink === '/location' ? 'active' : ''}`}>
                        Location
                        <div className='nav-items-inner'/>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/events"
                      activeClassName="active"
                      onClick={() => handleNavLinkClick('/events')} // Update active link on click
                    >
                      <div className={`nav-items pr-2 pl-2 ${activeLink === '/events' ? 'active' : ''}`}>
                        Events
                        <div className='nav-items-inner'/>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/gift"
                      activeClassName="active"
                      onClick={() => handleNavLinkClick('/gift')} // Update active link on click
                    >
                      <div className={`nav-items pr-2 pl-2 ${activeLink === '/gift' ? 'active' : ''}`}>
                        Gift Cards
                        <div className='nav-items-inner'/>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/gallery"
                      activeClassName="active"
                      onClick={() => handleNavLinkClick('/gallery')} // Update active link on click
                    >
                      <div className={`nav-items pr-2 pl-2 ${activeLink === '/gallery' ? 'active' : ''}`}>
                        Gallery
                        <div className='nav-items-inner'/>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <div onClick={handleShowRes} className="text-center rounded-0 butt">
                      Reservation
                    </div>
                  </NavItem>
                  <NavItem>
                    <Link to="/order">
                      <div className="text-center rounded-0 butt">
                        Order Now
                      </div>
                    </Link>
                  </NavItem>
                </MediaQuery>
                <MediaQuery maxWidth={639}>
                  <Burger/>
                </MediaQuery>

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
              </Nav>
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
      <AnimatePresence mode='wait'>
        {ResMod && (
          <Reserve setResMod={setResMod}/>
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
            <h1 className="mb-2 text-white pb-3 text-center" style={{fontSize: "clamp(44px, 4vw, 70px)"}}>Hello There It's A Demo Header</h1>
            <h6 className='mb-3 text-white' style={{fontSize: "clamp(18px, 1vw, 40px)"}}>Some Extra Descriptions</h6>
            <div className="rounded-0 butt" style={{fontSize: "21px"}}>
              Demo
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundImage: `url(${catering})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-2 text-white pb-3 text-center" style={{fontSize: "clamp(44px, 4vw, 70px)"}}>Hello There It's A Demo Header</h1>
            <h6 className='mb-3 text-white' style={{fontSize: "clamp(18px, 1vw, 40px)"}}>Some Extra Descriptions</h6>
            <div className="rounded-0 butt" style={{fontSize: "21px"}}>
              Demo
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundImage: `url(${gift})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-2 text-white pb-3 text-center" style={{fontSize: "clamp(44px, 4vw, 70px)"}}>Hello There It's A Demo Header</h1>
            <h6 className='mb-3 text-white' style={{fontSize: "clamp(18px, 1vw, 40px)"}}>Some Extra Descriptions</h6>
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