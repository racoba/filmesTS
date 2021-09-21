import { makeAutoObservable } from 'mobx';
import * as types from '../services/apitypes'
import  api  from '../services/apiaxios'

export class Store {
    constructor() {
        makeAutoObservable(this);
    }

    public movies: types.Movie[] = [];
    public page: number = 1;
    public quantPages: number = 1;
    public modal:boolean = false;
    public searchNameFilter:string = "";
 


    public fetch = async () => {

        try {
            if(this.searchNameFilter===""){
                const allFilms = await api.getMovies(this.page);
                this.setMovies(allFilms.results);
                this.setQuantPages(allFilms.total_pages)
                
            }else{
                const filtered = await api.getFilteredMovies(this.searchNameFilter);
                this.setMovies(filtered.results);
                this.setQuantPages(filtered.total_pages)
            }
            

        } catch (error) {
            console.error(error);
        }

    }

    

   
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
    }
    
}