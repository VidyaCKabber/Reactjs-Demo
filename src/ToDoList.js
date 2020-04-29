import React from 'react';
import { Button, Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

function ToDoList(props) {
  return (
    <ListItem key={props.id}>
      <ListItemIcon>
        <Checkbox
          name="idDone"
          color="primary"
          defaultChecked={props.checked}
          onChange={props.statusCheck}
        />
      </ListItemIcon>
      <ListItemText id={props.id} style={{ marginRight: 25 }}>{props.text}</ListItemText>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.deleteTodo}
      >
        Delete
      </Button>
    </ListItem>
  );
}

export default ToDoList;