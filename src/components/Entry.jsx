import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.text}</dd>
    </div>
  );
}

export default Entry;

//emoji=💪

//“You can do that!” or “I feel strong!” Arm with tense biceps. Also used
//in connection with doing sports, e.g. at the gym.
