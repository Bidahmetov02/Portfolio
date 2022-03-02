import { ListItem } from "@material-ui/core";
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
  featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio,
  contentPortfolio,
} from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch(selected) {
      case "feautured":
        setData(featuredPortfolio)
        break
      case "web":
        setData(webPortfolio)
        break
      case "mobile":
        setData(mobilePortfolio)
        break
      case "design":
        setData(designPortfolio)
        break
      case "content":
        setData(contentPortfolio)
        break
      default:
        setData(featuredPortfolio)
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
