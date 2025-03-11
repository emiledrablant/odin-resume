import React from 'react'
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
  {id: crypto.randomUUID(), isOpen: false, name: "dummy data 1", title: "Chief Happiness Manager"},
  {id: crypto.randomUUID(), isOpen: false, name: "dummy data 2", title: "Senior Developer"},
];

function App() {
  const [generalInfos, setGeneralInfos] = React.useState(mockUser);
  const [workExperience, setWorkExperience] = React.useState(mockExp);
  const [isFormOpen, setIsFormOpen] = React.useState(false);

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
      isOpen: false,
      name: data.companyName,
      title: data.jobTitle,
    }
    setWorkExperience([...workExperience, nextData]);
    setIsFormOpen(false);
  }

  function editWorkExperience(element) {
    const nextData = structuredClone(workExperience)
    nextData.forEach((item) => {
      if (item.id === element.id) {
        item.isOpen = true;
      } else {
        item.isOpen = false;
      }
    })
    setWorkExperience(nextData);
  }

  function removeWorkExperience(id) {
    const nextData = workExperience.filter((entry) => {
      if (entry.id !== id) {
        return entry;
      }
    });
    setWorkExperience(nextData);
  }

  return (
    <>
      <GeneralSection
        generalInfos={generalInfos}
        onChange={handleGeneralInfos}
      />
      <WorkSection
        workExperience={workExperience}
        handleWorkSection={handleWorkSection} // TODO: rename
        editWorkExperience={editWorkExperience}
        removeWorkExperience={removeWorkExperience}
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
      />
      <Result
        generalInfos={generalInfos}
        workExperience={workExperience}
      />
    </>
  )
}

export default App
