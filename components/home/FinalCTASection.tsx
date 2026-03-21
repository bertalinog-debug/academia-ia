type FinalCTASectionProps = {
  onProClick: () => void;
};

export default function FinalCTASection({
  onProClick,
}: FinalCTASectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 text-center md:px-8">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
        <h2 className="text-3xl font-bold md:text-4xl">
          Pronto para subir a tua nota?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-white/65">
          Começa com o plano gratuito ou desbloqueia o Plano Pro para treinar sem
          limites e melhorar mais rápido.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#gerador"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Gerar teste grátis
          </a>

          <button
            onClick={onProClick}
            className="rounded-2xl border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
          >
            Quero Plano Pro
          </button>
        </div>
      </div>
    </section>
  );
}