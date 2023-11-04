import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  {path:'rooms',component:RoomsComponent ,children:[{path:':roomid',component:RoomsBookingComponent}]},

  {path:'rooms/add',component:RoomsAddComponent},
  // {path:'rooms/:roomid',component:RoomsBookingComponent}, // whenever this componenet has to be rendered ,it has to pass roomid
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
