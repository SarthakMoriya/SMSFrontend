import { createFeatureSelector, createSelector } from '@ngrx/store';

const adminState = createFeatureSelector<any>('admin');

export const selectAdminState = createSelector(
  adminState,
  (state: any) => state
);
