import React from "react";
import "./App.css";
import Card from "./Components/Card";

const App: React.FC = () => {
  return (
    <div className="App">
      <Card
        name="Nguyen Tuan Nguyen"
        job="Student"
        about="Nothin' here, just a stupid guy with his stuffs"
      />
    </div>
  );
};

export default App;
