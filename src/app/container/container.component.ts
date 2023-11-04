import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit,AfterContentInit{

// access at runtime ,once the content is initialized
@ContentChild(EmployeeComponent)
employee!:EmployeeComponent;

// after employee content is initialized we hook the EMPLOYEE Componenet and update/ get any value

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName="RAM";
  }
  ngOnInit(): void {
   
  }

}
