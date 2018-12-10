import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed.service';
import { Feed } from 'src/model/feed';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api


@Component({
  selector: 'app-feed-postes',
  templateUrl: './feed-postes.component.html',
  styleUrls: ['./feed-postes.component.css']
})
export class FeedPostesComponent implements OnInit {

  constructor(private feedService : FeedService) { }

  feeds: Feed[]; 

  msg :string;

  @Input() textoPost: String;

  ngOnInit() {
    this.getallFeeds();
  }

  getallFeeds(): void {
    this.feedService.getAllPosters()
        .subscribe(feeds => this.feeds = feeds);
  }

  createPost():void{  
    this.feedService.createPost(this.textoPost)
        .subscribe(result => this.msg = result[0]);  
        //window.location.reload(); 
  }

  deletePost(idPost): void {
    this.feedService.deletePost(idPost)
        .subscribe(result => this.msg = result[0]);  
        window.location.reload();  
  }

}
