import "./menu.scss"
import {Person, Mail} from "@material-ui/icons"

export default function menu({menuOpen, SetMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li onClick={()=>SetMenuOpen(false)}><a href="#intro">Home</a></li>
            <li onClick={()=>SetMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
            <li onClick={()=>SetMenuOpen(false)}><a href="#education">Education</a></li>
            <li onClick={()=>SetMenuOpen(false)}><a href="#skills">Skills</a></li>
            <li onClick={()=>SetMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
        <div className="MenuContact">
            <div className="MenuitemContainer">
              <Person className="icon" />
              <span>+48 660 449 874</span>
            </div>
            <div className="MenuitemContainer">
              <Mail className="icon" />
              <span>bidahmetov2002@gmail.com</span>
            </div>
            <div className="MenuitemContainer">
              <span><a target="_blank" href="https://drive.google.com/file/d/1MO0AhRIKzHA7O_0Vqs71wEf9JGTtGLPt/view?usp=sharing">Resume</a></span>
            </div>
        </div>
    </div>
  )
}
 