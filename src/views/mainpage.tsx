import React, { useEffect, useState } from 'react'
import Table from '../components/table'
import Pagination from '../components/paginations'
import api from '../services/apiaxios'
import * as types from '../services/apitypes'
import "./mainpage.css"

import { useLocalObservable, observer } from 'mobx-react-lite'
import { Store } from '../stores/store'

const Main:React.FC = () => {

    const store = useLocalObservable(() => new Store())

    useEffect(
        ()=>{
            store.fetch();
    },[store])

    
    return (
        <div id="mainPage">
            <Pagination totalPages={store.quantPages} />
            <Table moviesList={store.movies} />
        </div>
    )
}


export default observer(Main);



