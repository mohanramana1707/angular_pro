import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailvalidatorDirective, multi: true}]
})

export class EmailvalidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const values=control.value as string;   // value from element template

    if(values.includes('test')){
      console.log("invalidEmail:true");
      return { invalidEmail:true};
    }
    return null;
  }


  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
