export interface ProyectoCliente {
  id: number;
  clienteid: number;
  nombre_proyecto: string;
  observacion: string | null;
estado: 1 | 2 | 3;
}
