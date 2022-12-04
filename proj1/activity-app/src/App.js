import { useState } from 'react';
import './App.css';
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'

let initialState = [
  {
    id: 1,
    description: 'Book One',
    priority: "1",
    title: 'Lord of the Rings',
  },
  {
    id: 2,
    description: 'Book Two',
    priority: "2",
    title: 'The Dark Tower',
  }
];

let currentId = initialState[initialState.length - 1].id + 1;

function App() {
  const [activities, setActivities] = useState(initialState);

  function addAcitivity(e) {
    e.preventDefault();

    const activity = {
      id: document.getElementById('id').value,
      title: document.getElementById('title').value,
      priority: document.getElementById('priority').value,
      description: document.getElementById('description').value,
    };

    currentId++;

    setActivities([...activities, {...activity}]);
  };

  function editActivity(id) {

  }

  function deleteActivity(id) {
    const activitiesFilter = activities.filter(item => item.id !== id);

    setActivities([...activitiesFilter]);
  }

  return (
    <>
      <ActivityForm 
        addAcitivity={addAcitivity}
        currentId={currentId}
      />
      <ActivityList 
        activities={activities}
        deleteActivity={deleteActivity}
        editActivity={editActivity}
      />
    </>
  );
}

export default App;
