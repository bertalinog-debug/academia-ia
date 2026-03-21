export default function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
              Plataforma para passar exames com IA
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Passa nos exames com IA
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Gera testes, responde online e recebe nota automática com explicação
              dos erros.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#gerador"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Gerar teste grátis
              </a>

              <a
                href="#planos"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:bg-white/10"
              >
                Ver plano Pro
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold">✔</div>
                <p className="mt-1 text-sm text-white/65">Testes realistas</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold">0–20</div>
                <p className="mt-1 text-sm text-white/65">Nota automática</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold">⚡</div>
                <p className="mt-1 text-sm text-white/65">Feedback imediato</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-[24px] border border-white/10 bg-neutral-900 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Preview do produto</p>
                  <h2 className="text-xl font-semibold">Resultado do aluno</h2>
                </div>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                  Nota 16/20
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/50">Pergunta 1</p>
                  <p className="mt-1 text-sm text-white/85">
                    ✅ Resposta correta. Boa compreensão do conceito.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/50">Pergunta 2</p>
                  <p className="mt-1 text-sm text-white/85">
                    ❌ Erro no cálculo intermédio. A lógica estava quase certa.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/50">Sugestão</p>
                  <p className="mt-1 text-sm text-white/85">
                    Revê exercícios passo a passo durante 15 minutos por dia.
                  </p>
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}