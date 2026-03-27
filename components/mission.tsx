import { Target, Eye } from "lucide-react"

export function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="relative p-8 lg:p-12 bg-primary text-primary-foreground rounded-lg">
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 opacity-10">
              <Target className="h-24 w-24" />
            </div>
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest opacity-70 mb-4">
                我们的使命
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
                让全球沟通更加简单高效
              </h3>
              <div className="w-12 h-0.5 bg-primary-foreground/30 mb-6" />
              <p className="text-lg opacity-90 leading-relaxed">
                让企业能够更加专注于业务本身，而不是沟通成本。
              </p>
            </div>
          </div>
          
          {/* Vision */}
          <div className="relative p-8 lg:p-12 bg-card border border-border rounded-lg">
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 opacity-5">
              <Eye className="h-24 w-24 text-foreground" />
            </div>
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                我们的愿景
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
                成为值得信赖的企业级语言翻译服务商
              </h3>
              <div className="w-12 h-0.5 bg-border mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                为中国企业走向世界提供坚实的语言支持，助力企业在国际市场取得成功。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
