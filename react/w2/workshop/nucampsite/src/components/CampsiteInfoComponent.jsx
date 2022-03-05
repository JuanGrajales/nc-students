import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfoComponent extends Component {
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments = (comments) => {
    if (comments) {
      //   const displayComments = comments.map((comment) => {
      //     return (
      //       <div>
      //         <p>{comment.text}</p>
      //         -- {comment.author}, {comment.date}
      //       </div>
      //     );
      //   });
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div>
                <p>{comment.text}</p>
                -- {comment.author}, {comment.date}
              </div>
            );
          })}
          {/* {displayComments} */}
          {/* <p>{comments[0].text}</p>
          -- {comments[0].author}, {comments[0].date} */}
        </div>
      );
    } else {
      return <div />;
    }

    // return <div>
    //     {comments ? <div>display comments</div> : ''}
    // </div>
  };

  render() {
    // if(this.props.campsite !== null){

    if (this.props.campsite) {
      console.log(this.props.campsite.comments);
      console.log(this.props.campsite.comments[0]);
      console.log(this.props.campsite.comments[0].author);
      return (
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    } else {
      return (
        <div>
          <img src="https://placekitten.com/g/200/400" alt="cat" />
        </div>
      );
    }
  }
}

export default CampsiteInfoComponent;
