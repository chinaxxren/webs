import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest mb-6 opacity-80">
          企业级语言翻译服务商
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-8">
          让全球沟通更加简单高效
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-10">
          在全球贸易不断发展的背景下，语言翻译已经成为企业国际化的重要环节。万言信息科技，帮助企业实现跨语言沟通，降低沟通成本，提高业务效率。
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="group"
        >
          了解更多
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  )
}
