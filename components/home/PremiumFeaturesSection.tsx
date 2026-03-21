import SectionTitle from "./SectionTitle";
import type { Feature } from "../../types/home";

type PremiumFeaturesSectionProps = {
  features: Feature[];
};

export default function PremiumFeaturesSection({
  features,
}: PremiumFeaturesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionTitle
        eyebrow="Funcionalidades Premium"
        title="Leva o teu estudo para outro nível"
        description="Estas funcionalidades estão disponíveis no Plano Pro e ajudam-te a melhorar mais rápido antes dos exames."
        centered
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-neutral-900 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-medium text-white">{feature.title}</h3>
              {feature.badge ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                  {feature.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-6 text-white/60">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}