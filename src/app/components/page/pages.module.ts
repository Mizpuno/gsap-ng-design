import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageComponent } from "./page.component";
import { PageRoutes } from "./page-routing.module";

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PageRoutes,

        //Ng-Zorro Modules
        NzLayoutModule
    ]
})

export class PageModule {}