import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private spinnerStatus = new BehaviorSubject<boolean>(false);

  constructor(private _snackBar: MatSnackBar) { }

  setSpinnerStatus(status: boolean) {
    this.spinnerStatus.next(status);
  }

  getSpinnerStatus() {
    return this.spinnerStatus;
  }

  /**
   * 
   * @param message 
   * @param action - pass 'error' as string to style the message with error global css class
   */
  showSnackBar(message: string, action: string) {
    this._snackBar.open(message, null, {
      duration: 3000,
      verticalPosition: "top",
      panelClass: action
    });
  }
}
