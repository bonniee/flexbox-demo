import React from "react/addons";

export default React.createClass({
  render() {
    var s = {
      height: "600px",
      width: "100%",
      borderWidth: "2px",
      borderColor: "black",
      borderStyle: "solid",
      fontSize: "48px"
    };

    var outer = {
      margin: "10px",
      border: "5px solid black",
      backgroundColor: "#34B3A0" 
    };

    var two = {
      margin: outer.margin,
      border: outer.border,
      backgroundColor: outer.backgroundColor
    };


    if (this.props.showAnswer) {
      s.display = "flex";
      s.flexDirection = "column";
      two.flex = "1";
    }

    return (
      <div className="skeletonContainer" style={s}>
        <div className="one" style={outer}>
        I'm a header...
        </div>
        <div className="two" style={two}>
        I'm the body, can you make me expand to fill the available space?
        </div>
        <div className="three" style={outer}>
        ...I'm a footer
        </div>
      </div>
      );
  }
})