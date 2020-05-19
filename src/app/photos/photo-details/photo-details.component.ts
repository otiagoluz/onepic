import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['photo-details.css']
})
export class PhotoDetailsComoponent implements OnInit{

  photo$: Observable<Photo>;
  comments$: Observable<PhotoComment[]>

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService) {}
  
  ngOnInit(): void {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findByIf(photoId)
    this.comments$ = this.photoService.getComments(photoId);
  }
  
}

