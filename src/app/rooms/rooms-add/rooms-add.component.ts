import { Component,OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../service/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent implements OnInit {

constructor(private roomService:RoomsService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  room :RoomList={
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 1
  }

  successMsg:string='';

  AddRoom(formRef :NgForm){
    this.roomService
        .addRoom(this.room)
        .subscribe((data) => this.successMsg = "Room Added Succesfully");

    formRef.reset();  // reset form

    // or we can rest using default values

   formRef.resetForm({
      roomType: 'noraml',
      amenities: '1bhk',
      price: 100,
      photos: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 1
    })

  }

}
