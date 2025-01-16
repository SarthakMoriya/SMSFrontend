import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { authReducer } from '../store/auth/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from '../store/auth/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { recordsReducer } from '../store/record/record.reducer';
import { RecordsEffects } from '../store/record/record.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      auth: authReducer,
      records:recordsReducer
    }),
    provideEffects([AuthEffects,RecordsEffects]),
    provideHttpClient(),
  ],
};
