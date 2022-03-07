import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";





export class MyInterceptor implements HttpInterceptor {
    private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myReq = req.clone({
            url: req.url.startsWith('http') ? req.url : (this.baseUrl + req.url),
            headers: req.headers.append('Autorization', 'Bearer pippo2')
        });
        const response$ =  next.handle(myReq);
        return response$.pipe(
            map(res => {
                if(res instanceof HttpResponse) {
                    return res.clone({
                        body: res.body.filter((z: any) => z.id % 2 === 0)
                    });
                } else {
                    return res;
                }
            }));
    }

}