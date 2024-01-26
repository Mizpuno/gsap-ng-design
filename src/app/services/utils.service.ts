import { Injectable } from "@angular/core";

// declare from webpack.
declare const DEFAULT_ICON_PACKAGES: any[]

@Injectable({
    providedIn: 'root',
})
export class UtilService {
    get getIconPackages() { return DEFAULT_ICON_PACKAGES }
}