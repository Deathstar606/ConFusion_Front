import { useState, useRef } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, CardImg, Button } from "reactstrap";
import { motion, useInView as Fview } from "framer-motion";
import gift from "../image/gift.jpg"
import axios from "axios";

function Gift() {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [value, setValue] = useState(5);
  const [quantity, setQuantity] = useState(1);

  const ref = useRef(null)
  const isInview = Fview(ref, { once: true })

  const variants = {
    initial: {
      pathLength: 0,
      pathOffset: 1,
    },
    animate: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const pay = async () => {
        
    try {
      const { data } = await axios.post(
        'https://localhost:3443/api/bkash/payment/create',
          { amount: Total, userId: "65b2b99ef511892580621a4b" },
          { withCredentials: true }
      );
        window.open(data.bkashURL, '_blank');
      } catch (error) {
        console.log(error.response.data);
      }
    };

  const Total = value * quantity

  const handleVal = (change) => {
    setValue(change);
  }

  const handleQuant = (change) => {
    setQuantity(change);
  }

  const toggleDropdown1 = () => setDropdownOpen1(!dropdownOpen1);
  const toggleDropdown2 = () => setDropdownOpen2(!dropdownOpen2);

  return (
    <div style={{backgroundColor: "rgb(255, 225, 0)"}}>
      <Container className="p-5">
        <div className="d-flex justify-content-center">
          <motion.svg width="204" height="204" viewBox="-100 0 854 674" fill="none" ref={ref}>
            <motion.path d="M84.25 168.5L105.313 147.438H568.688L589.75 168.5V337H547.625V294.875H126.375V463.375H294.875V505.5H105.313L84.25 484.437V168.5ZM126.375 252.75H547.625V189.563H126.375V252.75Z"                                     
            fill="none"
            stroke="black"
            strokeWidth="7"
            variants={variants}
            animate={isInview ? "animate" : "initial"}/>
            <motion.path d="M525.846 505.494C526.085 505.497 526.324 505.5 526.563 505.5C561.459 505.5 589.75 477.209 589.75 442.313C589.75 407.416 561.459 379.125 526.563 379.125C515.206 379.125 504.455 383.961 496.541 388.415C488.063 393.189 479.849 399.278 472.918 404.939C469.497 407.733 466.282 410.517 463.375 413.12C460.468 410.517 457.253 407.733 453.832 404.939C446.901 399.278 438.687 393.189 430.209 388.415C422.295 383.961 411.544 379.125 400.188 379.125C365.291 379.125 337 407.416 337 442.313C337 477.209 365.291 505.5 400.188 505.5C400.426 505.5 400.665 505.497 400.904 505.494L382.127 536.788L418.248 558.462L463.375 483.25L508.502 558.462L544.623 536.788L525.846 505.494ZM432.798 442.313C431.012 440.751 429.127 439.153 427.178 437.561C421.222 432.691 415.094 428.248 409.542 425.123C406.79 423.573 404.487 422.525 402.676 421.896C400.949 421.295 400.168 421.253 400.171 421.25C388.539 421.25 379.125 430.68 379.125 442.313C379.125 453.945 388.555 463.375 400.188 463.375C400.185 463.372 400.949 463.33 402.676 462.729C404.487 462.1 406.79 461.053 409.542 459.502C415.094 456.377 421.222 451.934 427.178 447.064C429.127 445.472 431.012 443.874 432.798 442.313ZM493.952 442.313C495.738 443.874 497.623 445.472 499.572 447.064C505.528 451.934 511.656 456.377 517.208 459.502C519.96 461.053 522.263 462.1 524.074 462.729C525.801 463.33 526.582 463.372 526.582 463.375C526.593 463.375 526.579 463.375 526.582 463.375C538.214 463.375 547.625 453.945 547.625 442.313C547.625 430.68 538.195 421.25 526.563 421.25C526.56 421.25 526.574 421.25 526.563 421.25C526.563 421.253 525.801 421.295 524.074 421.896C522.263 422.525 519.96 423.573 517.208 425.123C511.656 428.248 505.528 432.691 499.572 437.561C497.623 439.153 495.738 440.751 493.952 442.313Z"                                     
            fill="none"
            stroke="black"
            strokeWidth="7"
            variants={variants}
            animate={isInview ? "animate" : "initial"}/>
            <motion.path d="M526.582 463.375C526.582 463.372 525.801 463.33 524.074 462.729C522.263 462.1 519.96 461.053 517.208 459.502C511.656 456.377 505.528 451.934 499.572 447.064C497.623 445.472 495.738 443.874 493.952 442.313C495.738 440.751 497.623 439.153 499.572 437.561C505.528 432.691 511.656 428.248 517.208 425.123C519.96 423.573 522.263 422.525 524.074 421.896C525.801 421.295 526.563 421.253 526.563 421.25M526.582 463.375C526.579 463.375 526.593 463.375 526.582 463.375ZM526.582 463.375C538.214 463.375 547.625 453.945 547.625 442.313C547.625 430.68 538.195 421.25 526.563 421.25M526.563 421.25C526.574 421.25 526.56 421.25 526.563 421.25ZM525.846 505.494C526.085 505.497 526.324 505.5 526.563 505.5C561.459 505.5 589.75 477.209 589.75 442.313C589.75 407.416 561.459 379.125 526.563 379.125C515.206 379.125 504.455 383.961 496.541 388.415C488.063 393.189 479.849 399.278 472.918 404.939C469.497 407.733 466.282 410.517 463.375 413.12C460.468 410.517 457.253 407.733 453.832 404.939C446.901 399.278 438.687 393.189 430.209 388.415C422.295 383.961 411.544 379.125 400.188 379.125C365.291 379.125 337 407.416 337 442.313C337 477.209 365.291 505.5 400.188 505.5C400.426 505.5 400.665 505.497 400.904 505.494L382.127 536.788L418.248 558.462L463.375 483.25L508.502 558.462L544.623 536.788L525.846 505.494ZM432.798 442.313C431.012 440.751 429.127 439.153 427.178 437.561C421.222 432.691 415.094 428.248 409.542 425.123C406.79 423.573 404.487 422.525 402.676 421.896C400.949 421.295 400.168 421.253 400.171 421.25C388.539 421.25 379.125 430.68 379.125 442.313C379.125 453.945 388.555 463.375 400.188 463.375C400.185 463.372 400.949 463.33 402.676 462.729C404.487 462.1 406.79 461.053 409.542 459.502C415.094 456.377 421.222 451.934 427.178 447.064C429.127 445.472 431.012 443.874 432.798 442.313Z"                                     
            fill="none"
            stroke="black"
            strokeWidth="7"
            variants={variants}
            animate={isInview ? "animate" : "initial"}/>                                
          </motion.svg>
        </div>
        <h1 className="text-center pb-5">Buy a Gift Card</h1>
        <Row className="pb-4">
          <Col md={6}>
            <CardImg className="pb-4" src={gift} />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="w-100">
              <h1 className="pb-2">Card Value</h1>
                <Dropdown isOpen={dropdownOpen1} toggle={toggleDropdown1}>
                  <DropdownToggle outline className="w-100 d-flex justify-content-between align-items-center dropdown-toggle rounded-0">
                    {value} BDT <span className="ml-auto"></span>
                  </DropdownToggle>
                  <DropdownMenu className="w-100">
                    <DropdownItem onClick={() => handleVal(10)}>10 Tk</DropdownItem>
                    <DropdownItem onClick={() => handleVal(20)}>20 Tk</DropdownItem>
                    <DropdownItem onClick={() => handleVal(30)}>30 Tk</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <div className="d-flex mt-2 mb-2">
                  <p className="p-2 mt-2">Quantity</p>
                  <Dropdown className="pt-2" isOpen={dropdownOpen2} toggle={toggleDropdown2}>
                    <DropdownToggle caret outline className="dropdown-toggle rounded-0">
                      {quantity}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => handleQuant(2)}>2</DropdownItem>
                      <DropdownItem onClick={() => handleQuant(3)}>3</DropdownItem>
                      <DropdownItem onClick={() => handleQuant(4)}>4</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4>Total {Total} BDT</h4>
                <div className="home-butt">
                  <div onClick={pay} outline className="text-center w-100 butt">Purchase</div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gift;