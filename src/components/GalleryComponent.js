import {useState} from 'react';
import { Container, Card, Row, Col, CardImg } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import MediaQuery from 'react-responsive';
import demo from "../image/14.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import "../components/Gallery.css"
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

function TestiPhn() {
  return (
    <>
      <Container className="pb-5" style={{maxWidth: "95%"}}>
        <Row className="d-flex justify-content-center mb-3" style={{color: "#BCBAB8"}}>
          <h5>Thoughts Shared by </h5>
        </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Swiper
                effect={'coverflow'}
                slidesPerView={'1'}
                spaceBetween={15}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <Card style={{borderRadius: "20px", backgroundColor: "#353935"}}>
                      <Card.Body>
                            <div className='d-flex justify-content-center'>
                                <img src={demo} style={{ width: '4rem', borderRadius: "120px"}}/>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-5' style={{color: "#F5F5F5"}}>
                                Fardin Rahman
                            </div>
                            <Card.Text style={{color: "#F5F5F5"}}>
                            "Some quick example text to build on the card title and make up the
                            bulk of the card's content".
                            </Card.Text>
                            <Card.Subtitle className='mt-2 text-muted'>5🌟</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{borderRadius: "20px", backgroundColor: "#353935"}}>
                      <Card.Body>
                            <div className='d-flex justify-content-center'>
                                <img src={demo} style={{ width: '4rem', borderRadius: "120px"}}/>
                            </div>
                            <div className='d-flex justify-content-center mt-2 mb-5' style={{color: "#F5F5F5"}}>
                                Fardin Rahman
                            </div>
                            <Card.Text style={{color: "#F5F5F5"}}>
                            "Some quick example text to build on the card title and make up the
                            bulk of the card's content".
                            </Card.Text>
                            <Card.Subtitle className='mt-2 text-muted'>5🌟</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
      </Container>
    </>
  );
}

function TestiMonial1() {

  const [fullscreenImage, setFullscreenImage] = useState("");

  const handleClick = (imageUrl) => {
    setFullscreenImage(imageUrl);
};
  
  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
};

  return (
    <>
    <div className='d-flex logos'>
        <div className="d-flex logos-slide" style={{position: "relative"}}>
            <CardImg onClick={() => handleClick(demo)} className="acrd" src={demo}/>
            <CardImg onClick={() => handleClick(demo)} className="acrd" src={demo}/>
            <CardImg onClick={() => handleClick(demo)} className="acrd" src={demo}/>
        </div>
        <div className="d-flex logos-slide" style={{position: "relative"}}>
            <CardImg onClick={() => handleClick(demo)} className="acrd" src={demo}/>
            <CardImg onClick={() => handleClick(demo)} className="acrd" src={demo}/>
            <CardImg onClick={() => handleClick(demo)} className="acrd" src={demo}/>
        </div>
    </div>
    <AnimatePresence mode='wait'>
      {fullscreenImage && (
          <motion.div
            className="fullscreen-preview"
            onClick={handleCloseFullscreen}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{duration: 0.25}}
            layoutId="fullscreen-preview"
          >
            <img src={fullscreenImage} alt="Full Screen Preview" />
          </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

function TestiSlide () {

  return (
      <div className='pb-2 pt-1' style={{overflow: "hidden"}}>
        <MediaQuery minWidth={1280}>
          <TestiMonial1/>
        </MediaQuery>
        <MediaQuery maxWidth={1279}>
          <TestiPhn/>
        </MediaQuery> 
      </div>
  )
}

export default TestiSlide;