import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pageNotFound/page-not-found.component';
import {GuideComponent} from "./guide";
import {ValdinotoComponent} from "./guide/valdinoto/valdinoto.component";
import {ValdinotoVideoComponent} from "./guide/valdinoto/video/valdinoto-video.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'guide',
        pathMatch: 'full',
      },
      {
        path: 'guide',
        component: GuideComponent,
        children: [
          {
            path: 'valdinoto',
            component: ValdinotoComponent
          },
          {
            path: 'valdinoto/:id',
            component: ValdinotoVideoComponent
          }
        ]
      },
      {
        path: '**',
        component : PageNotFoundComponent
      }
    ]
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
