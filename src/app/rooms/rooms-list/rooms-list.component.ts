import { ChangeDetectionStrategy,Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush    //change detection & updation od view  happen whenever we change the DOMstructure
})

export class RoomsListComponent implements OnInit,OnChanges {



 @Input() title:string='';

  @Input() rooms:RoomList[]=[];    // The @Input() decorator in a child component or directive signifies that the property can  
                                    //receive its value from its parent component.

  @Output() selectedRoom= new EventEmitter<RoomList>();   // child to parent 

  // triggered on child selection
  selectRoomChild(room:RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnInit(): void {
   
  }


  
  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes)

    if(changes['title']){
      this.title=changes['title'].currentValue.toUpperCase();
    }
  }

}
