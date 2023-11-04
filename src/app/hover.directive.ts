import { Directive, OnInit,ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
// this directive is use din login component
export class HoverDirective implements OnInit {

  @Input() color:string='red';   // default is red. It will get the alue from the component’s (Template) on which it is being used.(login)

  constructor(private element :ElementRef , private renderer:Renderer2) {
      console.log(this.element.nativeElement);
   }

  ngOnInit(): void {

    //this.element.nativeElement.style.backgroundColor=this.color;
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.color);
  }

  @HostListener('mouseenter')
  onMouseHover(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','green');
  }
  
  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.color);
  }

}
