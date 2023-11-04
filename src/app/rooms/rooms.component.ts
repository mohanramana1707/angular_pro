import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './service/rooms.service';
import { Observable,Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  
})
export class RoomsComponent implements OnInit,AfterViewInit{


// injecting the RoomsService (Dependency Injection)
constructor(private roomService :RoomsService){

}


// user defined Observable

stream =new Observable<string>((observer)=>
  {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();    // to complete the obervable ie. last value
  } 
);


 totalbytes=0;
 subscription !:Subscription;

 // it is used in html
 rooms$= this.roomService.getRooms() ;

ngOnInit(): void {
  // moved to rooms Service. getting the list of rooms from the RoomService
  // this.roomList=this.roomService.getRooms();


  console.log( this.roomService.getRooms());
  // getting data using the HTTP call from API
  // hold the subscription
   this.subscription= this.roomService.getRooms().subscribe( rooms=>{
        this.roomList=rooms;
    });



    // user defined Observable subscribing
  //methos 1: detailed
    this.stream.subscribe(
      {
      next:(value)=> console.log(value),
      complete:()=> console.log("complete"),
      error:(err)=>console.log(err)
      }
    );
  // method 2
    this.stream.subscribe((data)=> console.log(data));






  // HTTP request 

    this.roomService.getphotos().subscribe(  (event)=> 

    {
      switch(event.type){

        case HttpEventType.Sent:{
          console.log("request has been made");
          break;
        }
        case HttpEventType.ResponseHeader:{
          console.log("request success!");
          break;
        }
        case HttpEventType.DownloadProgress:{
          console.log("download in progress");
          this.totalbytes +=event.loaded;
          break;
        }
        case HttpEventType.Response:{
          console.log("download completed");
          console.log(event.body);
        }
      }

    }
       ) ;

}


  // to access the first instance of the header component in template
  @ViewChild(HeaderComponent)    
  headerComponent !: HeaderComponent ;      // != to avoid no initializer as we are using strict mode

   // to access the all the instance of the header component ,if we have multiple components of same type
  @ViewChildren(HeaderComponent)  
  headerChilderComponent!:QueryList<HeaderComponent>;

 

ngAfterViewInit(): void {
  this.headerComponent.htitle="Rooms view";

  console.log(this.headerChilderComponent);
  this.headerChilderComponent.last.htitle="last header title";

}

hotelName="Hilton Hotel";
numberOfRooms=10;
hideRooms:boolean=false;

rooms:Room={
  totalRooms: 20,
  availableRooms: 10,
  bookedRooms: 5
};

roomList:RoomList[]=[];
ptitle :string ="room-title";


toogle(){ 
   this.hideRooms = !this.hideRooms;    //for showing and hiding the block(toggle)
   this.ptitle="new Room Title";

}
// stores the output event from child componenet
selectedRoom !:RoomList;

selectRoom(room:RoomList){
  this.selectedRoom=room;
  console.log(room);
}

addRoom(){
  const newRoom:RoomList={
    // roomNumber:"6",
    roomType:"new-normal",
    amenities:"wifi ,fan",
    price:500,
    photos:'https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkinTime:new Date('10-01-2021'),
    checkoutTime:new Date('15-01-2021'),
    rating:3.5
  }

  // this.roomList.push(newRoom);  // this is mutable .so reference in stack is same 

  this.roomList=[...this.roomList,newRoom];   // new reference in stack ,so it is detected in change Detection stratergy -onPush

  //roomListModified= return value from the service back end
  this.roomService.addRoom(newRoom).subscribe((roomListModified)=> 
                              {
                                 this.roomList=roomListModified 
                              });
  console.log(this.roomList);

}

editRoom(){

  const editedRoom:RoomList={
    roomNumber:"3",
    roomType:"new-normal",
    amenities:"wifi ,fan",
    price:500,
    photos:'https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    checkinTime:new Date('10-01-2021'),
    checkoutTime:new Date('15-01-2021'),
    rating:3.5
  }

  this.roomService.editRoom(editedRoom).subscribe((data)=>
        this.roomList=data);

}

deleteRoom(){

  this.roomService.deleteRoom('3').subscribe( (data)=> {
         this.roomList=data
      });
      
}


// if the compoenent is deleted from DOM
ngOnDestroy(){

    // unsubscribe
    if(this.subscription){
      this.subscription.unsubscribe();
    }
}



 



}
