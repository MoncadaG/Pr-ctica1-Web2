import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.components';

export const routes: Routes = [
    {path: '',component:CatalogoComponent},
    {path:'**', redirectTo:''}
];