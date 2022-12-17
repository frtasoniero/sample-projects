import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import api from '../../api/activity';
import ActivityList from './ActivityList';
import ActivityForm from './ActivityForm';
import Title from './../../components/Title';

let initialState = [];

export default function Activity() {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activities, setActivities] = useState(initialState);
  const [activity, setActivity] = useState({id: 0});

  const toggleActivityModal = () => setShowActivityModal(!showActivityModal);
  const toggleDeleteModal = (id) => {
    if (id !== 0 && id !== undefined) {
      const activityFilter = activities.filter(item => item.id === id);
      setActivity(activityFilter[0]);
    }
    else {
      setActivity({ id: 0 });
    }
    setShowDeleteModal(!showDeleteModal);
  }

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

  const newActivity = () => {
    setActivity({ id: 0 })
    toggleActivityModal();
  }

  const addActivity = async (activity) => {
    const response = await api.post('Activity', activity);
    setActivities([...activities, response.data]);
    toggleActivityModal();
  };

  const editActivity = (id) => {
    const activityFilter = activities.filter(item => item.id === id);
    setActivity(activityFilter[0]);
    toggleActivityModal();
  }

  const deleteActivity = async (id) => {
    if (await api.delete(`Activity/${id}`)) {
      const activitiesFilter = activities.filter(item => item.id !== id);
      setActivities([...activitiesFilter]);
      toggleDeleteModal(0);
    }
  }

  const updateActivity = async (activity) => {
    const response = await api.put(`Activity/${activity.id}`, activity);
    setActivities(activities.map((item) => (item.id === response.data.id ? response.data : item)));
    setActivity({id: 0});
    toggleActivityModal();
  }

  const cancelActivity = () => {
    setActivity({id: 0});
    toggleActivityModal();
  }

  return (
    <>
      <Title 
        title={'Activity ' + (activity.id !== 0 ? activity.id : '')}
      >
        <Button variant="primary" onClick={newActivity}>
          <i className='fas fa-plus' />
        </Button>
      </Title>

      <ActivityList 
        activities={activities}
        editActivity={editActivity}
        toggleDeleteModal={toggleDeleteModal}
      />

      <Modal show={showActivityModal} onHide={toggleActivityModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Activity {activity.id !== 0 ? activity.id : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ActivityForm
            activities={activities}
            addActivity={addActivity}
            selectedActivity={activity}
            updateActivity={updateActivity}
            cancelActivity={cancelActivity}
          />
        </Modal.Body>
      </Modal>

      <Modal 
        show={showDeleteModal}
        onHide={toggleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Deleting Activity {activity.id !== 0 ? activity.id : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure do you want to delete activity {activity.id}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button className='btn me-2' onClick={() => deleteActivity(activity.id)}>
            <i className='fas fa-check me-2'></i>
            Yes
          </Button>
          <Button className='btn btn-danger me-2' onClick={() => toggleDeleteModal(0)}>
            <i className='fas fa-times me-2'></i>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
