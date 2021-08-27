import React from "react";
import Custom from "./Custom";

export default class Counter extends React.Component {
  state = {
    count: 0,
    isShowName: false
  };

  add = () => {
    this.setState({ count: ++this.state.count });
  };

  minus = () => {
    console.log("minus");
    this.setState({ count: --this.state.count });
  };

  showHideName = () => {
    this.setState({ isShowName: true });
    setTimeout(() => {
      this.setState({ isShowName: false });
    }, 3000);
  };

  render() {
    return (
      <div>
        <Custom />
        {this.state.isShowName && (
          <div>
            <p>dynamic div</p>
          </div>
        )}
        <p>{React.version}</p>
        <h4>{this.state.count}</h4>
        <button onClick={this.minus} disabled={this.state.count <= 0}>
          Minus
        </button>
        &nbsp;&nbsp;
        <button onClick={this.add}>Add</button>&nbsp;&nbsp;
        <button onClick={this.showHideName}>dynamic view</button>
      </div>
    );
  }
}
