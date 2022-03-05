import React, { Component } from "react";

class CampsiteInfoComponent extends Component {
  render() {
    // if(this.props.campsite !== null){
    if (this.props.campsite) {
      return <div className="row">Campsite selected</div>;
    } else {
      return <div>No campsite selected</div>;
    }
  }
}

export default CampsiteInfoComponent;
