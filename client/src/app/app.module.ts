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
import {PicasaService} from "./shared/services/picasa.service";
import { SingleAlbumComponent } from './components/single-album/single-album.component';
import { AlbumListItemComponent } from './components/albums/album-list-item/album-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        AlbumsComponent,
        SingleAlbumComponent,
        AlbumListItemComponent
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
        PicasaService,
        SignedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
