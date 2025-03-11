
import Input from "./Input";

function WorkForm({handleWorkSection, setIsFormOpen}) {
    const data = {companyName: "", jobTitle: "",};
    
    const onChange = function(event) {
        const element = event.target.dataset["key"];
        data[element] = event.target.value;
    }

    return (
        <form onSubmit={(event) => handleWorkSection(event, data)}>
            <Input
                type="text"
                id="namecompany"
                labelText="Company: "
                data-key="companyName"
                onChange={onChange}>
            </Input>
            <Input
                type="text"
                id="title"
                labelText="Occupation: "
                data-key="jobTitle"
                onChange={onChange}> 
            </Input>
            <button type="submit">Confirm</button>
            <button type="reset" onClick={() => setIsFormOpen(false)}>Cancel</button>
        </form>
    )
}

export default WorkForm;