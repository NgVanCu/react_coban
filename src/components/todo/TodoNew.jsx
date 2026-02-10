import { useState } from "react"

const TodoNew = (props) =>{
    const {addNewTodo} = props

    const [ValueInput, setValueInput] = useState()

    const handleOnChange = (name) =>{
        console.log(">>> handleOnChange", name)
        setValueInput(name)
    }
    const handleClick = () => {
        addNewTodo(ValueInput)
        setValueInput("")
    }
    return (
        <div className="todo-new">
          <input type="text" 
          onChange={(event) => {handleOnChange(event.target.value)}}
          value={ValueInput}/>
          <button style={{cursor:"pointer"}}
          onClick={handleClick}>Add</button>
          <div>My text input is {ValueInput}</div>
        </div>       
    )
}
export default TodoNew