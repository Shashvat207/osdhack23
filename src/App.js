import Inputform from './components/InputForm'
import Main from './components/mainPage'
import Home from '../src/components/home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/mainPage';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/components/InputForm" element={<Inputform />} />
          <Route path="/" element={<Home />} />
          <Route path="/components/mainPage" element={<MainPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
