import React from 'react';
import { Dialog, DialogContent, DialogContentText, makeStyles, Modal, Portal } from '@material-ui/core';



import * as types from '../services/apitypes'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { Store } from '../stores/store'


const useStyles = makeStyles({
    div1: {
        width: "200px",
        height: "25%", margin: "1%",
        marginTop: "1%"
    },
    div2: {
        height: "10%",
    },
    divModal: {
        height: "20vh",
        width: "10vh",
    }
})

interface IProps{
    movie:types.Movie;
}




const MovieCard: React.FC<IProps> = ({movie}) => {

    const classes = useStyles();
    const store = useLocalObservable(() => new Store());


    return (
        <div className={classes.div1}>
            <div className={classes.div2}>
                <h3>{movie.title}</h3>
            </div>

            <img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path} style={{ maxWidth: "100%", maxHeight: "100%" }} onClick={() => store.setModal(true)} />


            <Dialog
                open={store.modal}
                onClose={() => store.setModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <DialogContent>
                    <DialogContentText>
                        <h1 style={{color:"black"}}>{movie.title}</h1>
                        <img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path} style={{ maxWidth: "100%", maxHeight: "60%" }} />
                        <h2 style={{color:"black"}}>Overview</h2>
                        <h3>{movie.overview}</h3>


                    </DialogContentText>
                </DialogContent>
            </Dialog>


        </div >
    );
}

export default observer(MovieCard);