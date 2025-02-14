
import '../styles/result.css'
import Input from './InputText';

function GeneralForm({onValidation}) {
    const userInfos = { name: "temp", email: "XXX", phone: "YYY", location: "ZZZ"};

    return(
    <div id="container">
        <h2>General informations</h2>
        <br />
        <Input name="Full name" value="testo" />
        <button onClick={() => {onValidation(userInfos)}}>Confirm</button>
    </div>
    )
}

export default GeneralForm