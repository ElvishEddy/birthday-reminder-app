import { useState } from "react";

import "./App.scss";
import Person from "./components/Person";
import data from "./assets/data";

function App() {
  const [people, setPeople] = useState(data);

  const handleOnClick = () => {
    setPeople([]);
  };

  return (
    <div className="app">
      <div className="app__container">
        <p className="app__notification">
          You have {people.length} brithdays today
        </p>
        <Person people={people} />
        <a href="#" className="app__button" onClick={handleOnClick}>
          Clear all
        </a>
      </div>
    </div>
  );
}

export default App;
