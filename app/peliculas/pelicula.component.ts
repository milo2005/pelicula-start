import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pelicula} from "./shared/pelicula";
import {DuracionPipe} from "../shared/duracion.pipe";

@Component({
    selector:"my-pelicula",
    templateUrl:"./app/peliculas/pelicula.component.html"
    ,pipes:[DuracionPipe]
})
export class PeliculaComponent{

    @Input() pelicula:Pelicula;
    @Output() comprar:EventEmitter<number> = new EventEmitter<number>();

    buyPelicula(){
        this.comprar.emit(this.pelicula.duracion);
    }

}