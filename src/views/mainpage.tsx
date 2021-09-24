import React, { useEffect } from "react";
import Table from "../components/table";
import Pagination from "../components/paginations";
import "./mainpage.css";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "../stores/store";


const Main: React.FC = () => {

	const store = useLocalObservable(() => new Store());

	useEffect(
		() => {
			store.fetch();
		}, [store]);


	return (
		<div id="mainPage">
			{store.loading.isLoading ?
				<h1>Carregando...</h1> :
				<>
					<Pagination totalPages={store.quantPages} setTotalPages={(n: number) => store.setQuantPages(n)} setPage={(n: number) => store.setPage(n)} />
					<Table moviesList={store.movies} setFilterMovies={(str: string) => store.setSearchNameFilter(str)}/>
				</>
			}
		</div>
	);
};

export default observer(Main);
