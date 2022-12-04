import React from "react";

export default function Activities(props) {
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
    <div
      className={
        "card mb-2 shadow-sm border-" + priorityStyle(props.item.priority)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-primary me-1">{props.item.id}</span>
            - {props.item.title}
          </h5>
          <h6>
            Priority:
            <span className="ms-1 text-black">
              <i
                className={"me-1 far fa-" + priorityLabel(props.item.priority)}
              />
              {priorityValue(props.item.priority)}
            </span>
          </h6>
        </div>
        <p className="card-text">
          {props.item.description}
        </p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => props.editActivity(props.item.id)}
          >
            <i className="fas fa-pen me-2" />
            edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => props.deleteActivity(props.item.id)}
          >
            <i className="fas fa-trash me-2" />
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
