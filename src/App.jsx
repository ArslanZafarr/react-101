
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MainLayout from './layouts/MainLayout';
import Users from './pages/Users/Users';
import AddNewUser from './pages/Users/AddNewUser/AddNewUser';
import EditUser from './pages/Users/EditUser/EditUser';
import Conditional from './pages/Conditional/Conditional';
import MultiStep from './pages/MultiStep/MultiStep';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add-new-user" element={<AddNewUser />} />
        <Route path="/users/edit-user/:id" element={<EditUser />} />
        <Route path="/conditional-rendering" element={<Conditional />} />
        <Route path="/multi-step-form" element={<MultiStep />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
