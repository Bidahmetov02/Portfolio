import "./education.scss"
import { useState, useEffect } from "react"
import { certificates, educationData, } from "../../data"

export default function Education() {
  const [selected, setSelected] = useState('university')
  const [data, setData] = useState([])
  const list = [
    {
      id: "university",
      title: "University",
    },
    {
      id: "certifications",
      title: "Certifications",
    },
  ];

  useEffect(() => {
    switch(selected) {
      case "university":
        setData(educationData)
        break
      case "certifications":
        setData(certificates)
        break
      default:
        setData(educationData)
    }
  }, [selected])

  const commonPart = <><h1>Education</h1>
                      <ul>{list.map(i=>(<li className={selected === i.id ? "active" : ""} onClick={()=>setSelected(i.id)}>{i.title}</li>))}
                      </ul></>

  if (selected === "university") {
    return (
    <div className='education' id="education">
      {commonPart}
      {data.map(i => (
        <div className="container">
        <div className="card uniCard">
          <div className="innerContainer">
            <h2>{i.title}</h2>
            <img src="assets/uitm.png" />
            <h3>Degree: {i.degree}</h3>
            <h3>Major: {i.major}</h3>
            <div className="dates">
              <p>Start Date: {i.startDate}</p>
              <p>Expected Graduation Date: {i.endDate}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
    )
  }

  return (
    <div className='education' id="education">
      {commonPart}
      <div className="container">
        {data.map(i => (
          <div className="card certCard">
            <div className="innerContainer">
              <h3>{i.title}</h3>
              <h4>Issued organisation: {i.organisation}</h4>
              <p>Issue Date: {i.issueDate}</p>
              <a target="_blank" href={i.link}>Verification Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
