const Pen = (props) => {
  const { picUrl, company, price } = props.pen;

  return (
    <div className="pen">
      <img src={picUrl} alt={company} />
      <h1>{company}</h1>
      <h2>Rs: {price}</h2>
    </div>
  );
};

export default Pen;