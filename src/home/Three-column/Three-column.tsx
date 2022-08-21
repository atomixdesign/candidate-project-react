import React from "react";
import "./Three-column.scss";
import data from "../../Data/threeColumn.json";

function ThreeColumn() {
  return (
    <div className="three-column">
      <a id="tc-section"></a>
      <div className="tc-heading">Three column with image</div>
      <div className="tc-content">
        <div className="tc-column">
          <p className="image-head">
            Lorem ipsum dolor sit amet conse tetur sadipiscing elite dolore.
          </p>
          <img src={data["tc-img"]} />
        </div>
        <div className="tc-column">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam.
          <br />
          <br />
          Et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr. Et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </div>
        <div className="tc-column">
          &gt;Lorem ipsum dolor sit amet, consetetur
          <br />
          &gt;Sadipscing elitr, sed diam nonumy
          <br />
          &gt;Eirmod tempor invidunt ut labore et dolore
          <br />
          &gt;magna aliquyam erat, sed diam voluptua
          <br />
          <br />
          Et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr. Et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </div>
      </div>
    </div>
  );
}

export default ThreeColumn;
