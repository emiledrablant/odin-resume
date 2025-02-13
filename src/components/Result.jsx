
import '../styles/result.css'


function Result({mainInfos}) {
    return(<>
    <div id="container">
        <div id="header">
            <h1>{mainInfos.name}</h1>
            <div id="general-infos">
                <span>email: {mainInfos.email}</span>
                <span>phone: {mainInfos.phone}</span>
                <span>located in: {mainInfos.location}</span>
            </div>
        </div>
    </div>
    </>)
}

export default Result