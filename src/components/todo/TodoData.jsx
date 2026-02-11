
const TodoData = (props) =>{
    const {todoList,deleteTodo} = props

    const DeleteTodo = (id) =>{ 
        deleteTodo(id)
    }
    return (
        <div className='todo-data'>
            {todoList.map((item,index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        {item.name}
                        <button onClick={()=>{DeleteTodo(item.id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default TodoData