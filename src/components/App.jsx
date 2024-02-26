import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';

import Navigation from './Navigation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
