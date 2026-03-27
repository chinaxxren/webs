import { Globe, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-6 w-6" />
              <span className="text-xl font-semibold">万言信息科技</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              万言信息科技致力于成为企业级语言服务的可靠合作伙伴，帮助中国企业走向世界。
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Phone className="h-4 w-4" />
              <span>18613680701</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 万言信息科技（济宁）有限公司 版权所有</p>
            <p>鲁ICP备2026012479号</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
