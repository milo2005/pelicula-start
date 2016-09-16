import {Injectable} from "@angular/core";
import {Pelicula} from "./pelicula";

@Injectable()
export class PeliculaService{

    data:Pelicula[];

    constructor(){
        this.data = [];
        this.data.push({nombre:"El Conjuro 2"
            , duracion:90
            , genero:"Terror"
            , estreno: null
            , imagen:""});
        
        this.data.push({nombre:"Pelicula de Accion"
            , duracion:120
            , genero:"Accion"
            , estreno: "18 de Septiembre del 2016"
            , imagen:""});
        
        this.data.push({nombre:"Pelicula Comedia"
            , duracion:80
            , genero:"Comedia"
            , estreno: "24 de Septiembre del 2016"
            , imagen:""});

        
    }

    addPelicula(pelicula:Pelicula){
        this.data.push(pelicula);
    }

    removePelicula(pos:number){
        this.data.splice(pos, 1);
    }


}