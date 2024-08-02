import { Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Survey Home',
        component: HomeComponent
    },
    {
        path: 'survey',
        title: 'Survey',
        component: SurveyComponent
    }
];
