import { useState, useEffect } from 'react';
import './App.css';
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import api from './api/activity'

let initialState = [
  // {
  //   id: 1,
  //   description: 'Book One',
  //   priority: "1",
  //   title: 'Lord of the Rings',
  // },
  // {
  //   id: 2,
  //   description: 'Book Two',
  //   priority: "2",
  //   title: 'The Dark Tower',
  // }
];

function App() {
  const [index] = useState(0);
  const [activities, setActivities] = useState(initialState);
  const [activity, setActivity] = useState({id: 0});

  const getAllActivities = async () => {
    const response = await api.get('Activity');
    return response.data;
  }

  useEffect(() => {
    const getActivities = async () => {
      const allActivities = await getAllActivities();
      if (allActivities) setActivities(allActivities);
    }
    getActivities();
  }, []);

  function addActivity(activity) {
    setActivities([...activities, { ...activity, id: index }]);
  };

  function editActivity(id) {
    const activityFilter = activities.filter(item => item.id === id);

    setActivity(activityFilter[0]);
  }

  function deleteActivity(id) {
    const activitiesFilter = activities.filter(item => item.id !== id);

    setActivities([...activitiesFilter]);
  }

  function updateActivity(activity) {
    setActivities(activities.map((item) => (item.id === activity.id ? activity : item)));
    setActivity({id: 0});
  }

  function cancelActivity() {
    setActivity({id: 0});
  }

  return (
    <>
      <ActivityForm
        activities={activities}
        addActivity={addActivity}
        selectedActivity={activity}
        updateActivity={updateActivity}
        cancelActivity={cancelActivity}
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
