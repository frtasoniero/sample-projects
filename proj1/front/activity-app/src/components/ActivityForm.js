import { useState, useEffect } from "react";

const initialActivity = {
  id: 0,
  title: "",
  priority: "0",
  description: ""
};

export default function ActivityForm(props) {
  const [activity, setActivity] = useState(currentActivity());

  useEffect(
    () => {
      if (props.selectedActivity.id !== 0) setActivity(props.selectedActivity);
    },
    [props.selectedActivity]
  );

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const cancelEditHandler = (e) => {
    e.preventDefault();

    props.cancelActivity();

    setActivity(initialActivity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.selectedActivity.id !== 0) props.updateActivity(activity);
    else props.addActivity(activity);

    setActivity(initialActivity);
  };

  function currentActivity() {
    if (props.selectedActivity.id !== 0) return props.selectedActivity;
    else return initialActivity;
  }

  return (
    <>
    <h1>Activity {activity.id !== 0 ? activity.id : ''}</h1>
    <form className="row g-3 mt-2" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={activity.title}
          onChange={inputTextHandler}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Priority</label>
        <select
          id="priority"
          className="form-select"
          name="priority"
          value={activity.priority}
          onChange={inputTextHandler}
        >
          <option defaultValue="Undefined">Choose...</option>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="col-md-12">
        <label className="form-label">Description</label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={activity.description}
          onChange={inputTextHandler}
        />
        <hr />
      </div>
      <div className="col-12">
        {
          activity.id === 0 ?
          <button
            className="btn btn-outline-primary"
            type="submit"
          >
            <i className="fas fa-plus me-2"></i>Activity
          </button>
          :
          <>
            <button
                className="btn btn-outline-success me-2"
                type="submit"
            >
                <i className="fas fa-plus me-2"></i>Save
            </button>
            <button
                className="btn btn-outline-warning"
                onClick={cancelEditHandler}
            >
                <i className="fas fa-xmark me-2"></i>Cancel
            </button>
          </>
        }
      </div>
    </form>
    </>
  );
}
