import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Feautured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
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
