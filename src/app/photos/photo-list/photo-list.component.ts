import { PhotoService } from './../photo/photo.service';
import { Photo } from './../photo/photo';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title = 'app';
  photos: Photo[] = [];
  filter = '';

  hasMore = true;
  userName = '';
  currentPage = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicePhoto: PhotoService
    ) { }


  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;

  }



  load() {
    this.servicePhoto.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '' ;
      this.photos = this.photos.concat(photos);

      if (photos.length) { this.hasMore = false; }
  });
  }

}
