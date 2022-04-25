import logo from './logo.svg';
import './App.css';

import TaskListComponent from './components/container/task_list';
import ContactoList from './components/container/ContactoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Facundo"/>
        <Fgreeting name='Cirilo'/>*/}
        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        <ContactoList />
      </header>
      
    </div>
  );
}

export default App;
