

export default function PortfolioCard({
    image, title, linkGitHub, linkSite
}) {
    return (
      <div>
        <img src={image}/>
        <h4>{title}</h4>
        <a href={linkGitHub}>GitHub</a>
        <a href={linkSite}>Site</a>
      </div>
    );
  }
  