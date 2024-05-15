import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './components/pages/Admin/AdminDashboard';
import AdminDashboardLayout from './components/layout/AdminDashboardLayout';
import Employees from './components/pages/Admin/Employees';
import Login from './components/pages/Admin/Login';
import MainDashboard from './components/pages/Admin/MainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainDashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<AdminDashboardLayout><AdminDashboard /></AdminDashboardLayout>} />
        <Route path='/employees' element={<AdminDashboardLayout><Employees/></AdminDashboardLayout>}/>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
