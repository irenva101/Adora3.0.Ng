import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { StandardErrorInterceptor } from './interceptors/standard-error-interceptor';
import { AppConfig } from './config/config';
import { ToastrService, provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      AuthInterceptor,
      StandardErrorInterceptor,
    ])),
    AppConfig,
    provideToastr(),
    provideAnimations(),
    provideAnimationsAsync(), 
    ]
};

