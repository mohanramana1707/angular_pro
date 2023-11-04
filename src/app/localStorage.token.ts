import { InjectionToken } from "@angular/core";

////////////////// Defining the injection token //////////////////
//Injection tokens are a popular way of providing dependencies in Angular. They are used to provide a value, such as a service instance or a configuration setting, to a component or other part of the application.

export const localStorageToken= new InjectionToken<any>('localStorage' ,{
    providedIn: 'root',
    factory(){
        return localStorage
    }
});