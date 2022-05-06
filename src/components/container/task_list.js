import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


function TaskListComponent(props) {

  
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  const changeCompleted = () => {
      console.log('ToDo: Cambiar estado de una tarea');
  }

  return (
    <div>
        <div className='col-12'>
            <div className='card'>
            {/*card header*/}
                <div className='card-header p-3'>
                    <h5>
                      Your Tasks:
                    </h5>
                </div>
                {/*Card Body(content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position:'relative', height: '400px'}}>
                    <table>
                      <thead>
                        <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                        {/* TODO: Iterar sobre una lista de tareas */}
                        <TaskComponent task={defaultTask}/>
                      </tbody>
                      
                    </table>
                </div>
            </div>

            
        </div>
        {/* ToDo: Aplicar un for/map para renderizar una lista*/}
        
    </div>
  )
}



export default TaskListComponent;
