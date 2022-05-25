import React, { useState } from 'react';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos } from './Store/actions';
import Note from './Note';
const uuid = require('uuid-v4');

export default () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onType = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const value = e.target.value;
      dispatch(
        addTodos({
          text: value,
          id: uuid(),
          done: false,
        })
      );
      e.target.value = '';
    }
  };

  return (
    <div>
      <ListGroup as="ol" numbered>
        {todos.map((item) => (
          <Note key={item.id} note={item} />
        ))}
      </ListGroup>

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Insert Note</InputGroup.Text>
        <FormControl
          onKeyDown={onType}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
};
