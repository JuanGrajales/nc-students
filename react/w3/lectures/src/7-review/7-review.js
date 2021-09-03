// If you have a component created and you want the user to be able to click on a link to view the component (i.e. webpage) how can you do this?
// step 1: decide where (normally this will go in the navbar) you want to place Link component to give the user somewhere to click, this will only change the url it will not display the component without the route component. Link syntax <Link to="/create-a-url-describing-the-page">Link name user will see</Link>
// step 2: within your Switch component add another Route component with a path attribute that matches the to attribute of the Link component you created in step 1. Route component syntax <Route exact path="/url-path-matching-to-path" render={() => <ComponentName />} />

// How to create a prop
// step 1: find where the component you want to pass the data to is called
// step 2: after the name of the component but before the / create the name for the prop (e.g. <Component propName />)

// How to give a value to a prop
// step 1: after the propName use the assignment operator (=)
// step 2: after the equal give it a value (e.g. "string", 11, object, array)

// How to use the prop in the component you passed it to?
// step 1: {this.props.nameOfProp}

// How to display an array using map

// mapping through an array saved in state in a class component
displayArray = () => {
  let arrayOfHtml = this.state.arrayName.map((eachElement) => {
    return <li>{eachElement}</li>;
  });
  return arrayOfHtml;
};

// mapping through an array saved in props in a functional component
displayArray2 = () => {
  let arrayOfHtml = props.arrayName.map((eachElement) => {
    return <li>{eachElement}</li>;
  });
  return arrayOfHtml;
};
