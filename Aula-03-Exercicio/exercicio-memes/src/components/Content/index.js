import './Content.css'

export default function Content() {
  return (
    <div className ="Content">
      <div className="posts">
        <div className="post">
          <h1 className="titulo">High five, Hyperlink!</h1>
          <img src="img/hyperlink.webp" alt="Hyperlink" />
        </div>
        <div className="post">
          <h1 className="titulo">Sorry, bro.</h1>
          <img src="img/sorry_bro.webp" alt="Sorry, bro." />
        </div>
      </div>
    </div>
  );
}