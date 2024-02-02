import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import './components/style.css'
import './App.css';
import Header from './components/header';
import Down from './components/footer';
import { useSelector } from 'react-redux';
import RouteApp from "./routes/route";

function App() {
  const Lang = useSelector((state) => state.counter.language);

  document.querySelector("meta[name='theme-color']").content = "#f8f9fa";

  return (
    <div dir={Lang === "Ar" ? ("rtl") : ("ltr")} className="App" >
      <BrowserRouter >
        <Header />
        <RouteApp />
        <Down />
      </BrowserRouter>
    </div>
  );
}

export default App;
