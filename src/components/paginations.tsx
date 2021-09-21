import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';


import { useLocalObservable, observer } from 'mobx-react-lite'
import { Store } from '../stores/store'

const useStyles = makeStyles({
    div1: {
        marginTop: "3%"
    },
    paginationS: {
        backgroundColor: "black",
        borderRadius: "10px",
    }
})
interface IProps{
    totalPages:number
}
const Pags:React.FC<IProps> = () => {

    const classes = useStyles();

    const store = useLocalObservable(() => new Store())



    const handleChange = (n:number) => {
        store.setPage(n);
        console.log(store.page)
    }

    return (
        <div className={classes.div1}>
            <div>
                <Pagination
                    className={classes.paginationS}
                    count={store.quantPages}
                    variant="outlined"
                    shape="rounded"
                    onChange={(_, number:number) => handleChange(number)} 
                    />
            </div>
        </div>
    );
}

export default observer(Pags);