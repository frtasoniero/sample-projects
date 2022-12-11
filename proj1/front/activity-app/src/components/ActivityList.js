import React from "react";
import Activities from './Activities'

export default function ActivityList(props) {
  return (
    <div className="mt-3">
      {props.activities.map(item =>
        <Activities
          editActivity={props.editActivity}
          toggleDeleteModal={props.toggleDeleteModal}
          item={item}
          key={item.id}
        />
      )}
    </div>
  );
}
