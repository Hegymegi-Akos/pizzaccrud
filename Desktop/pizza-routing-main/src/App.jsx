
import { Routes, Route, NavLink } from "react-router-dom"
import { Pizzak } from "./pages/Pizzak"
import { Pizza } from "./pages/Pizza"
import { UjPizza } from "./pages/UjPizza"
import List from "./pages/List";
import Mod from "./pages/Mod";
import Del from "./pages/Del";
import Upd from "./pages/Upd";
import Single from "./pages/Single";
import Create from "./pages/Create";

import './App.css'

export const App = () => {

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
       <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">PizzaApp</NavLink>

    {/* Hamburger gomb */}
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/pizzak'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-safe2"></i>Pizzák</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/new-pizza'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-pencil-square"></i>Új pizza</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/list'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-list"></i>Lista</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/create'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-plus-circle"></i>Létrehoz</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/mod'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-pencil"></i>Módosít</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/upd'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-arrow-repeat"></i>Frissít</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/del'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-trash"></i>Töröl</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/single'} className={({isActive}) => 
            "nav-link" + (isActive ? "active" : "")}>
            <span className="nav-link"><i className="bi bi-search"></i>Egy elem</span>
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
      <h1>React Router Példa</h1>
      
        <Routes>
          <Route path="/pizzak" element={<Pizzak />} />
          <Route path="pizza/:pizzaId" element={<Pizza />} />
          <Route path="/new-pizza" element={<UjPizza />} />
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/mod" element={<Mod />} />
          <Route path="/upd" element={<Upd />} />
          <Route path="/del" element={<Del />} />
          <Route path="/single" element={<Single />} />
        </Routes>
    </>
  )
}

export default App
