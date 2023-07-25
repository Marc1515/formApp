import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    const email = control.value;

    console.log({email})

    const httpCallObsrevable = new Observable<ValidationErrors | null> ( ( subscriber ) => {

      if ( email === 'meq.1515@gmail.com' ) {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();

    }).pipe(
      delay( 3000 )
    );

    return httpCallObsrevable;

  }


/*
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    const email = control.value;

    console.log({email})

    return of({
      emailTaken: true
    }).pipe(
      delay(2000)
    )

  } */



}
