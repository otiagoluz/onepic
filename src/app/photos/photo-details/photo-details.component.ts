import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from './../photo/photo.service';
import { Photo } from '../photo/photo';
import { UserService } from 'src/app/core/user/user.service';


@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComoponent implements OnInit{

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}
  
  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findByIf(this.photoId);
    this.photo$.subscribe(() => {}, err => {
      console.log(err);
      this.router.navigate(['not-found']);
    })
  }

  remove() {
    this.photoService
    .removePhoto(this.photoId)
    .subscribe(() => {
      this.alertService.sucess('Photo removed', true)
      this.router.navigate(['/user', this.userService.getUserName()]);
    }, err => {
      console.log(err);
      this.alertService.warning('Could not delete photo', true);
    }
    
    
    );
  }
  
}

