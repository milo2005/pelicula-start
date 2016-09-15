import {Component} from "@angular/core";
import {AppBarComponent} from "../shared/appbar.component";
import {PeliculaComponent} from "./pelicula.component";
import {Pelicula, PeliculaService} from "./shared/index";

@Component({
    selector: "my-list"
    ,templateUrl: "./app/peliculas/pelicula-list.component.html"
    ,directives: [AppBarComponent, PeliculaComponent]
    ,providers: [PeliculaService]
})
export class PeliculaListComponent{

    titulo:string = "Peliculas";
    peliculas:Pelicula[];

    constructor(private service:PeliculaService){
        this.peliculas = service.data;
    }

}