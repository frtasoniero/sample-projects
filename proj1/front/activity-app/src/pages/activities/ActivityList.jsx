import React from "react";
import ActivityItem from './ActivityItem';

export default function ActivityList(props) {
  return (
    <div className="mt-3">
      {props.activities.map(item =>
        <ActivityItem
          editActivity={props.editActivity}
          toggleDeleteModal={props.toggleDeleteModal}
          item={item}
          key={item.id}
        />
      )}
    </div>
  );
}
