import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutes } from "./home-routing.module";

import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { CarouselModule } from 'primeng/carousel';
import { ExhibitionShowComponent } from './exhibition-show/exhibition-show.component';

@NgModule({
    declarations: [
        HomeComponent,
        ExhibitionShowComponent
    ],
    imports: [
        CommonModule,
        HomeRoutes,

        // Ng-Zorro modules.
        NzLayoutModule,

        // PrimeNG modules.
        CarouselModule
    ]
})

export class HomeModule {}