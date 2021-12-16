import './App.css';
// import {useEffect, useState} from "react";
// import {TodoService} from "./TodoService";

// const service = new TodoService();

function App() {

    // ADD TASK FORM
    // const [taskName, setTaskName] = useState('');
    // const onChangeTaskName = (e) => {
    //     setTaskName(e.target.value);
    // };
    // const onSubmitTaskName = (e) => {
    //     service.addTask(taskName);
    // };

    // TASKS LIST
    // const [tasks, setTasks] = useState([]);
    // useEffect(() => {
    //     setTasks(tasks.concat(service.getData()));
    //     const unsubscribe = service.subscribe(() => {
    //         setTasks(tasks.concat(service.getData()));
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);


  return (
    <div>
      Hello World!
    </div>
    // <div className="app-container d-flex align-items-center justify-content-center flex-column">
    //     <h3>Todo App</h3>
    //     <div className="d-flex align-items-center mb-3">
    //         <div className="form-group mr-3 mb-0">
    //             <input
    //                 value={taskName}
    //                 onChange={onChangeTaskName}
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="Enter a task here"
    //             />
    //         </div>
    //         <button
    //             type="button"
    //             className="btn btn-primary mr-3"
    //             onClick={onSubmitTaskName}
    //         >
    //             Save
    //         </button>
    //     </div>
    //     <div className="table-wrapper">
    //         <table className="table table-hover table-bordered">
    //             <thead>
    //             <tr>
    //                 <th>No.</th>
    //                 <th>Todo item</th>
    //                 <th>status</th>
    //                 <th>Actions</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {tasks.map(task => <tr key={task.id} className="{{ task.status ? 'table-success' : 'table-light' }}">
    //                 <td>{task.id}</td>
    //                 <td className={!task.active ? 'complete' : 'task'}>
    //                     {task.name}
    //                 </td>
    //                 <td>{!task.active ? "Completed" : "In progress"}</td>
    //                 <td>
    //                     <button className="btn btn-danger" onClick={removeTask(task.id)}>
    //                         Delete
    //                     </button>
    //                     <button className="btn btn-success" onClick={finishTask(task.id)}>
    //                         Finished
    //                     </button>
    //                 </td>
    //             </tr>)}
    //             </tbody>
    //         </table>
    //     </div>
    // </div>
  );
}

export default App;
