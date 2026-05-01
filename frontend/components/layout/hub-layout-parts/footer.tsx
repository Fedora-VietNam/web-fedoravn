"use client"

import React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Heart } from "lucide-react"

/**
 * @brief Renders the application's footer.
 * 
 * Displays descriptive information, resource links, legal links, and trademarks.
 * 
 * @returns A JSX element representing the footer.
 */
export function Footer() {
  const t = useTranslations()

  return (
    <footer className="border-t border-[#23335f] text-site-muted text-[13px] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Fedora.vn</h4>
            <p className="font-body leading-relaxed">
              {t("footer-desc")}
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/contact" className="hover:text-white transition-colors">{t("footer-contact")}</Link>
              <Link href="/about" className="hover:text-white transition-colors">{t("footer-about")}</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">{t("footer-resources")}</h4>
            <ul className="space-y-2 font-body">
              <li><Link href="#guides" className="hover:text-white transition-colors">{t("menu-guides")}</Link></li>
              <li><Link href="https://getfedora.org" className="hover:text-white transition-colors">{t("footer-download")}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t("footer-blog")}</Link></li>
              <li><Link href="#docs" className="hover:text-white transition-colors">{t("menu-docs")}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">{t("footer-contact")}</h4>
            <ul className="space-y-2 font-body">
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">{t("footer-disclaimer-label")}</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">{t("footer-privacy-label")}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{t("footer-terms")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 pt-8 border-t border-white/5">
          <p className="leading-relaxed opacity-70">
            <strong className="text-white">{t("footer-disclaimer-label")}:</strong> {t("legal-disclaimer")}
          </p>
          <p className="leading-relaxed opacity-70">
            <strong className="text-white">{t("footer-trademark-label")}:</strong> {t("legal-trademark")}
          </p>
          <p className="leading-relaxed opacity-70">
            <strong className="text-white">{t("footer-privacy-label")}:</strong> {t("legal-privacy")}
          </p>
          <div className="pt-4 opacity-50 italic">
            © 2026 Fedora.vn — Community-driven, open, practical.
            <div className="mt-2 inline-flex items-center gap-2">
               <Heart size={12} className="text-site-primary fill-site-primary" />
               <span>{t("footer-built-by")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
