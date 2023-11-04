import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

 
  {path:'employee',component:EmployeeComponent},
 
  {path:'login' ,component:LoginComponent},
  
  {path:'',redirectTo:'login',pathMatch:'full'},

 // this is created by command for lazy loading :ng g m booking --route=booking --routing --module=app
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  {path:'**',component:NotFoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
