import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView60187518Saga from '../features/CalendarView60187518/redux/sagas';
import CalendarView61187517Saga from '../features/CalendarView61187517/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView60187518Saga,
CalendarView61187517Saga,
    
  ]);
}