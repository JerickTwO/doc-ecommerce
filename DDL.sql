/* Navicat Premium Dump SQL
Corrigido el 13-06-2025
 */
SET
  NAMES utf8mb4;

SET
  FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for caracteristicas_ecommerce
-- ----------------------------
DROP TABLE IF EXISTS `caracteristicas_ecommerce`;

CREATE TABLE
  `caracteristicas_ecommerce` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      `descripcion` TEXT CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      `estado` TINYINT (1) NOT NULL DEFAULT 0,
      PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for clientes
-- ----------------------------
DROP TABLE IF EXISTS `clientes`;

CREATE TABLE
  `clientes` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `razon_social` VARCHAR(255) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      `ruc` VARCHAR(20) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      PRIMARY KEY (`id`),
      UNIQUE KEY `uq_clientes_ruc` (`ruc`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for proyectos_clientes
-- ----------------------------
DROP TABLE IF EXISTS `proyectos_clientes`;

CREATE TABLE
  `proyectos_clientes` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `clientesid` INT UNSIGNED NOT NULL,
    `nombre_proyecto` VARCHAR(60) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      `observacion` VARCHAR(125) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      PRIMARY KEY (`id`),
      KEY `fk_proyectos_clientes_clientes` (`clientesid`),
      CONSTRAINT `fk_proyectos_clientes_clientes` FOREIGN KEY (`clientesid`) REFERENCES `clientes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
  ) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for proyectos_clientes_detalles
-- ----------------------------
DROP TABLE IF EXISTS `proyectos_clientes_detalles`;

CREATE TABLE
  `proyectos_clientes_detalles` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `proyectoid` INT UNSIGNED NOT NULL,
    `caracteristicas_ecommerceid` INT UNSIGNED NOT NULL,
    `observacion` VARCHAR(255) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      `estado` TINYINT (1) NOT NULL DEFAULT 1,
      PRIMARY KEY (`id`),
      KEY `fk_detalles_proyecto` (`proyectoid`),
      KEY `fk_detalles_caracteristica` (`caracteristicas_ecommerceid`),
      CONSTRAINT `fk_detalles_proyecto` FOREIGN KEY (`proyectoid`) REFERENCES `proyectos_clientes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
      CONSTRAINT `fk_detalles_caracteristica` FOREIGN KEY (`caracteristicas_ecommerceid`) REFERENCES `caracteristicas_ecommerce` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE
  `usuarios` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      `email` VARCHAR(255) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      `contrasenia` VARCHAR(255) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
      `role` ENUM ('admin', 'user', 'cliente') CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
      `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (`id`),
      UNIQUE KEY `uq_usuarios_username` (`username`),
      UNIQUE KEY `uq_usuarios_email` (`email`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

SET
  FOREIGN_KEY_CHECKS = 1;