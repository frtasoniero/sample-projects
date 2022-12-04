import React from "react";

export default function ActivityForm(props) {
  return (
    <form className="row g-3 mt-2">
      <div className="col-md-6">
        <label className="form-label">Id</label>
        <input
          disabled
          type="text"
          className="form-control"
          id="id"
          value={props.currentId}
        />
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
        <input type="text" className="form-control" id="title" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Description</label>
        <input type="text" className="form-control" id="description" />
      </div>
      <div className="col-12">
        <button className="btn btn-outline-primary" onClick={props.addAcitivity}>
          + Activity
        </button>
      </div>
      <hr />
    </form>
  );
}
