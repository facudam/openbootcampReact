import { Task } from "../../models/task.class";
import '../../styles/task.scss';
import React from 'react'
import PropTypes from 'prop-types'

function TaskComponent({ task }) {
  return (

    <tr className="fw-normal">
        <th>
            <span className="ms-2">{task.name}</span>
        </th>
        <td className="align-middle">
            {/*TODO: Sustituir por un badge */}
            <span>{task.description}</span>
        </td>
        <td className="align-middle">
            {/* TODO: Sustituir por Íconos */}
            <span>{ task.completed }</span>
        </td>
    </tr>

    /*<div>
        <h2 className="task-name">
            Nombre: {task.name }
        </h2>
        <h3>
            Descripción: { task.description }
        </h3>
        <h4>
            Level: {  task.level }
        </h4>
        <h5>
            this task is: { task.completed ? 'COMPLETED' : 'PENDING'}
        </h5>
    </div>*/
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;
