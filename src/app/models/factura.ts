export class Factura{
  id_usuario_web:number;
  rectifica_a:bigint;
  rectificada_por:bigint;
  normaliza_a:bigint;
  Id_usuario_consulta:number; //not null
  id_empresa:number;//not null
  id_anio_fiscal:number; //not null
  id_serie:number//not null
  numero:number;//not null
  fecha_factura:Date;
  id_ejecucion_consulta:bigint;
  fecha_consulta:Date;
  codigo;
  descripcion;
  id_cliente_consulta:bigint;
  precio:float;
  descuento:float;
  uds:number;
  nombre_cliente_factura;
  nif_cliente_factura;
  direccion_cliente_factura;
  esta_vigente;
  

  
}
