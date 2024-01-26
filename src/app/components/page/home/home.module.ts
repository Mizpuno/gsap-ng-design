import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutes } from "./home-routing.module";

import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutes,

        // Ng-Zorro modules.
        NzLayoutModule
    ]
})

export class HomeModule {}