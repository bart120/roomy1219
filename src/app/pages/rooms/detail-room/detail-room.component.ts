import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styles: []
})
export class DetailRoomComponent implements OnInit {

  obsRoom$: Observable<Room>;

  constructor(private serv: RoomService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.obsRoom$ =
      this.serv.getRoomById(this.route.snapshot.params.id);
  }

}
