import  "../App.css";

function List (props){

    return (
        <div className ="List1" >
        <img alt ="profile " className ="image1 " src={props.image}  />
        <span className=" name">{props.name}</span>
        <p className ="List1">{props.id}</p>
        <p className ="List1">{props.amount}</p>
        <p className ="status" >{props.status}</p>
        <hr />
        </div>

    )
        
}

export default List;