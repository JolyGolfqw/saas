import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasksReducer from 'features/tasks/taskSlice';
import counterReducer from 'features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
