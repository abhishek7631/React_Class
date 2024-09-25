const Card = ({ id, name, info, image, price, remove }) => {
  return (
    <section className="card">
      <img src={image} alt="images" />
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
        <p>{info}</p>
      </div>
      <button
        onClick={() => {
          remove(id);
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default Card;
