import { Injectable } from "@angular/core";
import { 
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpErrorResponse, HttpParams
} from "@angular/common/http";
import { throwError, Observable, BehaviorSubject, of } from "rxjs";
import { catchError, filter, take, switchMap } from "rxjs/operators";

@Injectable()
export class InterceptorService implements HttpInterceptor {

  
  private token = "b6a37cdfe2a619f5f55b42d2424ec1fe";

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }
    req = req.clone({
      params: req.params.append('api_key', this.token)
    });

    return next.handle(req);
  }
}