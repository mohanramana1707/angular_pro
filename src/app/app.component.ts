import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef,ElementRef,Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localStorage.token';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  //template:'<h1> HI  Iam Mohan</h1>', for multiline use tilde symbol
  // template:` <h1> I am mohan</h1>    
  //   <h1>Working in Infy</h1>`
  // ,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,AfterViewInit{
 


  title = 'hotelInventoryapp';
  role='user';

// to load the component DYNAMICALLY: ViewContainerRef-> gives access to the component 

  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;

   ngAfterViewInit(): void {

  //   const componentRef=this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms=100;
   }

  // ElementRef-> gives acccess to the element;
  @ViewChild('name',{static:true}) name!: ElementRef;

  ngOnInit(): void {
    console.log(this.name);
   this.name.nativeElement.innerText="Hilton Hotel";
   
   this.localStorage.setItem('name',"HiltonHotel")
  }

////////////////// Component using the localStorageToken //////////////////

  constructor(@Inject(localStorageToken) private localStorage :Storage){



  }


}
