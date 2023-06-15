// UsersControl.js
import React from "react";

function UsersControl({ users, getUsers }) {
  function getMostCommonDiseaseType(users) {
    const counts = {};
    let maxCount = 0;
    let mostCommonType = "";

    users.forEach((user) => {
      const type = user.disease;
      counts[type] = (counts[type] || 0) + 1;
      if (counts[type] > maxCount) {
        maxCount = counts[type];
        mostCommonType = type;
      }
    });

    return mostCommonType;
  }

  return (
    <div className="users-control">
      <h2>Users Controlling</h2>
      <button onClick={getUsers}>View All Users</button>
      <ul>
        {users.length > 0 ? `Number of users : ${users.length - 1}` : ""}
        <br />
        {users.length > 0
          ? `Most common disease type: ${getMostCommonDiseaseType(users)}`
          : ""}

        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.disease}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersControl;
