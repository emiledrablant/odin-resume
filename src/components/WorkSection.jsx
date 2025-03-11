
import WorkForm from "./WorkForm";

function WorkSection({
    workExperience,
    handleWorkSection,
    editWorkExperience,
    removeWorkExperience,
    isFormOpen,
    setIsFormOpen}) {
    
    return (
        <div>
            <h2>Work Section</h2>

            {!isFormOpen && (
                <button onClick={() =>{setIsFormOpen(!isFormOpen)}}>
                    Add a work experience
                </button>
            )}

            {isFormOpen && (
                <WorkForm handleWorkSection={handleWorkSection} setIsFormOpen={setIsFormOpen} />
            )}

            {workExperience.map((element) => (

                <div key={element.id}>
                    {element.name}
                    {" "}
                    {!element.isOpen && (
                        <button onClick={() => editWorkExperience(element)}>Edit {element.name}</button>)
                    }
                    {" "}
                    <button onClick={() => removeWorkExperience(element.id)}>Remove</button>
                    {element.isOpen && (
                        <WorkForm handleWorkSection={handleWorkSection} />
                    )}
                </div>
                
            ))}
        </div>
    )
}

export default WorkSection;