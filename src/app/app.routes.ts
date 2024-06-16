import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'cv',
        loadChildren: () =>
            import('./modules/cv/cv.module').then((m) => m.CvModule),
    },
];
