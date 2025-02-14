
import '../styles/result.css'

function GeneralForm({onValidation}) {
    const userInfos = { name: "temp", email: "XXX", phone: "YYY", location: "ZZZ"};

    return(<>
    <div id="container">
        <p>aaa</p>
        <button onClick={() => {onValidation(userInfos)}}>Confirm</button>
    </div>
    </>)
}

export default GeneralForm