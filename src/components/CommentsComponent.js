import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.name,
            values.comment);

    }

    render() {

        if (this.props.comments != null) {
            const commentsList = this.props.comments.map((commentObj) => {
                return (
                    <Stagger in>
                        <ul class="list-unstyled">

                            <Fade in>
                                <li>{commentObj.comment}</li>
                                <li>-- {commentObj.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentObj.date)))}</li>
                            </Fade>

                        </ul>
                    </Stagger>
                );
            });

            return (
                <React.Fragment>
                    <div>
                        <h1>Comments</h1>

                        {commentsList}

                        <Button outline onClick={this.toggleModal}><span className="fa fa-comment fa-lg"></span> Submit Comment</Button>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}><b>Submit Comments</b></ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                                <Row>
                                    <Label htmlFor="rate" md={2}><b>Rating</b></Label>
                                </Row>
                                <Row>
                                    <Col>
                                        <Control.select model=".rate" name="rate"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="name" md={4}><b>Your Name</b></Label>
                                </Row>
                                <Row>
                                    <Col>
                                        <Control.text model=".name" id="name" name="name"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3),
                                                maxLength: maxLength(15)
                                            }} />

                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="comment" md={2}><b>Comment</b></Label>
                                </Row>
                                <Row>
                                    <Col>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="5"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col>
                                        <Button type="submit" color="primary">
                                            Submit
                                    </Button>
                                    </Col>
                                </Row>

                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            );
        }
        else return (
            <div></div>
        );

    }

}

export default Comments;