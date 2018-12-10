import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed.service';
import { Feed } from 'src/model/feed';
import { Comentario } from 'src/model/comentario';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-postes-detail',
  templateUrl: './postes-detail.component.html',
  styleUrls: ['./postes-detail.component.css']
})
export class PostesDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private feedService : FeedService,
    private location: Location) { }

  comentarios: Comentario[]; 

  idPost: number;

  feedPost: String;

  msg :string;

  @Input() textoPost: String;

  ngOnInit() {
    this.getPosteById();      
    this.getallComentarios();
  }  

  getPosteById():void{    
    this.idPost = +this.route.snapshot.paramMap.get('id');
    this.feedService.getPosteById(this.idPost)
        .subscribe(feed => this.feedPost = feed[0]);                
  }

  getallComentarios(): void {    
    this.idPost = +this.route.snapshot.paramMap.get('id');
    this.feedService.getComentarios(this.idPost)
        .subscribe(comentarios => this.comentarios = comentarios);
  }

  createComentario():void{  
    this.feedService.createComentario(this.idPost,this.textoPost)
        .subscribe(result => this.msg = result[0]); 
        window.location.reload(); 
  }

  goBack(): void {
    this.location.back();
  }

}
