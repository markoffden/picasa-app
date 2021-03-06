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
import { SinglePhotoComponent } from './components/single-photo/single-photo.component';
import { PhotoListItemComponent } from './components/single-album/photo-list-item/photo-list-item.component';
import {ErrorService} from "./shared/services/error.service";
import { FromNowPipe } from './shared/pipes/from-now.pipe';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        AlbumsComponent,
        SingleAlbumComponent,
        AlbumListItemComponent,
        SinglePhotoComponent,
        PhotoListItemComponent,
        FromNowPipe
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
        ErrorService,
        SignedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
