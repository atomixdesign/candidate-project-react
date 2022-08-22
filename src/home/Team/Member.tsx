import React from "react";
import "./Team.scss";

interface teamProps {
  img: string;
  position: string;
  name: string;
}

function Member(props: teamProps) {
  return (
    <div className="ts-column">
      <div className="ts-desc">
        <img src={props.img} />
        <p className="image-position">{props.position}</p>
        <p className="image-name">{props.name}</p>
      </div>
    </div>
  );
}

export default Member;
