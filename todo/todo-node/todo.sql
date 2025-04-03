CREATE TABLE `todo` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`importance` INT(11) NOT NULL DEFAULT '0',
	`urgency` INT(11) NOT NULL DEFAULT '0',
	`deadline` DATETIME NULL DEFAULT NULL,
	`done` INT(11) NULL DEFAULT '0',
	`created_ad` TIMESTAMP NULL DEFAULT current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;