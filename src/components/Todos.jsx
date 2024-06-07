import React from 'react'
import TodoItem from './TodoItem' // Lakukan import

const Todos = ({ todos }) => {
    return (
      <div style={styles.container}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
    )
  }
  
  const styles = {
    container: {
      width: '40%',
      margin: '0 auto',
    },
  }
  
  export default Todos