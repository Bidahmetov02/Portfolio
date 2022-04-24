import "./skills.scss"
import {skills} from "../../data.js"

const Skills = () => {
  return (
    <div className="skills" id="skills">
        <h1>Skillls</h1>
        <div className="container">
            {skills.map(i => (
                <div className="skillcon">
                    <h3>{i.title}</h3>
                    <ul>
                        {i.list.map(x => (
                            <li className={x === "Python" || x === "Django Rest Framework" || x === "Visual Studio" ? "featured" : ""}>{x}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills