import {Component} from "@angular/core";
import {PeliculaListComponent} from "./peliculas/pelicula-list.component";

@Component({
  selector:"my-app",
  template:"<my-list></my-list>",
  directives:[PeliculaListComponent]
})
export class AppComponent {}
