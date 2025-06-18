create definer = root@localhost view documentacion.vw_caracteristicas_mostrables as
select `documentacion`.`caracteristicas_ecommerce`.`id`     AS `id`,
       `documentacion`.`caracteristicas_ecommerce`.`titulo` AS `titulo`
from `documentacion`.`caracteristicas_ecommerce`
where ((`documentacion`.`caracteristicas_ecommerce`.`estado` = 1) and
       (`documentacion`.`caracteristicas_ecommerce`.`es_general` = 1));