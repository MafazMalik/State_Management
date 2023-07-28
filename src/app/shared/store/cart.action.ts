import { createAction, props } from "@ngrx/store";


export const addCart = createAction('[Cart] addCart', props<any>());
export const removeCart = createAction('[Cart] removeCarrt', props<any>());