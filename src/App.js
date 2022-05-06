import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import TaskListComponent from './components/container/task_list';
import ContactoList from './components/container/ContactoList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Greetingstyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />*/}
        {/*<Greeting name="Facundo"/>
        <Fgreeting name='Cirilo'/>*/}
        {/* Componente de listado de tareas */}
        
        {/*<ContactoList />*/}
        {/*<Ejemplo1 />*/}
        {/*<Ejemplo2 />*/}
        {/*<MiComponenteConContexto />*/}
        {/*<Ejemplo4 nombre='Facundo'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>*/}
        {/* <Greetingstyled name='Facundo' />*/}
      {/* </header> */ }
      <TaskListComponent></TaskListComponent>
      
    </div>
  );
}

export default App;
