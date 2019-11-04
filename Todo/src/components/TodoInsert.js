import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      
      // submit 이벤트는 브라우저에서 새로고침 발생.
      // 방지하기 위해 아래 호출
      e.preventDefault();
    },
    [onInsert, value],
  );
  
  
  
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="Input To Do" 
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;