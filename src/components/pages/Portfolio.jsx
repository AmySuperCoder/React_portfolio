import PortfolioCard from "../PortfolioCard";


const cardsArray = [
  {
    image: "https://th.bing.com/th?id=OIP.WLDISq99tDfHenKgZtbJugHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Weather API",
    linkGitHub: "https://github.com/AmySuperCoder/weather_API",
    linkSite: "https://weather-api-uy9t.onrender.com/"
  },
  {
    image: "https://th.bing.com/th?id=OIP.Yk3DsUgspq06f-Qra2lfZgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Employee Tracker",
    linkGitHub: "https://github.com/AmySuperCoder/03-Homework",
    linkSite: "https://amysupercoder.github.io/03-Homework/"
  },
  {
    image: "https://www.bing.com/th?id=OIP.f6ved8wranJjaO8g0qDStgHaEK&w=200&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Vehicle Builder",
    linkGitHub: "https://github.com/AmySuperCoder/vehicle_builder",
    linkSite: "https://amysupercoder.github.io/vehicle_builder/"
  },
  {
    image: "https://www.bing.com/th?id=OIP.N0AtQhkKsLW3Zys2wr4U4AAAAA&w=187&h=109&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Card 4",
    linkGitHub: "https://github.com/AmySuperCoder/git-init-sample",
    linkSite: "https://formik.org/docs/overview"
  },
  {
    image: "https://www.bing.com/th?id=OIP.N0AtQhkKsLW3Zys2wr4U4AAAAA&w=187&h=109&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Card 5",
    linkGitHub: "https://github.com/AmySuperCoder/git-init-sample",
    linkSite: "https://formik.org/docs/overview"
  },
  {
    image: "https://github.com/whoenig44/bootcamp-project-1/blob/main/assets/images/backgroundImage.png?raw=true",
    title: "Grocery List Organizer (group project)",
    linkGitHub: "https://github.com/whoenig44/bootcamp-project-1",
    linkSite: "https://whoenig44.github.io/bootcamp-project-1/"
  }
]

export default function Blog() {
  const renderCards= () => {
    return cardsArray.map((card) => {
      return <PortfolioCard image={card.image} key={card.title} title={card.title} linkGitHub={card.linkGitHub} linkSite={card.linkSite}></PortfolioCard>
    })
  }
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Please browse a portfolio of some of my recent projects.
      </p>
      <div className="d-flex justify-content-center w-100">
      <div className="d-flex flex-row mb-3 gap-4 flex-wrap justify-content-center">
        {renderCards()}

      </div>
      </div>
    </div>
  );
}