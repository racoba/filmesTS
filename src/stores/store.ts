import { makeAutoObservable } from "mobx";
import {  LoaderShelf } from "@startapp/mobx-utils";
import * as types from "../services/apitypes";
import  api  from "../services/apiaxios";
import { PaginatedListStore } from "../stores/PaginatedListStore";
import { useLocalObservable } from "mobx-react-lite";

export class Store {
	constructor() {
		makeAutoObservable(this);
	}

	public list = useLocalObservable(() => new PaginatedListStore());
	public movies: types.Movie[] = [];
	public page = 1;
	public quantPages = -1;
	public modal = false;
	public searchNameFilter = "";
	public loading = new LoaderShelf();


	public fetch = async () => {
		let mov: types.AllMovies;

		this.loading.tryStart();

		try {
			if(this.searchNameFilter===""){
				mov = await api.getMovies(this.page);

			}else{
				mov = await api.getFilteredMovies(this.searchNameFilter,this.page);

			}
			this.setMovies(mov.results);

			this.setQuantPages(mov.total_pages);

		} catch (error) {
			console.log(error);
		}finally{
			this.loading.end();
		}
	};

	// public getData = async(page: number): Promise<types.Movie[]> =>{
	// 	const list = await this.list.getDataItemsPerPage(page).then( (res) => {
	// 		const data = res;
	// 		return data;
	// 	});
	// 	return list;
	// };

	public setMovies(movies: types.Movie[]) {
		this.movies = movies;
	}
	public setPage(page: number) {
		this.page = page;
		this.fetch();
	}
	public setQuantPages(quantPages: number) {
		this.quantPages = quantPages;

	}
	public setModal(bool: boolean) {
		this.modal = bool;
	}
	public setSearchNameFilter(string: string) {
		this.searchNameFilter = string;
		this.fetch();
	}

}
