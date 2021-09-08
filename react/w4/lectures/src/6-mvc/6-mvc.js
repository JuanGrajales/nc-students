// https://www.guru99.com/mvc-tutorial.html

// view file
import React from "react";

const ComponentName = (props) => {
  return (
    <React.Fragment>
      <Modal>
        <form>
          <input type="text" name="username" id="" />
          <input type="text" name="password" id="" />
          <button>Log In</button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default ComponentName;

// controller file
// check if the if the credentials are correct
let savedPassword = "pass";
let userPasswordInput = "pass";
if (savedPassword === userPasswordInput) {
  console.log("login");
}

// model file
let user = {
  username: "",
  password: "",
};
