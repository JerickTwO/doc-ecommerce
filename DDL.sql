-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para documentacion
DROP DATABASE IF EXISTS `documentacion`;
CREATE DATABASE IF NOT EXISTS `documentacion` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `documentacion`;

-- Volcando estructura para tabla documentacion.caracteristicas_ecommerce
DROP TABLE IF EXISTS `caracteristicas_ecommerce`;
CREATE TABLE IF NOT EXISTS `caracteristicas_ecommerce` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '0',
  `es_general` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1 = siempre se asigna a todo proyecto',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla documentacion.clientes
DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruc` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uq_clientes_ruc` (`ruc`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla documentacion.proyectos_clientes
DROP TABLE IF EXISTS `proyectos_clientes`;
CREATE TABLE IF NOT EXISTS `proyectos_clientes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `clientesid` int unsigned NOT NULL,
  `nombre_proyecto` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `observacion` varchar(125) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `relacion_clientes` (`clientesid`) USING BTREE,
  CONSTRAINT `relacion_clientes` FOREIGN KEY (`clientesid`) REFERENCES `clientes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla documentacion.proyectos_clientes_detalles
DROP TABLE IF EXISTS `proyectos_clientes_detalles`;
CREATE TABLE IF NOT EXISTS `proyectos_clientes_detalles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `proyectoid` int unsigned NOT NULL,
  `caracteristicas_ecommerceid` int unsigned NOT NULL,
  `observacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `caracteristicas` (`caracteristicas_ecommerceid`) USING BTREE,
  KEY `fk_detalles_proyecto` (`proyectoid`),
  CONSTRAINT `caracteristicas` FOREIGN KEY (`caracteristicas_ecommerceid`) REFERENCES `caracteristicas_ecommerce` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_detalles_proyecto` FOREIGN KEY (`proyectoid`) REFERENCES `proyectos_clientes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla documentacion.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasenia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user','cliente') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uq_usuarios_username` (`username`) USING BTREE,
  UNIQUE KEY `uq_usuarios_email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para vista documentacion.vw_caracteristicas_mostrables
DROP VIEW IF EXISTS `vw_caracteristicas_mostrables`;
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `vw_caracteristicas_mostrables` (
	`id` INT(10) UNSIGNED NOT NULL,
	`titulo` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci'
) ENGINE=MyISAM;

-- Volcando estructura para vista documentacion.vw_caracteristicas_mostrables
DROP VIEW IF EXISTS `vw_caracteristicas_mostrables`;
-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `vw_caracteristicas_mostrables`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `vw_caracteristicas_mostrables` AS select `caracteristicas_ecommerce`.`id` AS `id`,`caracteristicas_ecommerce`.`titulo` AS `titulo` from `caracteristicas_ecommerce` where ((`caracteristicas_ecommerce`.`estado` = 1) and (`caracteristicas_ecommerce`.`es_general` = 1));

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
