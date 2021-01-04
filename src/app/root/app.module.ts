import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, PLATFORM_ID } from '@angular/core';
import { RootRoutingModule } from '../root-routing/RT-route-system/root-routing.module';
import { AppComponent } from './components/root-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomainService } from "@core/servcies/domain.service";
import { AppLoaderModule } from '../app-tools/app-loader/app-loader.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { interceptorProvider } from '@interceptor/interceptor.provider';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

export function initializer(domainService: DomainService) {
  return () => {
    new Promise((resolve, reject) => {
      if (DomainService.domains) {
        resolve(domainService);
      }
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    AppLoaderModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    interceptorProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PLATFORM_ID, DomainService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
