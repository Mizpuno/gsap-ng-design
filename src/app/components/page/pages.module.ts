import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageComponent } from "./page.component";
import { HomeComponent } from './home/home.component';
import { PageRoutes } from "./page-routing.module";

@NgModule({
    declarations: [
        PageComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        PageRoutes
    ]
})

export class PageModule {}