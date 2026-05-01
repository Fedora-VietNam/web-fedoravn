"use client"

import { useTranslations } from "next-intl"
import { Mail, Lock, User, Phone } from "lucide-react"

export function SignupFormFields() {
  const t = useTranslations()

  return (
    <div className="space-y-4">
      <div className="relative group">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-site-muted group-focus-within:text-site-primary transition-colors" size={18} />
        <input
          name="name"
          type="text"
          required
          placeholder={t("auth-name")}
          className="w-full bg-[#111a34] border border-[#3a528e] rounded-xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-site-primary outline-none transition-all"
        />
      </div>

      <div className="relative group">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-site-muted group-focus-within:text-site-primary transition-colors" size={18} />
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
          className="w-full bg-[#111a34] border border-[#3a528e] rounded-xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-site-primary outline-none transition-all"
        />
      </div>

      <div className="relative group">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-site-muted group-focus-within:text-site-primary transition-colors" size={18} />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Số điện thoại"
          className="w-full bg-[#111a34] border border-[#3a528e] rounded-xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-site-primary outline-none transition-all"
        />
      </div>

      <div className="relative group">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-site-muted group-focus-within:text-site-primary transition-colors" size={18} />
        <input
          name="email"
          type="email"
          required
          placeholder={t("auth-email")}
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
    </div>
  )
}
