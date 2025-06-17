export interface ProyectoCliente {
  id: number;
  clienteid: number;
  nombre_proyecto: string;
  observacion: string | null;
  estado: 0 | 1;
}
