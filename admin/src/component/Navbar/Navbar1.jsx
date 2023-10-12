import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar1.css"

const Navbar1 = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-sm navbar-dark bg-dark z-2" aria-label="Third navbar example">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Expand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarsExample03">
      <ul className="navbar-nav me-auto mb-2 mb-sm-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown dropdown-toggle" to="/"  aria-expanded="false">
           Dropdown </Link>
          <ul className="dropdown-menu subdropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </div>
</nav>

      
    </div>
  )
}

export default Navbar1
