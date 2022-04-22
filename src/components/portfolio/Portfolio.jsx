//import { ListItem } from "@material-ui/core"
import { useState, useEffect } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
  featuredPortfolio, webPortfolio,
} from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState('web')
  const [data, setData] = useState([])
  const list = [
    {
      id: "web",
      title: "Web Applications",
    },
    {
      id: "bot",
      title: "Telegram Bots",
    },
  ];

  useEffect(() => {
    switch(selected) {
      case "bot":
        setData(featuredPortfolio)
        break
      case "web":
        setData(webPortfolio)
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
            <img src={i.img} alt="" />
            <h3>{i.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
