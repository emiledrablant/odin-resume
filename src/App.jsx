import { useState } from 'react'
import './App.css'

import GeneralSection from './components/GeneralSection';
import WorkSection from './components/WorkSection';
import Result from './components/Result';

const mockUser = {
  name:"Chris Hadfield",
  email:"chrishadfied@nasa.com",
  phone:"+32 788 411 255",
  location:"Ontario, Canada",
}

const mockExp = [
  {id: crypto.randomUUID(), name: "dummy data 1", title: "Chief Happiness Manager"},
  {id: crypto.randomUUID(), name: "dummy data 2", title: "Senior Developer"},
];

function App() {
  const [generalInfos, setGeneralInfos] = useState(mockUser);
  const [workExperience, setWorkExperience] = useState(mockExp);

  function handleGeneralInfos(event) {
    const nextInfos = {
      ...generalInfos,
      [event.target.id]: event.target.value,
    };
    setGeneralInfos(nextInfos);
  }

  function handleWorkSection(event, data) {
    event.preventDefault();
    const nextData = {
      id: crypto.randomUUID(),
      name: data.companyName,
      title: data.jobTitle,
    }
    setWorkExperience([...workExperience, nextData]);
  }

  return (
    <>
      <GeneralSection
        generalInfos={generalInfos}
        onChange={handleGeneralInfos}
      />
      <WorkSection
        workExperience={workExperience}
        handleWorkSection={handleWorkSection}
      />
      <Result
        generalInfos={generalInfos}
        workExperience={workExperience}
      />
    </>
  )
}

export default App
