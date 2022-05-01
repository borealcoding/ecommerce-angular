import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inversorNombre'
})
export class InversorNombrePipe implements PipeTransform {

  transform(nombreAInvertir: string): string {
    const partesDelNombre: string[] = nombreAInvertir.split(',');

    if(partesDelNombre.length === 2) {
      return `${partesDelNombre[1].trim()} ${partesDelNombre[0].trim()}`; // {partesDelNombre[1] + ' ' + partesDelNombre[0]}
    } else {
      return nombreAInvertir;
    }
  }

}
