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
      border: "5px solid black"      
    };

    var inner = {
      margin: "10px",
      backgroundColor: "#34B3A0"
    };

    var body = {
      margin: outer.margin,
      border: outer.border
    };

    var middle = {
      margin: inner.margin,
      backgroundColor: inner.backgroundColor
    };

    if (this.props.showAnswer) {
      s.display = "flex";
      body.flex = "1";
      s.flexDirection = "column";

      body.display = "flex";
      inner.flex = "1";
      middle.display = "flex";
      middle.alignItems = "center";
      middle.flex = "1";
    }

    return (
      <div className="skeletonContainer" style={s}>
        <div className="one" style={outer}>
        ...this is a header...
        </div>
        <div className="two" style={body}>
          <div className="twoA" style={inner}>
            I should be the left column
          </div>
          <div className="twoB" style={middle}>
            Can you center my text?
          </div>
          <div className="twoC" style={inner}>
            Make me the right column plz
          </div>
        </div>
        <div className="three" style={outer}>
        ...this is a footer...
        </div>
      </div>
      );
  }
})