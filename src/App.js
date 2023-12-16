
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard'
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="main_container">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
