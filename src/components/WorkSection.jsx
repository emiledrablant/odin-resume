import React from "react";
import WorkForm from "./WorkForm";

function WorkSection({workExperience, handleWorkSection}) {
    const [isFormOpen, setIsFormOpen] = React.useState(false);

    const data = {companyName: "", jobTitle: "",};

    return (
        <div>
            <h2>Work Section</h2>

            {!isFormOpen && (
                <button onClick={() =>{setIsFormOpen(!isFormOpen)}}>
                    Add a work experience
                </button>
            )}

            {isFormOpen && (
                <WorkForm data={data} handleWorkSection={handleWorkSection} />
            )}

            {workExperience.map((exp) => (
                <div key={exp.id}>{exp.name}</div>
            ))}
        </div>
    )
}

export default WorkSection;