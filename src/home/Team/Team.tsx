import React from "react";
import "./Team.scss";
import Member from "./Member";
import data from "../../Data/team.json";

const membersList = data.teamItems;
function Team() {
  return (
    <div className="team-sect">
      <div className="ts-heading">Team Section</div>
      <div className="ts-content">
        {membersList.map((data) => (
          <Member img={data.img} position={data.position} name={data.name} />
        ))}
      </div>
    </div>
  );
}

export default Team;
