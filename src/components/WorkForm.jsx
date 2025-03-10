
import Input from "./Input";

function WorkForm({data, handleWorkSection}) {
    const onChange = function(event) {
        console.log(event.target.dataKey) /* would like to use so the function could be used for each field */
        console.log(event.target.value)
    }

    return (
        <form onSubmit={(event) => handleWorkSection(event, data)}>
            <Input
                type="text"
                id="namecompany"
                labelText="Company: "
                data-key="companyName"
                onChange={onChange}
                /* onChange={(event) => data.companyName = event.target.value} */> 
            </Input>
            <Input
                type="text"
                id="title"
                labelText="Occupation: "
                data-key="title"
                onChange={onChange}
                /* onChange={(event) => data.jobTitle = event.target.value} */> 
            </Input>
            <button>Confirm</button>
        </form>
    )
}

export default WorkForm;