import React from 'react';

const Skills = (props) => {
    return (
        <div className="skills">
            <h2>Skills : </h2>
            <ul>
                <li>{props.skillA}</li>
                <li>{props.skillB}</li>
                <li>{props.skillC}</li>
            </ul>
        </div>
    )
}
export default Skills;