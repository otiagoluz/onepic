import { Component, Input } from '@angular/core';

@Component({
  selector: 'op-vmessage',
  templateUrl: './vmessage.component.html'
})


export class VMessageComponent {

  @Input() text:string = '';



}