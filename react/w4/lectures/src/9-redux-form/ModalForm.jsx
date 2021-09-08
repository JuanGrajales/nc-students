import React, { Component } from "react";
import { LocalForm, Control } from "react-redux-form";
import { Button, Label, Modal, ModalHeader, ModalBody } from "reactstrap";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil fa-lg" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="matchIdForInput">Password</Label>
                <Control.text
                  model=".password"
                  id="matchIdForInput"
                  placeholder="password"
                />
              </div>
              <button type="submit">Submit</button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;
