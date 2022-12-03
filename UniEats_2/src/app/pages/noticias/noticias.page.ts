import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/services';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  public articles: Article[]=[];
  constructor(private newService:NewsService) { }

  ngOnInit() {
    this.newService.getTopHeadLines()
    .subscribe(articles => this.articles.push( ...articles ) );
  }

}
