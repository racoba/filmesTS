import { AbstractPaginatedListStore } from "@startapp/mobx-utils";
import  api  from "../services/apiaxios";
import * as types from "../services/apitypes";

export class PaginatedListStore extends AbstractPaginatedListStore<types.Movie>{

	public getDataItemsPerPage = async (page: number): Promise<types.Movie[]> =>{
		const data = await api.getMovies(page);
		return data.results;
	};

}
