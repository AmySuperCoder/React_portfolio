

export default function PortfolioCard({
    image, title, linkGitHub, linkSite
}) {
    return (
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
        <img src={image}/>
        <h4>{title}</h4>
        <p>
        <a href={linkGitHub}>GitHub</a>
        </p>
        <p>
        <a href={linkSite}>Site</a>
        </p>
      </div>
      </div>
    );
  }
  

  // <div className="d-flex flex-row mb-3">
  //       <div className="p-2">Flex item 1</div>
  //       <div className="p-2">Flex item 2</div>
  //       <div className="p-2">Flex item 3</div>
  //     </div>