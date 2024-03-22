import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FocusStickyCardsService {

  isSectionInView: boolean = false;

  private _sharedData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sharedData$: Observable<boolean> = this._sharedData.asObservable();

  constructor() { }

  get sharedData(): boolean {
    return this._sharedData.value;
  }

  set sharedData(value: boolean) {
    this._sharedData.next(value);
  }
  
}