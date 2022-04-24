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
            <div className="top">
              <img src={i.img} alt="" />
            </div>
            <div className="bottom">
              <h3>{i.title}</h3>
              <p className="desc">{i.description}</p>
              <div className="link">
                <a href="">GitHub repository</a>
                {i.link !== "" ? <a href="">Link to the site</a> : <></>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
