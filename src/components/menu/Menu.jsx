import "./menu.scss"

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
    </div>
  )
}
 