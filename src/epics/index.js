import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, catchError, switchMap } from 'rxjs/operators';
import { FETCH_ITEM_REQUEST, FETCH_SERVICES_REQUEST } from '../actions/actionTypes';
import { fetchItemSuccess, fetchItemFailure, fetchServicesSuccess, fetchServicesFailure } from '../actions/actionCreators';
import { of } from 'rxjs';


export const fetchServicesEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICES_REQUEST),
    switchMap(o => ajax.getJSON('http://localhost:7070/api/services').pipe(
    map(o => fetchServicesSuccess(o)),
    catchError(e => of(fetchServicesFailure(e)))
    ))
 );

export const fetchItemEpic = action$ => action$.pipe(
    ofType(FETCH_ITEM_REQUEST),
    switchMap(o => ajax.getJSON(`http://localhost:7070/api/services/${o.payload.id}`).pipe(
    map(o => fetchItemSuccess(o)),
    catchError(e => of(fetchItemFailure(e)))
    ))
);
