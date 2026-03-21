import SectionTitle from "./SectionTitle";
import type { Plan } from "../../types/home";

type PricingSectionProps = {
  plans: Plan[];
  showProMessage: boolean;
  onProClick: () => void;
};

function PlanCard({
  plan,
  onProClick,
}: {
  plan: Plan;
  onProClick: () => void;
}) {
  const isHighlighted = !!plan.highlighted;

  return (
    <div
      className={
        isHighlighted
          ? "relative rounded-3xl border border-white/20 bg-white p-6 text-black"
          : "rounded-3xl border border-white/10 bg-neutral-900 p-6 text-white"
      }
    >
      {plan.badge ? (
        <div
          className={
            isHighlighted
              ? "absolute -top-3 right-4 rounded-full bg-black px-3 py-1 text-xs text-white"
              : "absolute -top-3 right-4 rounded-full bg-white px-3 py-1 text-xs text-black"
          }
        >
          {plan.badge}
        </div>
      ) : null}

      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className={isHighlighted ? "mt-2 text-sm text-black/60" : "mt-2 text-sm text-white/60"}>
        {plan.subtitle}
      </p>

      <div className="mt-6 text-3xl font-bold">
        {plan.price}
        {plan.priceNote ? (
          <span className={isHighlighted ? "text-sm font-normal text-black/60" : "text-sm font-normal text-white/60"}>
            {" "}
            {plan.priceNote}
          </span>
        ) : null}
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((feature) => {
          const disabled = feature.toLowerCase().includes("sem ");

          return (
            <li
              key={feature}
              className={
                isHighlighted
                  ? "text-black/80"
                  : disabled
                  ? "text-white/40"
                  : "text-white/75"
              }
            >
              {disabled ? "✖ " : "✔ "} {feature}
            </li>
          );
        })}
      </ul>

      {plan.current ? (
        <button className="mt-6 w-full rounded-2xl border border-white/10 py-3 text-sm text-white/80">
          {plan.buttonText}
        </button>
      ) : (
        <button
          onClick={onProClick}
          className="mt-6 w-full rounded-2xl bg-black py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {plan.buttonText}
        </button>
      )}
    </div>
  );
}

export default function PricingSection({
  plans,
  showProMessage,
  onProClick,
}: PricingSectionProps) {
  return (
    <section id="planos" className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
        <SectionTitle
          eyebrow="Plano Premium"
          title="Sobe a tua nota com o Plano Pro"
          description="Mais testes, correções mais inteligentes e treino mais próximo de um exame real."
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} onProClick={onProClick} />
          ))}
        </div>

        {showProMessage ? (
          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/75">
            O Plano Pro fica disponível em breve. Estamos a abrir os primeiros acessos.
          </div>
        ) : null}

        <p className="mt-8 text-center text-xs text-white/40">
          Sem compromisso • Cancela a qualquer momento
        </p>
      </div>
    </section>
  );
}