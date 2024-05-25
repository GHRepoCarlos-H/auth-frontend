import { Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Login from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
