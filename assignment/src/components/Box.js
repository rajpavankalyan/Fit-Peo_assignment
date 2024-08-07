import "../App.css";
function Box(props) {
  return (
    <div className="box box-gap">
      {props.url}
      <p>{props.text}</p>
      <h3>
        {props.num}{" "}
        <>
          <span className="percentage gain  ">
            {props.svgurl}
            {props.percentage}
          </span>
        </>
      </h3>
    </div>
  );
}

export default Box;
