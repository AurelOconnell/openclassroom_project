import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharePicsListComponent } from './share-pics-list/share-pics-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSharePicsComponent } from './single-share-pics/single-share-pics.component';


const routes: Routes = [
    { path: 'sharepics/:id', component: SingleSharePicsComponent},
    { path: 'sharepics', component: SharePicsListComponent},
    { path: '', component: LandingPageComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule,
    ]
})

export class AppRoutingModule {}