import "./GifContainer.scss";

const GifContainer = ({ currentCards }) => {
  let content = currentCards.map((gifObj) => <div key={gifObj.key}></div>);

  return <div></div>;
};

export default GifContainer;
