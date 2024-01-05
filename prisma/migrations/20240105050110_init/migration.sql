-- AlterTable
ALTER TABLE `cart` MODIFY `gameId` VARCHAR(191) NULL,
    MODIFY `qty` INTEGER NULL;

-- AlterTable
ALTER TABLE `paymentdetails` MODIFY `cardNumber` VARCHAR(191) NULL,
    MODIFY `expiry` VARCHAR(191) NULL,
    MODIFY `cvv` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `purchase` MODIFY `gameId` VARCHAR(191) NULL,
    MODIFY `qty` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `username` VARCHAR(191) NULL,
    MODIFY `firstName` VARCHAR(191) NULL,
    MODIFY `lastName` VARCHAR(191) NULL,
    MODIFY `country` VARCHAR(191) NULL,
    MODIFY `avatar` VARCHAR(191) NULL;
