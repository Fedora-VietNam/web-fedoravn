"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Loader2 } from "lucide-react"

export function LoginFormActions({ loading }: { loading: boolean }) {
  const t = useTranslations()

  return (
    <>
      <button
        type="submit"
        disabled={loading}
        className="btn-site-primary w-full py-4 text-lg flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="animate-spin" size={20} /> : t("auth-login-btn")}
      </button>

      <div className="text-center pt-4">
        <p className="text-site-muted font-body text-sm">
          {t("auth-no-account")}{" "}
          <Link href="/signup" className="text-site-primary font-bold hover:underline">
            {t("auth-signup")}
          </Link>
        </p>
      </div>
    </>
  )
}
