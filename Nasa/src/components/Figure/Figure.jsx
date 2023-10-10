import "./Figure.css";

const Figure = ({ data }) => {
  return (
    <figure>
      <div class="window">
        <div class="title-bar">
          <h1 class="title">{data.title}</h1>
          <img src={data.url} alt={data.title} />
        </div>
        <div class="details-bar">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div class="window-pane">{data.explanation}</div>
      </div>
      <div className="losBotones">
        <button>Siguiente</button>
        <button>Informacion</button>
      </div>
    </figure>
  );
};
export default Figure;
