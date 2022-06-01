import React, {useState} from 'react';
import Header from './Header';
import ListItems from './ListItems';

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

  return(
    <>
      <Header/>
      <ListItems
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default Home;