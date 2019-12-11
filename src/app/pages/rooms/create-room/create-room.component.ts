import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestValidator } from 'src/app/validators/test-validator';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styles: []
})
export class CreateRoomComponent implements OnInit {

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required, TestValidator]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl(),
    image: new FormControl('', [Validators.required])
  });

  pictures: Array<any> = [
    { image: 'Pegase.jpg', name: 'Pegase' },
    { image: 'Calliope.jpg', name: 'Calliope' },
    { image: 'Thalie.jpg', name: 'Thalie' }
  ];

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit() {

  }


  onSubmit(): void {
    if (this.formRoom.valid) {
      this.serv.insertRoom(this.formRoom.value).subscribe(
        data => this.snack.open(`La salle a éré entregistrée avec l'id ${data.id}`, 'OK', { duration: 3000, verticalPosition: 'top' })
      );
    }
  }

}
