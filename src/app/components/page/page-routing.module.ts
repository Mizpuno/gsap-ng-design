import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageComponent } from "./page.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PageRoutes {}