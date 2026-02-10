import { useState } from "react"

const TodoNew = (props) =>{
    const {addNewTodo} = props

    const [ValueInput, setValueInput] = useState("")

    const handleOnChange = (name) =>{
        setValueInput(name)
    }
    const handleClick = () => {
        addNewTodo(ValueInput)
        setValueInput("")
    }
    return (
        <div className="todo-new">
          <input type="text" 
          value={ValueInput}
          onChange={(event) => {handleOnChange(event.target.value)}}
          />
          <button style={{cursor:"pointer"}}
          onClick={handleClick}>Add</button>
          <div>My text input is {ValueInput}</div>
        </div>       
    )
}
export default TodoNew