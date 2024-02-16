import React from "react";
import './TodoFilter.css';

function TodoFilter() {
  const [searchValue, setSearchValue]= React.useState('hola');

  console.log('Los usuarios buscan todos de ' + searchValue);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export default TodoFilter;