import { useState } from 'react';
import './App.css';

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

  function priorityValue(value) {
    switch (value) {
      case "1":
        return "Low";
        break;
      case "2":
        return "Normal";
        break;
      case "3":
        return "High";
        break;
      default:
        return "Undefined";
        break;
    }
  }

  function priorityLabel(value) {
    switch (value) {
      case "1":
        return "smile";
        break;
      case "2":
        return "meh";
        break;
      case "3":
        return "frown";
        break;
      default:
        return "undefined";
        break;
    }
  }

  function priorityStyle(value) {
    switch (value) {
      case "1":
        return "success";
        break;
      case "2":
        return "light";
        break;
      case "3":
        return "warning";
        break;
      default:
        return "dark";
        break;
    }
  }

  return (
    <>
      <form className="row g-3 mt-2">
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input disabled type="text" className="form-control" id="id" value={currentId}></input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Priority</label>
          <select id="priority" className="form-select">
            <option defaultValue="0">Choose...</option>
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" id="title"></input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" id="description"></input>
        </div>
        <div className="col-12">
          <button className="btn btn-outline-primary" onClick={addAcitivity}>+ Activity</button>
        </div>
        <hr />
      </form>
      <div className="mt-3">
        {activities.map(item => (
          <div key={item.id} className={"card mb-2 shadow-sm border-" + priorityStyle(item.priority)}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-primary me-1">{item.id}</span>
                  - {item.title}
                </h5>
                <h6>
                  Priority: 
                  <span className="ms-1 text-black">
                    <i className={"me-1 far fa-" + priorityLabel(item.priority)}></i>
                    {priorityValue(item.priority)}
                  </span>
                </h6>
              </div>
              <p className="card-text">{item.description}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-sm btn-outline-primary me-2">
                  <i className="fas fa-pen me-2"></i>
                  edit
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="fas fa-trash me-2"></i> 
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
