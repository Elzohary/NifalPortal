import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  private isSideNavOpen = new BehaviorSubject<boolean>(false);

  toggleSideNav() {
    this.isSideNavOpen.next(!this.isSideNavOpen.value);
  }

  getIsSideNavValue() {
    return this.isSideNavOpen.value;
  }

  setIsSideNavFalse() {
    this.isSideNavOpen.next(false);
  }

  getSideNavState() {
    return this.isSideNavOpen.asObservable();
  }
}
