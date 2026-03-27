import { Building2, ShoppingCart, Factory, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  {
    icon: Building2,
    title: "外贸公司",
  },
  {
    icon: ShoppingCart,
    title: "跨境电商企业",
  },
  {
    icon: Factory,
    title: "制造业出口企业",
  },
  {
    icon: Briefcase,
    title: "国际商务服务机构",
  },
]

export function Clients() {
  return (
    <section id="clients" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            服务客户
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            我们的客户涵盖
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <client.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {client.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
