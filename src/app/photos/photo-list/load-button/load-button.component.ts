import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'op-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
