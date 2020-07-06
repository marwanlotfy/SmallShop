import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar (props) {
    return (
        <nav >
          <ul className="nav flex-column nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-book">Add Book</Link>
            </li>
          </ul>
        </nav>
    );
}
