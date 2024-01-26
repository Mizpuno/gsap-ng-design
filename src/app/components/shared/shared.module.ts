import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,

        // Ng-Zorro Modules.
        NzGridModule,
        NzMenuModule,
        NzButtonModule,
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})

export class SharedModule {}