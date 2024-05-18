import { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, CardImg, Button } from "reactstrap";
import demo from "../image/14.jpg"

function Gift() {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [value, setValue] = useState(5);
  const [quantity, setQuantity] = useState(1);

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
    <Container>
      <Row>
        <Col md={6}>
          <CardImg src={demo} />
        </Col>
        <Col md={6}>
          <h1>Card Value</h1>
          <Dropdown isOpen={dropdownOpen1} toggle={toggleDropdown1}>
            <DropdownToggle outline className="w-100 d-flex justify-content-between align-items-center">
              {value} Tk <span className="ml-auto">&#9660;</span>
            </DropdownToggle>
            <DropdownMenu className="w-100">
              <DropdownItem onClick={() => handleVal(10)}>10 Tk</DropdownItem>
              <DropdownItem onClick={() => handleVal(20)}>20 Tk</DropdownItem>
              <DropdownItem onClick={() => handleVal(30)}>30 Tk</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="d-flex">
            <p className="p-2 mt-1">Quantity</p>
            <Dropdown className="pt-2" isOpen={dropdownOpen2} toggle={toggleDropdown2}>
              <DropdownToggle caret outline>
                {quantity}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleQuant(2)}>2</DropdownItem>
                <DropdownItem onClick={() => handleQuant(3)}>3</DropdownItem>
                <DropdownItem onClick={() => handleQuant(4)}>4</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          Total {Total}
          <Button outline className="text-center w-100">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Gift;