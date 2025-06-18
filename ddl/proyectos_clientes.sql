create table documentacion.proyectos_clientes
(
    id              int unsigned auto_increment
        primary key,
    clientesid      int unsigned         not null,
    nombre_proyecto varchar(60)          not null,
    observacion     varchar(125)         not null,
    estado          tinyint(1) default 1 not null,
    constraint relacion_clientes
        foreign key (clientesid) references documentacion.clientes (id)
)
    collate = utf8mb4_unicode_ci
    row_format = DYNAMIC;

