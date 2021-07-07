import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles} from "../AppStyles";


const FiltrationOptionsField = ({isFiltationOpen,fetchIsFiltrationOpen,filtrationParam,fetchFiltrationParam}) => {
  const classes = useStyles();
  const handleChange = (event) => {
    fetchFiltrationParam(event.target.value);
  };

  const handleClose = () => {
    fetchIsFiltrationOpen(false);
  };

  const handleOpen = () => {
    fetchIsFiltrationOpen(true);
  };

  return (
      <FormControl className={classes.filtrationField}>
        <InputLabel>Фильтрация</InputLabel>
        <Select
          open={isFiltationOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filtrationParam}
          onChange={handleChange}
        >
          
          <MenuItem value={'Male'}>Мужчины</MenuItem>
          <MenuItem value={'Female'}>Женщины</MenuItem>
          <MenuItem value={'unknown'}>Неизвестно</MenuItem>
          <MenuItem value={'all'}>Все</MenuItem>
        </Select>
      </FormControl>
  );
}

export default FiltrationOptionsField;