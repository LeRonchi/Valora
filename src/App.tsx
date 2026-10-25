import { Button } from "./components/common/button";
import { SectionHeading } from "./components/common/section-heading";
import { ServiceCard } from "./components/common/service-card";
import { SiteLayout } from "./components/layout/site-layout";
import { serviceCategories, siteConfig } from "./lib/site-config";

function App() {
  return (
    <SiteLayout>
      <section className="section-shell py-16">
        <SectionHeading
          eyebrow={siteConfig.tagline}
          title={siteConfig.name}
          description={siteConfig.description}
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Button>Fale pelo WhatsApp</Button>
          <Button variant="outline">Solicite um orçamento</Button>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}

export default App;