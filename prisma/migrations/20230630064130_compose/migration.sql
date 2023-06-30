-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `facility_code` VARCHAR(191) NOT NULL,
    `visit_id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `middle_name` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `client_mrn` VARCHAR(191) NOT NULL,
    `client_sex` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `location_id` VARCHAR(191) NOT NULL,
    `birthdate` DATETIME(3) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `ordered_on` DATETIME(3) NOT NULL,
    `ordered_by` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `orders_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `test_id` VARCHAR(191) NOT NULL,
    `test_notes` VARCHAR(191) NULL,
    `is_urgent` BOOLEAN NOT NULL,
    `orderUuid` VARCHAR(191) NULL,

    UNIQUE INDEX `tests_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tests` ADD CONSTRAINT `tests_orderUuid_fkey` FOREIGN KEY (`orderUuid`) REFERENCES `orders`(`uuid`) ON DELETE SET NULL ON UPDATE CASCADE;
