//import { ListItem } from "@material-ui/core"
import { useState, useEffect } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
  Django, ASPNET, React, Bots
} from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState('django')
  const [data, setData] = useState([])
  const list = [
    {
      id: "django",
      title: "Python Django",
    },
    {
      id: "aspnet",
      title: "ASP .NET",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "bot",
      title: "Telegram Bots",
    },
  ];

  useEffect(() => {
    switch(selected) {
      case "django":
        setData(Django)
        break
      case "aspnet":
        setData(ASPNET)
        break
      case "react":
        setData(React)
        break
      case "bot":
        setData(Bots)
        break
    }
  }, [selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(i=>(
          <PortfolioList title={i.title} active={selected === i.id} 
            setSelected={setSelected} id={i.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(i => (
          <div className="item">
            <div className="top">
              <img src={i.img} alt="" />
            </div>
            <div className="bottom">
              <h3>{i.title}</h3>
              <p className="desc">{i.description}</p>
              <div className="link">
                <a target="_blank" href={i.guthub}>GitHub Repository</a>
                {i.link !== "" ? <a href="">Link to the site</a> : <></>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
