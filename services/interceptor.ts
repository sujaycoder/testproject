import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = window.sessionStorage.getItem('AuthToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        //  event => this.handleResponse(request, event),
        error => this.handleError(request, error)
      )
    );
  }

  handleResponse(req: HttpRequest<any>, event) {
    console.log('Handling response for ', req.url, event);
    if (event instanceof HttpResponse) {
      console.log('Request for ', req.url, ' Response Status ', event.status, ' With body ', event.body);
    }
  }

  handleError(req: HttpRequest<any>, event) {
    // console.error('Request for ', req.url, ' Response Status ', event.status, ' With error ', event.error);
    if (event instanceof HttpErrorResponse) {
      if (event.status === 0) {
        console.log("Server App Connectivity Issue")
      } else if (event.status === 401) {
        this.router.navigate(['login']);
      }
    }
  }
}