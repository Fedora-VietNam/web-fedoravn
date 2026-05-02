import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

/**
 * @brief Global Prisma client instance to be used throughout the application.
 * 
 * Prevents multiple instances of Prisma Client in development due to hot reloading.
 */
export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
