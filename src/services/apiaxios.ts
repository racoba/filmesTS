import axios from "axios"

import * as types from './apitypes'

class API {
    private base;
    

    constructor() {
        this.base = axios.create({
            baseURL:"https://"
        });
        
    }

    public async getMovies(number:number): Promise<types.AllMovies> {
        const response = await this.base.get<types.AllMovies>(`api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2fc25570984c467e918526f17bb7738&page=${number}`);
        console.log(response)
        return response.data;
    }
    public async getFilteredMovies(string:string): Promise<types.AllMovies> {
        const response = await this.base.get<types.AllMovies>(`api.themoviedb.org/3/search/movie?&api_key=c2fc25570984c467e918526f17bb7738&query=flash`);
        console.log(response)
    
        return response.data;
    }
    
}

const api = new API();
export default api;
