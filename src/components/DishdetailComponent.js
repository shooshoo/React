import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    };


    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {
            const commentsList = comments.map((commentObj) => {
                return (
                        <ul class="list-unstyled">
                            <li>{commentObj.comment}</li>
                            <li>-- {commentObj.author} , {commentObj.date}</li>
                        </ul>
                );
            });

            return (
                <div>
                    <h1>Comments</h1>
                    {commentsList}
                </div>
            );
        }
        else return (
            <div></div>
        );

    }

    render() {

        if (this.props.dish != null)
            return (

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>

            );
        else
            return (
                <div></div>
            );

    }
}
export default DishDetail;
