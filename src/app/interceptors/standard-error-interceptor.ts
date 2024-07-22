import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, catchError, throwError} from "rxjs";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../services/auth.service";

export const StandardErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
    HttpHandlerFn) => {
    const router = inject(Router);
    const authentificationService = inject(AuthService);
    const toastr = inject(ToastrService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error && error.status === 401) {
                // authentificationService.logoutIdentity();
                router.navigate(['/login']);
                toastr.info('Your session has expired. Please login again.');
                return EMPTY; 
            }

            return throwError(() => error); 
        })
    );
};
