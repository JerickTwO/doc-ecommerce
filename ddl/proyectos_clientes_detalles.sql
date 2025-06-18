create table documentacion.proyectos_clientes_detalles
(
    id                          int unsigned auto_increment
        primary key,
    proyectoid                  int unsigned         not null,
    caracteristicas_ecommerceid int unsigned         not null,
    observacion                 varchar(255)         null,
    estado                      tinyint(1) default 1 not null,
    constraint caracteristicas
        foreign key (caracteristicas_ecommerceid) references documentacion.caracteristicas_ecommerce (id),
    constraint fk_detalles_proyecto
        foreign key (proyectoid) references documentacion.proyectos_clientes (id)
)
    collate = utf8mb4_unicode_ci
    row_format = DYNAMIC;

