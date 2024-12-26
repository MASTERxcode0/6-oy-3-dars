import React from "react";
import cars from "./assets/data.json";
import Card from "./componenta/UserList";
import "./App.css";

function App() {
  return (
    <div className="Users">
      {cars.length > 0 &&
        cars.map((car, index) => {
          return <Card data={car} key={index} />;
        })}
    </div>
  );
}

export default App;
