create table documentacion.clientes
(
    id           int unsigned auto_increment
        primary key,
    razon_social varchar(255) not null,
    ruc          varchar(20)  not null,
    constraint uq_clientes_ruc
        unique (ruc)
)
    collate = utf8mb4_unicode_ci
    row_format = DYNAMIC;

