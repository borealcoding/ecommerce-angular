export class Articulo {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string;
    imagen?: string;

    constructor(
        
    ) {
        this.id = 0;
        this.nombre = "";
        this.precio = 0;
        this.descripcion = "";
        this.imagen = "";
    }

}