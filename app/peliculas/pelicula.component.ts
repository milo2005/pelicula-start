import {Component, Input} from "@angular/core";
import {Pelicula} from "./shared/pelicula";

@Component({
    selector:"my-pelicula",
    templateUrl:"./app/peliculas/pelicula.component.html"
})
export class PeliculaComponent{

    @Input() pelicula:Pelicula;

}