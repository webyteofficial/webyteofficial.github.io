import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './shared/token-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        SharedModule,
        PagesModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }