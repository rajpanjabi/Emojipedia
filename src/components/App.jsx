import React from "react";
import Entry from "./Entry";

import emojipedia from "../emojipedia";

function createEntry(ent) {
  return (
    <Entry key={ent.id} text={ent.meaning} emoji={ent.emoji} title={ent.name} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)};</dl>
    </div>
  );
}

export default App;
