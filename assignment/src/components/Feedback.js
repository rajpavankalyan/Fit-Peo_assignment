import "../App.css";
function Feedback(props) {
  return (
    <div className="rule">
      <div className="feedback">
        <img alt="profile" className="profile-icon" src={props.imgurl} />
        <span>{props.text}</span>
      </div>
      <div className="star">
        {props.star1}
        {props.star2}
        {props.star3}
        {props.star4}
        {props.star5}
      </div>
      <p>{props.feedback}</p>
    </div>
  );
}
export default Feedback;
