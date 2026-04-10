import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo" >EV-OLUTION</div>
        <ul className="nav-menu">
            <li>home</li>
            <li>explore</li>
            <li>about</li>
            <li className="nav-contact">Contact</li>
        </ul>
      
    </div>
  )
}

export default Navbar
