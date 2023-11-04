import { Component } from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[RoomsService]         // separate roomsService instance for EMPloyee COmponent
})
export class EmployeeComponent {

  constructor(roomsService:RoomsService){

  }

  empName:string="John";

}
