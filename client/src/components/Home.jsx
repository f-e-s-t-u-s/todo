import React from "react";
import "./home.scss";

function Home() {


    
  return (
    <div className="task-container">
      <div className="add-task">
        <h1>Task Manager</h1>
        <div className="input-task">
          <input type="text" />
          <button>Add task</button>
        </div>
      </div>

      <div className="list-task">
        <div className="task-item">
          <p>Task item one</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
