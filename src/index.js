import React, { Component } from "react";
import { render } from "react-dom";

let snowBoardData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

const getPercent = decimal => {
  return decimal * 100 + "%";
};
const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const SnowBoardCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

render(
  <SnowBoardCounter
    total={snowBoardData.total}
    powder={snowBoardData.powder}
    backcountry={snowBoardData.backcountry}
    goal={snowBoardData.goal}
  />,
  document.getElementById("root")
);
