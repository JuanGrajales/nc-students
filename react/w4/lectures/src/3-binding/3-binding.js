let reactComponent = {
  num: 10,
  func: function () {
    console.log("func", this.num);
  },
  window: {
    func2: function () {
      console.log("func2 ", this.num);
    },
  },
};

reactComponent.func();
reactComponent.window.func2();

// after binding
const func2Bind = reactComponent.window.func2.bind(reactComponent);
func2Bind();
