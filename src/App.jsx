import { useState } from 'react'
import './App.css'

import GeneralForm from './components/general-form.jsx';
import Result from './components/Result.jsx'

function App() {
  const [mainInfos, setMainInfos] = useState({
    name:"Chris Hadfield",
    email:"chrishadfied@nasa.com",
    phone:"+32 788 411 255",
    location:"Ontario, Canada"});

  function handleMainInfosChange(infos) {
    setMainInfos(infos);
  }

  return (
    <>
    <GeneralForm onValidation={handleMainInfosChange}/>
    <Result mainInfos={mainInfos}/>
    </>
  )
}

export default App
