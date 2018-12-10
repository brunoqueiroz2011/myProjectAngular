
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../model/feed';
import { Comentario } from 'src/model/comentario';

@Injectable({
  providedIn: 'root'
})
export class FeedService { 

  constructor(private http: HttpClient) { }

  private baseApiPath = "http://localhost/WebServicePHP/";
  private apiListPost = "listaPostes";
  private apiPosteById = "posteById";
  private apiListComentarios = "listComentarios";
  private apiDeletePost = "deletePostagem";
  private apiCreatePost = "novoPoste";
  private apiCreateComentario = "novoComentario";
  
  

  getAllPosters(){
    return this.http.get<Feed[]>(this.baseApiPath + this.apiListPost);
  }

  getPosteById(idPost: number) {
    return this.http.get<Feed>(this.baseApiPath + this.apiPosteById +'-' + idPost);
  }

  getComentarios(idPost: number) {
    return this.http.get<Comentario[]>(this.baseApiPath + this.apiListComentarios +'-' + idPost);
  }

  createPost(feed: String) {    
    return this.http.get(this.baseApiPath + this.apiCreatePost+"-"+ feed);
  }

  createComentario(idPost: number, feed: String) {    
    return this.http.get(this.baseApiPath + this.apiCreateComentario+"-"+ idPost+"-"+ feed);
  }

  deletePost(idPost: number) {
    return this.http.get(this.baseApiPath + this.apiDeletePost + '-' + idPost);
  }
}
