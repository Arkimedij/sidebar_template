import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Cricket from './pages/Cricket';
import Notes from './pages/Notes';
import Todo from './pages/Todo';
import Sidebar from './components/Sidebar';

function App() {
  return (
    
    <>
      <Router>
        <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/cricket' element={<Cricket/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/todo' element={<Todo/>}/>

        </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
