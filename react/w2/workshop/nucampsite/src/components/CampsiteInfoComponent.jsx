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

  render() {
    // if(this.props.campsite !== null){
    if (this.props.campsite) {
      return (
        <div className="row">{this.renderCampsite(this.props.campsite)}</div>
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
