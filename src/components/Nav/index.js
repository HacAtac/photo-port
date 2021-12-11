import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  //what is currentCategory here? It is the value of the current category in the state or in easier words, the value of the current category in the state is the value of the current category in the state
  const { categories = [], setCurrentCategory, currentCategory } = props; //this is easy words to understand if you are new to react and you are not familiar with the syntax of destructuring
  //will be used to set the current category and to pass it to the parent component as a prop called currentCategory
  //and will be used to set the current category in the parent component as a prop called setCurrentCategory
  //then the parent component will be able to set the current category in the state of the app
  //so basically when the props are passed to the child component,
  //the child component will be able to set the current category in the state of the app

  // function categorySelected(name) {
  //   console.log(`${name} clicked`);
  // }

  //this basically sets the current category in the state of the app to the current selected category by the user in the nav bar
  //so basically when the props are passed to the child component, the child component will be able to set the current category in the state of the app
  //in easier terms, the child component will be able to set the current category in the state of the app
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name); //document.title is the title of the page currentCategory.name is the name of the current category
  }, [currentCategory]); //[currentCategory] is the array of the dependencies of the useEffect hook which is the currentCategory in the state of the app in the app.js file

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category); //this will trigger the setCurrentCategory hook in app.js
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
