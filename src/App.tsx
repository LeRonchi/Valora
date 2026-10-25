import { Button } from "./components/common/button";
import { SectionHeading } from "./components/common/section-heading";
import { ServiceCard } from "./components/common/service-card";
import { navigation, serviceCategories, siteConfig } from "./lib/site-config";

function App() {
  return (
    <main className="min-h-screen bg-ink px-8 py-16 text-ink-foreground">
      <SectionHeading
        eyebrow={siteConfig.tagline}
        title={siteConfig.name}
        description={siteConfig.description}
      />

      <nav className="mt-8 flex gap-6">
        {navigation.map((item) => (
          <a key={item.to} href={item.to} className="text-primary hover:underline">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 flex gap-3">
        <Button>Fale pelo WhatsApp</Button>
        <Button variant="outline">Solicite um orçamento</Button>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {serviceCategories.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </main>
  );
}

export default App;