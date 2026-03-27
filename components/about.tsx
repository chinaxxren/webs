export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              关于我们
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-6">
              值得信赖的企业级语言翻译服务商
            </h2>
            <div className="w-16 h-1 bg-primary mb-8" />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              万言信息科技致力于成为企业级语言服务的可靠合作伙伴，通过稳定、高效的服务方案，帮助中国企业走向世界，在国际市场中获得竞争优势。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              我们的团队汇聚了企业服务领域的专业人才，深入理解外贸企业的实际需求，持续优化产品和服务。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
