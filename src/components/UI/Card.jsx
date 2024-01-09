const Card = (props) => {
  return (
    <section className="m-4 rounded-lg bg-white p-4 w-90 mx-auto max-w-40rem">
      {props.children}
    </section>
  );
};

export default Card;
