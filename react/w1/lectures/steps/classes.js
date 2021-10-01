// How to create a class
// step 1: use keyword class
// step 2: write class name using PascalCase (every first letter of a word should start with a capital letter)
// step 3: add {}
class ExampleClass {}

// How to create a constructor
// step 1: inside of the {} use constructor keyword
// step 2: add ()
// step 3: inside of the () write your parameters seperated by comma
// step 4: add {}
// step 5: each property shoudl be assigned to the value of the corresponding parameter by using this syntax: this.propertyName = paramName

class ExampleClass2 {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }
}

// How to add a method to a class that calls a property of the class
// step 1: outside the {} of the constructor but instide the {} of the class write the methodName using camelCase
// step 2: add ()
// step 3: add {}
// step 4: add whatever code you want to execute inside the method (e.g. console.log())
// step 5: call a property of a class by using the following syntax: this.propertyName
// step 6(optional): add parameters to your method inside the ()

class ExampleClass3 {
  constructor(param1) {
    this.property1 = param1;
  }

  method1() {
    console.log(`${this.property1}`);
  }
}

// How to create an object from a class
// step 1: use keyword const
// step 2: name the object using camelCase
// step 3: use assignment operator
// step 4: user keyword new
// step 5: specify the class you want to create the object from (use PascalCase for the class name)
// step 6: add parenthesis after class name
// step 7: optional, add any arguments necessary for constructor
let obj = new ExampleClass3();
