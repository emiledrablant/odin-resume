import React from 'react'
import './App.css'

import GeneralSection from './components/GeneralSection';
import WorkSection from './components/WorkSection';
import Result from './components/Result';

export const DataContext = React.createContext();

const mockUser = {
  general: {
    name:"Chris Hadfield",
    email:"chrishadfied@nasa.com",
    phone:"+32 788 411 255",
    location:"Ontario, Canada",
  },
  experience: [
    {id: crypto.randomUUID(), isOpen: false, name: "dummy data 1", title: "Chief Happiness Manager"},
    {id: crypto.randomUUID(), isOpen: false, name: "dummy data 2", title: "Senior Developer"},
  ],
}

function App() {
  const [generalInfos, setGeneralInfos] = React.useState(mockUser.general);
  const [workExperience, setWorkExperience] = React.useState(mockUser.experience);
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
    let nextData = structuredClone(workExperience);
    if (data.id !== undefined) {
      nextData.forEach((item) => {
        if (item.id === data.id) {
          item.name = data.companyName;
          item.title = data.jobTitle;
          item.isOpen = false;
        }
      })
      setWorkExperience(nextData);
    } else {
      const newItem = {
        id: crypto.randomUUID(),
        isOpen: false,
        name: data.companyName,
        title: data.jobTitle,
      }
      setWorkExperience([...workExperience, newItem]);
    }

    setIsFormOpen(false);
  }

  function closeAllForms() {
    const nextData = structuredClone(workExperience);
    nextData.forEach((item) => {
        item.isOpen = false;
    })
    setWorkExperience(nextData);
    setIsFormOpen(false);
  }

  function handleEditState(element) {
    const nextData = structuredClone(workExperience);
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
    <DataContext value={{generalInfos, setGeneralInfos, workExperience, setWorkExperience, closeAllForms}}>
      <GeneralSection
        generalInfos={generalInfos}
        onChange={handleGeneralInfos}
      />
      <WorkSection
        workExperience={workExperience}
        handleWorkSection={handleWorkSection} // TODO: rename
        handleEditState={handleEditState}
        removeWorkExperience={removeWorkExperience}
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
      />
      <Result
        generalInfos={generalInfos}
        workExperience={workExperience}
      />
    </DataContext>
  )
}

export default App
