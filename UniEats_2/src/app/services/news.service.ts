import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {NewsResponse} from '../services';
import {map} from 'rxjs/operators';
const apiKey=environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getTopHeadLines(){
  return this.http.get<NewsResponse>('https://newsapi.org/v2/everything?q=tesla&from=2022-12-02&sortBy=publishedAt',{
    params:{apiKey}
}).pipe(
  map(resp => resp.articles)
  );
  }
}