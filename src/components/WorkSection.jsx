import React from "react";

import WorkForm from "./WorkForm";
import { DataContext } from "../App";

function WorkSection({
    handleWorkSection,
    handleEditState,
    removeWorkExperience,
    isFormOpen,
    setIsFormOpen}) {
    
    const {workExperience} = React.useContext(DataContext);

    return (
        <div>
            <h2>Work Section</h2>

            {!isFormOpen && (
                <button onClick={() => {
                    setIsFormOpen(!isFormOpen);
                }}>
                    Add a work experience
                </button>
            )}

            {isFormOpen && (
                <WorkForm
                    handleWorkSection={handleWorkSection}
                />
            )}

            {workExperience.map((element) => (

                <div key={element.id}>
                    {element.name}
                    {" "}
                    {!element.isOpen && (
                        <button onClick={() => handleEditState(element)}>Edit</button>)
                    }
                    {" "}
                    <button onClick={() => removeWorkExperience(element.id)}>Remove</button>
                    {element.isOpen && (
                        <WorkForm
                            dataToEdit={element}
                            handleWorkSection={handleWorkSection}
                        />
                    )}
                </div>
                
            ))}
        </div>
    )
}

export default WorkSection;