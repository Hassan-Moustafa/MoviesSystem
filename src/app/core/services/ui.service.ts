import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private spinnerStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  setSpinnerStatus(status: boolean) {
    this.spinnerStatus.next(status);
  }

  getSpinnerStatus() {
    return this.spinnerStatus;
  }
}
