import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{Observable, map} from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  id!:number;
  id$ !:Observable<Number>;
  constructor(private router:ActivatedRoute){}
  
  ngOnInit(): void {

  // getting param from the end point 
   this.router.params.subscribe((params)=> {
                    console.log(params);
                    this.id=params['roomid']
                  });

    this.id$=this.router.params.pipe(
      map( params =>params['roomid'])
    )

    // this.id$=this.router.paramMap.pipe(
    //   map(params=> params.get('roomid'))
    // );
    
  }

}
