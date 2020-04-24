import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) { }
  
  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }
}
