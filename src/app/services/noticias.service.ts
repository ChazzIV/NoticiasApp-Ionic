import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaToHeardlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headLinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor( private http: HttpClient) { }


  private ejecutarQuery<T>( query: string) {
    query = apiUrl + query;
    return this.http.get<T>( query, { headers } );
  }


  getTopHeadlines() {
    this.headLinesPage ++;
   // tslint:disable-next-line: max-line-length
   //return this.http.get<RespuestaToHeardlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d25716e3db204e51b54317b865e65f51`);

    return this.ejecutarQuery<RespuestaToHeardlines>(`/top-headlines?country=us&page=${ this.headLinesPage }`);
  }

  getTopHeadlinesCategoria( categoria: string) {

    if ( this.categoriaActual === categoria ) {
        this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }
    // tslint:disable-next-line: max-line-length
    //return this.http.get<RespuestaToHeardlines>(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=d25716e3db204e51b54317b865e65f51`);

    return this.ejecutarQuery<RespuestaToHeardlines>(`/top-headlines?country=us&category=${ categoria }&page=${ this.categoriaPage }`);
  }
}
