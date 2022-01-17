import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key' : '3db3005181msh21a27ceeba8cefdp1fe400jsn2c1e276cd892',
                'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: '16787e8e6694497894ee365e1cf7a232',
            }
        });
        return next.handle(req);
    }
}