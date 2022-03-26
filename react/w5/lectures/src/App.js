import React, { Component } from "react";
// import ReduxIntro from "./1-redux/ReduxIntro";
import Fetch from "./3-react-fetch/Fetch";

// Things to keep in mind
// * 2 hours a day might not be possible for everyone, that's okay
// * Consistency is more important, think of the gym
// * Tutorial Hell, learning an instrument
// * Finish the material before the workshop
// * Nucamp will teach you to drive the car, not how the engine works that comes later
// * The material in Nucamp might not be enough sometimes or it might not suit your style of learning (medium or devpost) ask instructor if you can’t find anything
// * If there's something you're not satisfied with during the workshop then let me know as soon as you comfortably can. I don't anyone being unsatisfied for four hours. Examples: if you want to move to a different breakout room, want me to repeat something, etc.
// * If you do not finish the material for the week do not attempt to finish it during the workshop.
// * Get your monies worth. Ask questions, make connections, network.
// * Format to asking a question: send a message in the 3-React channel with the code error, what you are trying to accomplish, and share your code
// * Repeatition is key
// * IMPORTANT: you will never stop learning as a dev and you will never stop messing up. It's okay, embrace it.

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux</h1>
        {/* <ReduxIntro /> */}
        <Fetch />
      </div>
    );
  }
}

export default App;
