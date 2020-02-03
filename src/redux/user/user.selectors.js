import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrenUser = createSelector([selectUser], (user) => user.currentUser);