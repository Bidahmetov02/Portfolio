import { ListItem } from "@material-ui/core";
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
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
        <div className="item">
          <img src="https://figmatemplate.com/wp-content/uploads/2020/04/Mobile-Banking-App-Figma.jpg" alt="" />
          <h3>Banking App</h3>
        </div><div className="item">
          <img src="https://figmatemplate.com/wp-content/uploads/2020/04/Mobile-Banking-App-Figma.jpg" alt="" />
          <h3>Banking App</h3>
        </div><div className="item">
          <img src="https://figmatemplate.com/wp-content/uploads/2020/04/Mobile-Banking-App-Figma.jpg" alt="" />
          <h3>Banking App</h3>
        </div><div className="item">
          <img src="https://figmatemplate.com/wp-content/uploads/2020/04/Mobile-Banking-App-Figma.jpg" alt="" />
          <h3>Banking App</h3>
        </div><div className="item">
          <img src="https://figmatemplate.com/wp-content/uploads/2020/04/Mobile-Banking-App-Figma.jpg" alt="" />
          <h3>Banking App</h3>
        </div><div className="item">
          <img src="https://figmatemplate.com/wp-content/uploads/2020/04/Mobile-Banking-App-Figma.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
