import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:"duracion"})
export class DuracionPipe implements PipeTransform{

    transform(valor:number){
        let horas = parseInt((valor / 60)+"");
        let minutos = valor % 60;
        return horas+" horas y "+minutos+" minutos";
    }

}