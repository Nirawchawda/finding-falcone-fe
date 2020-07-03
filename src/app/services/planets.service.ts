import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    console.log(message);
  }

  constructor(
    private http: HttpClient,
  ) { }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPlanets(): Observable<Planet> {
    const url = 'https://findfalcone.herokuapp.com/planets';
    return this.http.get<Planet>(url).pipe(
      catchError(this.handleError<Planet>('Some internal error'))
    );
  }
}
