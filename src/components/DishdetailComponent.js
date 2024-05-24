import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Label, Modal, ModalHeader, ModalBody, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Control, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseurl';
import './DishBreadcrumb.css'; // Import your custom CSS

const Breadcrumbs = ({ items }) => {
    return (
        <div className="custom-breadcrumb mt-3">
            {items.map((item, index) => (
                <div key={index} className="custom-breadcrumb-item">
                    {index === 0 ? (
                        <Link to={item.link}>
                            <span><FaAngleLeft/></span>
                        </Link>
                    ) : item.active ? (
                        item.name
                    ) : (
                        <Link to={item.link}>{item.name}</Link>
                    )}
                </div>
            ))}
        </div>
    );
};

function RenderDish({ dish, favorite, postFavorite }) {
    return (
        <div className="col-12 col-md-5 mb-3">
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <Button outline color="light" onClick={() => favorite ? console.log('Already favorite') : postFavorite(dish._id)}>
                        {favorite ?
                            <MdOutlineDeliveryDining/>
                            :
                            <MdOutlineDeliveryDining/>
                        }
                    </Button>
                </CardImgOverlay>
                <CardBody style={{backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 225, 0)"}}>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments, postComment, dishId }) {
    if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment._id}>
                                <p>{comment.comment}</p>
                                <p>{comment.rating} ⭐</p>
                                <p>-- {comment.author.firstname} {comment.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.updatedAt)))}</p>
                            </li>
                        );
                    })}
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        );
    else
        return (
            <div></div>
        );
}

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.comment);
    }

    render() {
        return (
            <div>
                <Button className="mb-4" outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment"
                                        rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" className="bg-primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null)
        return (
            <div style={{ backgroundColor: "rgb(255, 225, 0)" }} className='pb-5'>
                <Container>
                    <div className="row">
                        <Breadcrumbs items={[
                            { link: '/menu', active: false },
                            { name: props.dish.name, link: '', active: true }
                        ]} />
                        <div className="col-12 mt-3">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row" style={{overflow: "hidden"}}>
                        <RenderDish dish={props.dish} favorite={props.favorite} postFavorite={props.postFavorite} />
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish._id} />
                    </div>
                </Container>
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default DishDetail;
