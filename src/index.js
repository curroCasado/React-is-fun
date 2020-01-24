import React, { Component } from "react";
import { render } from "react-dom";

let snowBoardData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

class SnowBoardCounter extends Component {
  state = {};
  render() {
    const { total, powder, backcountry, goal } = this.props;
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
          <p>Goal: {goal}</p>
        </div>
      </section>
    );
  }
}

render(
  <SnowBoardCounter
    total={snowBoardData.total}
    powder={snowBoardData.powder}
    backcountry={snowBoardData.backcountry}
    goal={snowBoardData.goal}
  />,
  document.getElementById("root")
);
