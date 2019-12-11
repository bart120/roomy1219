import { Routes } from '@angular/router';
import { ListRoomComponent } from './pages/rooms/list-room/list-room.component';
import { CreateRoomComponent } from './pages/rooms/create-room/create-room.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotfoundComponent } from './pages/home/notfound/notfound.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { DetailRoomComponent } from './pages/rooms/detail-room/detail-room.component';

export const APP_ROUTES: Routes = [
    {
        path: 'rooms', children: [
            { path: 'list', component: ListRoomComponent },
            { path: 'create', component: CreateRoomComponent },
            { path: 'detail/:id', component: DetailRoomComponent }
        ]
    },
    /*{
        path: 'auth', children: [
            { path: 'login', component: LoginComponent }
        ]
    },*/
    {
        path: 'auth', loadChildren: () =>
            import('./pages/authentication/authentication.module')
                .then(x => x.AuthenticationModule)
    },
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];
