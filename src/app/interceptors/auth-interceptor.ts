import { HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
    HttpHandlerFn) => {
    const idToken = localStorage.getItem('token');

    if (idToken) {
        req = req.clone({
            headers: req.headers.set('Authorization',
                'Bearer ' + idToken)
        });
    }
    return next(req);
};
