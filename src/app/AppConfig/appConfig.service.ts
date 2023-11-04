import {InjectionToken} from "@angular/core";
import { AppConfig } from "./appConfig.interface";
import { environment } from "src/environment/environment";

// this APP_SERVICE_CONFIG Service provide value of type AppConfig(interface)
export const APP_SERVICE_CONFIG=new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig={
    apiEndpoint : environment.apiEndPoint
};