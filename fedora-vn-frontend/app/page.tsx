import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/button/language-switcher"

export default function Page() {
  const t = useTranslations()

  return (
    <>
      <div>{t("menu-home")}</div>
      <LanguageSwitcher />
    </>
  )
}
