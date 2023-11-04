import { Injectable ,Inject} from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environment/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  // global roomsService instance will be created at root
})
export class RoomsService {

  // injecting the APP_SERVICE_CONFIG Service contains value of type AppConfig(interface)
  
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig , private http:HttpClient) { 

    console.log("rooms service is initialized");
    console.log(environment.apiEndPoint);
    console.log("using VALUE PROVIDER : "+this.config.apiEndpoint);

  }

  // roomList:RoomList[]=[
  //   {
  //     roomNumber:1,
  //     roomType:"normal",
  //     amenities:"wifi ,fan",
  //     price:500,
  //     photos:'https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     checkinTime:new Date('10-01-2021'),
  //     checkoutTime:new Date('15-01-2021'),
  //     rating:3.5
  
  //   },
  
  //   {
  //     roomNumber:2,
  //     roomType:"ACRoom",
  //     amenities:"wifi ,fan,aircondition",
  //     price:1000,
  //     photos:'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     checkinTime:new Date('01-20-2021'),
  //     checkoutTime:new Date('01-25-2021'),
  //     rating:4.5666
  
  //   },
  //   {
  //     roomNumber:3,
  //     roomType:"ACRoom",
  //     amenities:"wifi ,fan,aircondition",
  //     price:1000,
  //     photos:'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     checkinTime:new Date('01-20-2021'),
  //     checkoutTime:new Date('01-25-2021'),
  //     rating:2.99999
  
  //   },
  //   {
  //     roomNumber:4,
  //     roomType:"ACRoom with extra bed",
  //     amenities:"wifi ,fan,aircondition,Bed",
  //     price:1000,
  //     photos:'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     checkinTime:new Date('01-20-2021'),
  //     checkoutTime:new Date('01-25-2021'),
  //     rating:3
  
  //   },
  //   {
  //     roomNumber:5,
  //     roomType:"suite room",
  //     amenities:"wifi ,fan,aircondition,food, bath",
  //     price:1000,
  //     photos:'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     checkinTime:new Date('01-20-2021'),
  //     checkoutTime:new Date('01-25-2021'),
  //     rating:4.9
  
  //   }
  // ]

  getRooms(){
    // return this.roomList;
    // because of proxy, we dont need to give the entire url
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room:RoomList){

    // add a new room and return the entire roomList[]
    return this.http.post<RoomList[]>('/api/rooms',room);
  }

  editRoom(room:RoomList){

    // add the room using {id }and return the entire roomList[]
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);
  }

  deleteRoom(id:string){
    return  this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }


  getphotos(){

    // To get more information about the http request to the API, we are using HTTP REQUEST class
    const request = new HttpRequest(
                          'GET',
                          "https://jsonplaceholder.typicode.com/photos",
                          {
                            reportProgress:true     // to get the dynamic progress of getting the data
                          }
                  );

    return this.http.request(request);
    
  }

}
