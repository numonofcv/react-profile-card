import React from "react";

export default function Skill(props) {
    return (
        <div className="skill" style={{backgroundColor:props.color, borderRadius:props.radius, padding:props.padding, boxShadow:props.boxShadow}}>
            <span style={{margin:props.margin}}>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
}
