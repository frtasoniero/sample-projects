import { useState, useEffect } from 'react';
import './App.css';
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import api from './api/activity'

let initialState = [];

function App() {
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

  const addActivity = async (activity) => {
    const response = await api.post('Activity', activity);
    setActivities([...activities, response.data]);
  };

  function editActivity(id) {
    const activityFilter = activities.filter(item => item.id === id);

    setActivity(activityFilter[0]);
  }

  const deleteActivity = async (id) => {
    if (await api.delete(`Activity/${id}`)) {
      const activitiesFilter = activities.filter(item => item.id !== id);
      setActivities([...activitiesFilter]);
    }
  }

  const updateActivity = async (activity) => {
    const response = await api.put(`Activity/${activity.id}`, activity);
    setActivities(activities.map((item) => (item.id === response.data.id ? response.data : item)));
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
