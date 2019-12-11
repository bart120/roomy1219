import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RoomService {

    constructor(private http: HttpClient) { }

    getTopFive(): Observable<Array<Room>> {

        return timer(0, 3000).pipe(
            mergeMap(() => this.http.get<Array<Room>>(environment.url_room).pipe(
                map(data => data.sort((a, b) => a.price < b.price ? 1 : -1).slice(0, 5))
            ))
        );




        // return this.http.get<Array<Room>>(environment.url_room);
        /*this.http.get<Array<Room>>(environment.url_room).subscribe(
            (data) => {
                console.log(data);
            }
        );*/
        /*return [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' },
            { name: 'Pegase', image: 'Pegase.jpg' }
        ];*/

    }

    getAllRooms(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(environment.url_room);
    }

    getRoomById(id: number): Observable<Room> {
        return this.http.get<Room>(`${environment.url_room}/${id}`);
    }

    insertRoom(room: Room): Observable<Room> {
        return this.http.post<Room>(environment.url_room, room);
    }

    updateRoom(room: Room): Observable<Room> {
        return this.http.put<Room>(`${environment.url_room}/${room.id}`, room);
    }

    deleteRoomById(id: number): Observable<Room> {
        return this.http.delete<Room>(`${environment.url_room}/${id}`);
    }
}
