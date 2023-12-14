import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {Routes} from "react-router-dom"
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={
        <IndexPage />
      } />
      <Route path="/login" element={
        <LoginPage/>
      }/>
      <Route path="/register" element={
        <RegisterPage/>
      }/>
      </Route>
      </Routes>
  );
}

export default App;
