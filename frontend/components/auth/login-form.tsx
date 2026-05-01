"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { LoginFormFields } from "./login-form-parts/login-form-fields"
import { LoginFormActions } from "./login-form-parts/login-form-actions"

/**
 * @brief A component that renders a login form with validation and error handling.
 * 
 * @returns A form for user authentication.
 */
export function LoginForm() {
  const t = useTranslations()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  /**
   * @brief Handles the login form submission.
   * 
   * Validates credentials using NextAuth's signIn function.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const identifier = formData.get("identifier") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        identifier,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError(t("auth-login-error"))
      } else {
        router.push("/")
        router.refresh()
      }
    } catch (err) {
      console.error(err)
      setError(t("auth-generic-error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass-card w-full max-w-md mx-auto space-y-8 p-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">{t("auth-login")}</h1>
        <p className="text-site-muted font-body">{t("hero-kicker")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-4 rounded-xl text-center">
            {error}
          </div>
        )}

        <LoginFormFields />
        <LoginFormActions loading={loading} />
      </form>
    </div>
  )
}
