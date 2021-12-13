import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
// import PhotoList from "./components/PhotoList";

//state is a piece of data that is maintained by the application
// it could be anything, but it is usually an object
// it essentially is a container for data that is used by components in the application
//to render the UI and respond to user actions (events)
//and make the application perform logic  (functions)
//to update the state  (functions) and re-render the UI (functions)  to reflect the new state (functions)

function App() {
  //this function is a React component that returns JSX (HTML) to be rendered to the DOM (browser)
  //useState is a React hook that returns an array with two elements (state and a function to update the state)
  //the first element is the state and the second is a function to update the state
  //the function takes an argument and sets the state to that argument
  //the state is an object that contains the data that is used by the application
  //the state is updated by calling the function that is passed to the useState hook
  //then we can use the state in different components of the application to render the UI and respond to user actions (events)
  //and make the application perform logic  (functions)  to update the state  (functions) and re-render the UI (functions)
  // to reflect the new state (functions)
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
