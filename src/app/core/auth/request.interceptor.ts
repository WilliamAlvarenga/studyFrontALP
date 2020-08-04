import { TokenService } from './../token/token.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor( private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenService.hastoken()) {
      const token = this.tokenService.getToken();
      req = req.clone({
          setHeaders : {
              'x-access-token': token
          }
      });
  }
  return next.handle(req);

  }
}
