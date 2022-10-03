import React from 'react';
import {useState, useEffect} from "react";

import { Paper, TextField } from '@material-ui/core';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(searchTerm);
  }

  const handleChange = (e) => setSearchTerm(e.target.value);
  

  return (
    <Paper elevation={6} style={{ padding: '25px' }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." onChange={handleChange} />
      </form>
    </Paper>
  )
}
export default SearchBar;