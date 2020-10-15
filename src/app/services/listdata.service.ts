import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListData {
  private subject = new Subject<any>();
  private keyValue: BehaviorSubject<any[]>;
   constructor() {
   }


   setKeyValue(key: any, value: any): Observable<any> {
    localStorage.setItem(key, value);
    return this.subject.asObservable();
    }

    getKeyValue(){
      const archive = [];
      const keys = Object.keys(localStorage);
      let key;

      for ( let i = 0;  keys[i] != null  ; i++) {
          key = keys[i];
          archive.push('(key)' + key + '=' + localStorage.getItem(key) + '(Value)');
      }
      this.keyValue = new BehaviorSubject<any>(archive);

      return this.keyValue;
    }

  }

