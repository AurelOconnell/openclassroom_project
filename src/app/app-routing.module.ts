import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharePicsListComponent } from './share-pics-list/share-pics-list.component';


const routes: Routes = [
    { path: 'sharepics', component: SharePicsListComponent},
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