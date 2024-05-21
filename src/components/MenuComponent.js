import React, { useState, useEffect } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Container, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { motion, AnimatePresence } from "framer-motion";
import MediaQuery from "react-responsive";
import { baseUrl } from "../shared/baseurl";

const activeButtonStyles = {
  backgroundColor: 'black',
  border: "2px solid black",
  color: 'yellow',
};

const inactiveButtonStyles = {
  backgroundColor: 'transparent',
  border: "2px solid black",
  color: 'black',
  '&:hover': {
    backgroundColor: 'darkgray',
    cursor: 'pointer',
  },
};

function RenderButtons({ category, changer, activeCategory, setActiveCategory }) {
    const isActive = activeCategory === category.name;
  
    const handleClick = () => {
      changer(category.items);
      setActiveCategory(category.name);
    };
  
    return (
      <motion.div whileHover={{scale: 1.1}}>
        <Button
          style={{...(isActive ? activeButtonStyles : inactiveButtonStyles)}}
          className="m-2 rounded-0"
          onClick={handleClick}
        >
          <div>{category.name}</div>
        </Button>
      </motion.div>
    );
  }

function RenderMenu ({items}) {
    return (
        <>
            <Col md={4}>
                <AnimatePresence mode="wait">
                {items && (
                    <motion.div
                    key={items._id}
                    style={{ scale: "0.9" }}
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <h3>{items.name}</h3>
                    <Link to={`/menu/${items._id}`}>
                        <CardImg src={baseUrl + items.image} alt={items.name} />
                    </Link>
                    <h4 className="mt-3">{items.ingreds}</h4>
                    <h5 className="text-muted">{items.price} TK</h5>
                    </motion.div>
                )}
                </AnimatePresence>
            </Col>
        </>
    )
}

function Menu(props) {

    const [items, Setitems] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null);

    const handleChange = (change) => {
        Setitems(change)
        setActiveCategory(change[0].category);
    }

    useEffect(() => {
        if (props.dishes && props.dishes.dishes.length > 0) {
          Setitems(props.dishes.dishes[0].items);
        }
      }, [props.dishes]);

      const category = props.dishes.dishes.map((dish) => {
        return (
          <div key={dish._id}>
            <RenderButtons
              category={dish}
              changer={handleChange}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
        );
      });

    const menu = items
    ? items.map((item) => {
        return <RenderMenu key={item._id} items={item} />;
      })
    : null;

    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }

    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }

    else
    return(
        <div style={{backgroundColor: "rgb(255, 225, 0)"}}>
            <h1 className="text-center pt-4">Menu</h1>
            <Container style={{maxWidth: "85%"}}>
                <Row className="d-flex justify-content-center pt-4 pb-4">
                    {category}
                </Row>
                <Row md={8} className="d-flex justify-content-center pb-4">
                    <MediaQuery minWidth={640}>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            {menu}
                        </div>  
                    </MediaQuery>
                    <MediaQuery maxWidth={639}>
                        <div style={{width: "100%"}}>
                            {menu}
                        </div>  
                    </MediaQuery>    
                </Row>
            </Container>
        </div>
    );
}

export default Menu;