"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { User, Lock } from "lucide-react"

export function LoginFormFields() {
  const t = useTranslations()

  return (
    <div className="space-y-4">
      <div className="relative group">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-site-muted group-focus-within:text-site-primary transition-colors" size={18} />
        <input
          name="identifier"
          type="text"
          required
          placeholder="Username hoặc Email"
          className="w-full bg-[#111a34] border border-[#3a528e] rounded-xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-site-primary outline-none transition-all"
        />
      </div>

      <div className="relative group">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-site-muted group-focus-within:text-site-primary transition-colors" size={18} />
        <input
          name="password"
          type="password"
          required
          placeholder={t("auth-password")}
          className="w-full bg-[#111a34] border border-[#3a528e] rounded-xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-site-primary outline-none transition-all"
        />
      </div>
      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-sm text-site-muted hover:text-white transition-colors">
          Quên mật khẩu?
        </Link>
      </div>
    </div>
  )
}
