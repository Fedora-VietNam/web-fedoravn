"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Mail, Lock, User, Phone, Loader2 } from "lucide-react"
import { signup } from "@/actions/auth"

export function SignupForm() {
  const t = useTranslations()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    const formData = new FormData(e.currentTarget)
    const res = await signup(formData)

    if (res.error) {
      setError(res.error)
      setLoading(false)
    } else {
      setSuccess(res.success || "Đăng ký thành công!")
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    }
  }

  return (
    <div className="glass-card w-full max-w-md mx-auto space-y-8 p-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">{t("auth-signup")}</h1>
        <p className="text-site-muted font-body">{t("hero-kicker")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-4 rounded-xl text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm p-4 rounded-xl text-center">
            {success}
          </div>
        )}

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

        <button
          type="submit"
          disabled={loading}
          className="btn-site-primary w-full py-4 text-lg flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : t("auth-signup-btn")}
        </button>
      </form>

      <div className="text-center pt-4">
        <p className="text-site-muted font-body text-sm">
          {t("auth-have-account")}{" "}
          <Link href="/login" className="text-site-primary font-bold hover:underline">
            {t("auth-login")}
          </Link>
        </p>
      </div>
    </div>
  )
}
