import React, {useState} from 'react';
import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';

const Home = () => {
  const initialTodos = [{
    title: "Comprar material escolar",
    date: "Quinta, 08 Maio 2022 16:31:11 GMT",
    key: "1"
  },{
    title: "Comprar material escritório",
    date: "Quinta, 08 Maio 2022 16:31:11 GMT",
    key: "2"
  },{
    title: "Comprar material construção",
    date: "Quinta, 08 Maio 2022 16:31:11 GMT",
    key: "3"
  }]
  
  const[todos, setTodos] = useState(initialTodos);

  const handleClearTodos = () => {
    setTodos([]);
  }

  const[modalVisible, setModalVisible] = useState(false);
  const[todoInputValue, setTodoInputValue] = useState();

  const handleAddTodo = (todo) =>{
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
  }

  const[todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  }

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setTodoToBeEdited(null);
    setModalVisible(false);
  }

  return(
    <>
      <Header handleClearTodos={handleClearTodos}/>
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
}

export default Home;