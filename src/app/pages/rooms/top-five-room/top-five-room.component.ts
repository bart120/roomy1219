import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-five-room',
  templateUrl: './top-five-room.component.html',
  styles: []
})
export class TopFiveRoomComponent implements OnInit {

  rooms: Array<any> = null;

  constructor() { }

  ngOnInit() {
    this.rooms = [
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' },
      { name: 'Pegase', image: 'Pegase.jpg' }
    ];
  }

}
