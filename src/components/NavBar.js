import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavList({ name, to }) {
    if (name == 'Home') {
        return  <NavLink exact to={to}>{name}</NavLink>
    }
    return  <NavLink to={to}>{name}</NavLink>
}

export const NavBar = () => {
    return (
      <header>
            <div className="brand">LOGO</div>
            <nav>
                <NavList name="Home" to="/" />
                <NavList name="About us" to="/about"/>
                <NavList name="Our Services" to="/service"/>
                <NavList name="Sign In" to="/login"/>
                <NavList name="Signup" to="/signup" />
            </nav>
      </header>
  )
}
