import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';
import { timer } from 'rxjs';

@Component({
  selector: 'app-top-five-room',
  templateUrl: './top-five-room.component.html',
  styles: []
})
export class TopFiveRoomComponent implements OnInit {

  rooms: Array<Room> = null;
  // private serv: RoomService = null;

  constructor(private serv: RoomService) {
    // this.serv = serv;
  }

  ngOnInit() {
    // this.rooms = this.serv.getTopFive();
    /*timer(0, 3000).subscribe(
      num => {
        this.serv.getTopFive().subscribe(
          data => this.rooms = data,
          err => alert(err.message)
        );
      }
    );*/
    this.serv.getTopFive().subscribe(
      data => this.rooms = data,
      err => alert(err.message)
    );
    // console.log('rooms', this.rooms);
  }

}
