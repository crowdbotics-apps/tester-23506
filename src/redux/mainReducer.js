import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView60187518Reducer from '../features/CalendarView60187518/redux/reducers';
import CalendarView61187517Reducer from '../features/CalendarView61187517/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView60187518: CalendarView60187518Reducer,
CalendarView61187517: CalendarView61187517Reducer,

});