"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { signup } from "@/actions/auth"
import { SignupFormFields } from "./signup-form-parts/signup-form-fields"
import { SignupFormActions } from "./signup-form-parts/signup-form-actions"

/**
 * @brief A component that renders a signup form for new user registration.
 * 
 * @returns A form for creating a new user account.
 */
export function SignupForm() {
  const t = useTranslations()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  /**
   * @brief Handles the signup form submission.
   * 
   * Calls the signup server action and handles the response.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    const formData = new FormData(e.currentTarget)
    const res = await signup(formData)

    if (res?.error) {
      setError(res.error)
      setLoading(false)
    } else {
      setSuccess(t("auth-signup-success"))
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

        <SignupFormFields />
        <SignupFormActions loading={loading} />
      </form>
    </div>
  )
}
