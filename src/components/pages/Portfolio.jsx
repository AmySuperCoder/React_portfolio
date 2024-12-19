
import PortfolioCard from "../PortfolioCard";

const cardsArray = [
  {
    image: "https://www.bing.com/th?id=OIP.N0AtQhkKsLW3Zys2wr4U4AAAAA&w=187&h=109&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Card 1",
    linkGitHub: "https://github.com/AmySuperCoder/git-init-sample",
    linkSite: "https://formik.org/docs/overview"
  },
  {
    image: "https://www.bing.com/th?id=OIP.N0AtQhkKsLW3Zys2wr4U4AAAAA&w=187&h=109&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Card 2",
    linkGitHub: "https://github.com/AmySuperCoder/git-init-sample",
    linkSite: "https://formik.org/docs/overview"
  },
  {
    image: "https://www.bing.com/th?id=OIP.N0AtQhkKsLW3Zys2wr4U4AAAAA&w=187&h=109&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Card 3",
    linkGitHub: "https://github.com/AmySuperCoder/git-init-sample",
    linkSite: "https://formik.org/docs/overview"
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
    image: "https://www.bing.com/th?id=OIP.N0AtQhkKsLW3Zys2wr4U4AAAAA&w=187&h=109&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    title: "Card 6",
    linkGitHub: "https://github.com/AmySuperCoder/git-init-sample",
    linkSite: "https://formik.org/docs/overview"
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
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
      <div>
        {renderCards()}

      </div>
    </div>
  );
}
