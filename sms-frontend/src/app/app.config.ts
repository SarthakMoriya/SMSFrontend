import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { authReducer } from '../store/auth/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from '../store/auth/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { recordsReducer } from '../store/record/record.reducer';
import { RecordsEffects } from '../store/record/record.effects';
import { CourseEffects } from '../store/courses/course.effects';
import { courseReducer } from '../store/courses/course.reducer';
import { examReducer } from '../store/exams/exam.reducer';
import { ExamEffects } from '../store/exams/exam.effects';

import { provideAnimations } from '@angular/platform-browser/animations'; // Required for PrimeNG Toast
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      auth: authReducer,
      records: recordsReducer,
      course: courseReducer,
      exam: examReducer,
    }),
    provideEffects([AuthEffects, RecordsEffects, CourseEffects, ExamEffects]),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    MessageService,
    importProvidersFrom(ToastModule),
  ],
};
