
import React from "react";
import { DataContext } from "../App";

function Result() {
    const { generalInfos, workExperience} = React.useContext(DataContext);

    return (
    <>
        <div>
            <p>{generalInfos.name}</p>
            <p>{generalInfos.email}</p>
            <p>{generalInfos.phone}</p>
            <p>{generalInfos.location}</p>
        </div>
        <div>
            <h2>Work Section</h2>
            {workExperience.map((exp) => (
                <p key={exp.id}>{`${exp.name} - ${exp.title}`}</p>
            ))}

        </div>
    </>
    )
}

export default Result;