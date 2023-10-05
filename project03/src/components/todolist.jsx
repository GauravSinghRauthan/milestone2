
import './todolist.css'

function Todolist({e,i,updateSatus,removeTodo}) {
    return (
        <div className="listContainer">
            <h2>{e.task}</h2>
            <p>status: <span>{e.status}</span></p>
            <button onClick={()=>updateSatus(i)}>Update status</button>
            <button onClick={()=>removeTodo(i)}>Remove</button>
        </div>
    )
}


export default Todolist;