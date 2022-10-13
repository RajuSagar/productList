import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <ul className="list-type">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li className="spacing">
        <Link to="/products">products</Link>
      </li>
    </ul>
  </nav>
)

export default Header
