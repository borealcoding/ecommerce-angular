export class Categorias {
    private id: number;
    private nombreCategoria: string;
    private imagen?: string;

    constructor(id: number, nombreCategoria: string, imagen?: string) {
        this.id = id;
        this.nombreCategoria = nombreCategoria;
        this.imagen = imagen;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombreCategoria(): string {
        return this.nombreCategoria;
    }

    public setNombreCategoria(nombreCategoria: string): void {
        this.nombreCategoria = nombreCategoria;
    }

    public getImagen(): string | undefined {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }
}