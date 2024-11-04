import '../Stiliai/Styles.css';

export const BookCardComponent = ({ title, author, category, price, cover, reserved }) => {
  return (
    <>
      <div className="bookCard">
        <img src={cover} />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{price}</p>
        <p>{category}</p>
        <div className="badge">{reserved==true? <span className="grazinti">Grazinti!</span>:<span className="isduoti">Isduoti!</span> }</div>
        

      </div>
    </>
  );
};
