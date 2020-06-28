import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar (props) {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/add-book">Add Book</Link>
            </li>
          </ul>
        </nav>
    );
}
