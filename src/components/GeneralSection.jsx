
import Input from "./Input";

function GeneralSection({ onChange }) {

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Input
                type="text"
                id="name"
                labelText="Full name: "
                placeholder="John Doe"
                onChange={onChange}
            />
            <Input
                type="text"
                id="email"
                labelText="email: "
                placeholder="johndoe33@yahoo.com"
                onChange={onChange}
            />
        </form>
    )
}

export default GeneralSection;