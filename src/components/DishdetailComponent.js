import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle
} from 'reactstrap';




function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({ comments }) {
    if (comments != null) {
        const commentsList = comments.map((commentObj) => {
            return (
                <ul class="list-unstyled">
                    <li>{commentObj.comment}</li>
                    <li>-- {commentObj.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentObj.date)))}</li>
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

const DishDetail = (props) => {

    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>

            </div>


        );
    else
        return (
            <div></div>
        );

}

export default DishDetail;
