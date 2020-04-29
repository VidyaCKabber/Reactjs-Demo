import React, { useState } from 'react';
import './App.css';
import { TextField, List, Card, Button } from '@material-ui/core';
import ToDoList from './ToDoList';

function Todos() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  //<img src={logo} className="logo"></img>
  const addItem = (todoValue) => {

    //console.log("value ",todoValue);
    if (todoValue !== "") {

      const newItem = {
        id: Date.now(),
        value: todoValue.newItem,
        isDone: false
      };

      setList(list => [...list, newItem]);
      setNewItem("");
    }
  }

  const deleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
  }

  const updatedStatus = (id,status) => {
    list.map(item => {
      if (item.id === id) {item.isDone = status;
      }
      return list;
    });
  }

  return (
    <div className="App">
      <h1 className="app-title">Todo App</h1>
      <div style={{
            display: 'flex', justifyContent: 'center'
          }}>
        <br />
        <TextField
          id="outlined-basic"
          label="What you want to do today?"
          variant="outlined"
          value={newItem}
          onChange={event => setNewItem(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addItem({ newItem })}
          disabled={newItem.length < 5}
          style={{marginLeft:30, width:50,textAlign:'center'}}
        >
          Add
        </Button>
      </div>
      <div style={{marginTop:'250'}}>
        {list.length ?
          <Card style={{
            display: 'flex', justifyContent: 'center', marginLeft: '25%', maxWidth: '50%',
          }}>
            <List>
              {list.map(item => (
                <ToDoList
                  text={item.value}
                  key={item.id}
                  checked={item.isDone}
                  statusCheck={event => updatedStatus(item.id,event.target.checked)}
                  deleteTodo={() => deleteItem(item.id)}
                />
              )
              )}
            </List>
          </Card>
          : false}
      </div>
    </div>
  );
}

export default Todos;