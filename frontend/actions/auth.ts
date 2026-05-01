"use server"

import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { z } from "zod"

const SignupSchema = z.object({
  name: z.string().min(2),
  username: z.string().min(3),
  phone: z.string().min(10),
  email: z.string().email(),
  password: z.string().min(6),
})

/**
 * @brief Registers a new user in the system.
 * 
 * Note: Currently disabled and returns an error message.
 * 
 * @param formData - The form data containing user details (name, username, phone, email, password)
 * @returns An object containing either a success message or an error message
 */
export async function signup(formData: FormData) {
  return { error: "Chưa mở đăng ký, vui lòng liên hệ admin" }
/*
  const name = formData.get("name") as string
  const username = formData.get("username") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const validatedFields = SignupSchema.safeParse({ name, username, phone, email, password })

  if (!validatedFields.success) {
    return { error: "Dữ liệu không hợp lệ." }
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { email },
        { username }
      ]
    },
  })

  if (existingUser) {
    return { error: "Email đã được sử dụng." }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      username,
      phone,
      email,
      password: hashedPassword,
    },
  })

  return { success: "Đăng ký thành công! Vui lòng đăng nhập." }*/
}
