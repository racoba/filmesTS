import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderTable from './headertable';
import Movie from './movieCard';

import * as types from '../services/apitypes'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { Store } from '../stores/store'

const useStyles = makeStyles({

  div1: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },

})

interface IProps {
  moviesList: types.Movie[];
}

const Table: React.FC<IProps> = ({ moviesList }) => {

  const classes = useStyles();
  const store = useLocalObservable(() => new Store())

  const createNameFilter = (filterStr: string) => {
    store.setSearchNameFilter(filterStr);
  };


  return (
    <div >
      <HeaderTable
        setSearchNameFilter={createNameFilter}
      />



      <div className={classes.div1}>
        {moviesList.map((item) => (
          <Movie key={item.id} movie={item} />
        ))}
      </div>



    </div>
  );

}

export default observer(Table);