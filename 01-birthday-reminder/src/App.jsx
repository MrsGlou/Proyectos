import { useState } from "react";
import data from "./data/data";
import "./App.css";
import PeopleCard from "./components/List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="people-container">
        <h2>{people.length} birthdays today</h2>
        {people.map((person) => {
          return <PeopleCard person={person} key ={person.id} />;
        })}

        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
