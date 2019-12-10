import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoomComponent } from './list-room/list-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { DetailRoomComponent } from './detail-room/detail-room.component';
import { TopFiveRoomComponent } from './top-five-room/top-five-room.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [ListRoomComponent, CreateRoomComponent, DetailRoomComponent, TopFiveRoomComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopFiveRoomComponent
  ]

})
export class RoomsModule { }
