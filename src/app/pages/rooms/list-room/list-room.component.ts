import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styles: []
})
export class ListRoomComponent implements OnInit {

  obsRooms$: Observable<Array<Room>>;
  test = 'toto';

  constructor(private serv: RoomService) { }

  ngOnInit() {
    this.obsRooms$ = this.serv.getAllRooms();
  }

}
