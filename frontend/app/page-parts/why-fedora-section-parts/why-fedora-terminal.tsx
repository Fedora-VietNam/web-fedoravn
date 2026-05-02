"use client"

/**
 * @brief Renders a terminal mockup for the Why Fedora section.
 * 
 * Displays a set of common Fedora terminal commands and system status.
 * 
 * @returns A JSX element representing the terminal mockup.
 */
export function WhyFedoraTerminal() {
  return (
    <div className="hidden md:block">
      <div className="relative">
        <div className="absolute inset-0 bg-site-primary blur-[120px] opacity-20 rounded-full animate-pulse"></div>
        <div className="relative glass p-8 rounded-3xl border-[#3a528e] border-2">
          <pre className="text-xs text-blue-300 font-mono leading-relaxed overflow-hidden">
            {`$ sudo dnf update
$ sudo dnf install nodejs docker-ce
$ fedora-welcome --ready
                
> System Status: OPTIMIZED
> Security: ACTIVE
> Developer Mode: ON`}
          </pre>
        </div>
      </div>
    </div>
  )
}
