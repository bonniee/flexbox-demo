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

    var sOne = {
      margin: "10px",
      border: "5px solid black"      
    };

    var inner = {
      margin: "10px",
      backgroundColor: "#34B3A0"
    };

    return (
      <div className="skeletonContainer" style={s}>
        What happens if you add flex here?
        <div className="one" style={sOne}>
          Try adding display: flex to me.
          <div className="oneA" style={inner}>Elephants are nice.</div>
          <div className="oneB" style={inner}>Sloths are sleepy.</div>
        </div>
        <div className="two" style={sOne}>
          I'm the second div.
          <div className="twoA" style={inner}>I don't like peanuts.</div>
        </div>
      </div>
      );
  }
})