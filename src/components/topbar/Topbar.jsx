import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function topbar({menuOpen, SetMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Beka.</a>
            <div className="itemContainer">
              <Person className="icon" />
              <span>+48 660 449 874</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon" />
              <span>bidahmetov2002@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => SetMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  )
}
 