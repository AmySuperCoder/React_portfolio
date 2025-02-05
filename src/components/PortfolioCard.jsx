

export default function PortfolioCard({
    image, title, linkGitHub, linkSite
}) {
    return (
      <div className="w-25">
        <div>
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
  

 