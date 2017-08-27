import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {routing} from "./app.routing";
import {AuthService} from "./shared/services/auth.service";
import {ApiService} from "./shared/services/api.service";
import { AlbumsComponent } from './components/albums/albums.component';
import {SignedInGuard} from "./shared/guards/signed-in.guard";

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        AlbumsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        ApiService,
        AuthService,
        SignedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
