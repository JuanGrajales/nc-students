// IMPORTANT: Remind me to do the portfolio start session once workshop ends

// Let's review some of the steps you wrote this week

// How to start a react app?
// $ npx create-react-app app-name-using-kebab-case

// How to create a component?
// shortcuts: rcc for class components, rsc for functional components

// How to use a component that is already created?
// step 1: go to the location where the component should be displayed
// step 2: call the component using the following syntax <ComponentName />
// step 3: import the component using the following syntax import ComponentName from 'file-path';

// How to display an array of elements?
displayArray = () => {
  let arrayOfHtml = this.state.arrayName.map((eachElement) => {
    return <li>{eachElement}</li>;
  });
  return arrayOfHtml;
};

// How to create a prop
// step 1: find where the component you want to pass the data to is called
// step 2: after the name of the component but before the / create the name for the prop (e.g. <Component propName />)

// How to give a value to a prop
// step 1: after the propName use the assignment operator (=)
// step 2: after the equal give it a value (e.g. "string", 11, object, array) (if you want to pass a variable to a prop then you need to use curly braces)

// How to use the prop in the component you passed it to?
// step 1: {this.props.nameOfProp}
