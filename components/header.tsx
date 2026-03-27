"use client"

import { Globe } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-foreground" />
            <span className="text-lg font-semibold text-foreground">万言信息科技</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              关于我们
            </a>
            <a href="#clients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              服务客户
            </a>
            <a href="#mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              使命愿景
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              联系我们
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
