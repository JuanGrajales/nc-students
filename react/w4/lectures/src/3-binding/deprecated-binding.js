let reactComponent = {
  num: 10,
  func: function () {
    console.log("func", this.num);
  },
  window: {
    num2: 11,
    func2: function () {
      console.log("func2 ", this.num, this.num2);
    },
  },
  func3: function () {
    console.log("func3 ", this.num);
    setTimeout(function () {
      console.log("setTimeout ", this.num);
    }, 500);
  },
  func4: function () {
    console.log("func4 ", this.num);
    setTimeout(() => {
      console.log("setTimeout ", this.num);
    }, 500);
  },
  func5: function () {
    console.log("func5 ", this.num);
    setTimeout(
      function () {
        console.log("setTimeout ", this.num);
      }.bind(this),
      500
    );
  },
};

// dot notation
// console.log(reactComponent.num);

reactComponent.func();
reactComponent.window.func2();

// after binding
const func2Bind = reactComponent.window.func2.bind(reactComponent);
// func2Bind();
