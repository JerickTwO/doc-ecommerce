create table documentacion.usuarios
(
    id          int unsigned auto_increment
        primary key,
    username    varchar(100)                                                not null,
    email       varchar(255)                                                not null,
    contrasenia varchar(255)                                                not null,
    role        enum ('admin', 'user', 'cliente') default 'user'            not null,
    createdAt   datetime                          default CURRENT_TIMESTAMP not null,
    constraint uq_usuarios_email
        unique (email),
    constraint uq_usuarios_username
        unique (username)
)
    collate = utf8mb4_unicode_ci
    row_format = DYNAMIC;

