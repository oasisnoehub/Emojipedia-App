import React from "react";
import Entity from "./Entity";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {
        emojipedia.map((item) => <Entity key={item.id} emoji={item.emoji} name={item.name} content={item.meaning}/>)
      }
      </dl>
    </div>
  );
}

export default App;
