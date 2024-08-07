import "../App.css";
function Goals(props) {
  return (
    <div className="goals dishes menu">
      {props.url}
      <p>{props.text}</p>
      {props.dropdown}
    </div>
  );
}

export default Goals;
