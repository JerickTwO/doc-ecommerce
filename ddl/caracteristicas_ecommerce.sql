create table documentacion.caracteristicas_ecommerce
(
    id          int unsigned auto_increment
        primary key,
    titulo      varchar(255)         not null,
    descripcion text                 not null,
    estado      tinyint(1) default 0 not null,
    es_general  tinyint(1) default 0 not null comment '1 = siempre se asigna a todo proyecto'
)
    collate = utf8mb4_unicode_ci
    row_format = DYNAMIC;

