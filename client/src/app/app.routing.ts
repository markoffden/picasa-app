import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {SignedInGuard} from "./shared/guards/signed-in.guard";
import {SingleAlbumComponent} from "./components/single-album/single-album.component";
import {SinglePhotoComponent} from "./components/single-photo/single-photo.component";

const appRoutes: Routes = [
    { path: '', component: SignInComponent},
    { path: 'albums', component: AlbumsComponent, canActivate: [SignedInGuard] },
    { path: 'albums/:albumId', component: SingleAlbumComponent, canActivate: [SignedInGuard] },
    { path: 'photo/:albumId/:photoId', component: SinglePhotoComponent , canActivate: [SignedInGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
