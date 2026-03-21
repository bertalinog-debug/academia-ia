import SectionTitle from "./SectionTitle";
import type { Template } from "../../types/home";

type GeneratorSectionProps = {
  subject: string;
  level: string;
  topic: string;
  setSubject: (value: string) => void;
  setLevel: (value: string) => void;
  setTopic: (value: string) => void;
  templates: Template[];
  applyTemplate: (template: Template) => void;
  generateTest: () => void;
  loadingTest: boolean;
  error: string;
  test: string;
  answers: string;
  setAnswers: (value: string) => void;
  correctTest: () => void;
  loadingCorrection: boolean;
  correction: string;
  extractedScore: string | null;
  progressWidth: number;
};

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
      <div className="text-sm font-medium text-white">{title}</div>
      <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
    </div>
  );
}

export default function GeneratorSection({
  subject,
  level,
  topic,
  setSubject,
  setLevel,
  setTopic,
  templates,
  applyTemplate,
  generateTest,
  loadingTest,
  error,
  test,
  answers,
  setAnswers,
  correctTest,
  loadingCorrection,
  correction,
  extractedScore,
  progressWidth,
}: GeneratorSectionProps) {
  return (
    <section id="gerador" className="mx-auto max-w-7xl px-6 py-14 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <SectionTitle
            eyebrow="Gerador de testes"
            title="Cria um teste em segundos"
            description="Escolhe a disciplina, o nível e um tema opcional. A IA gera um teste com 5 perguntas realistas e prontas a responder."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            {templates.map((template) => (
              <button
                key={template.label}
                onClick={() => applyTemplate(template)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
              >
                {template.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-white/70">Disciplina</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ex: Matemática"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-white/70">Nível</label>
              <input
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                placeholder="Ex: 12º ano ou Universidade"
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-white/70">Tema</label>
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Derivadas, genética, direito penal..."
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
              />
            </div>

            <button
              onClick={generateTest}
              disabled={loadingTest || !subject.trim() || !level.trim()}
              className="mt-2 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loadingTest ? "A gerar teste..." : "📄 Gerar teste"}
            </button>

            <p className="text-xs text-white/40">
              Plano grátis inclui 1 teste por dia.
            </p>
          </div>

          {error ? (
            <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <SectionTitle
            eyebrow="Porque isto é valioso"
            title="Não é só um chat. É treino para exame."
            description="Em vez de respostas soltas, o aluno recebe perguntas estruturadas, responde e obtém feedback imediato."
          />

          <div className="mt-6 space-y-4">
            <FeatureCard
              title="1. Gera um teste realista"
              description="Recebes perguntas organizadas para praticar em vez de uma resposta solta."
            />
            <FeatureCard
              title="2. Responde na própria plataforma"
              description="O fluxo é simples, rápido e focado no estudo."
            />
            <FeatureCard
              title="3. Recebe nota e explicação"
              description="O feedback automático cria valor real e mostra onde melhorar."
            />
          </div>
        </div>
      </div>

      {test ? (
        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/50">Teste gerado</p>
                <h2 className="text-2xl font-semibold">Pronto para responder</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
                5 perguntas
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-white/90">
                {test}
              </pre>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="mb-5">
              <p className="text-sm text-white/50">Respostas do aluno</p>
              <h2 className="text-2xl font-semibold">Submete para correção</h2>
            </div>

            <textarea
              value={answers}
              onChange={(e) => setAnswers(e.target.value)}
              placeholder={`Escreve aqui as tuas respostas:

1. ...
2. ...
3. ...
4. ...
5. ...`}
              rows={16}
              className="w-full rounded-3xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
            />

            <button
              onClick={correctTest}
              disabled={loadingCorrection || !answers.trim()}
              className="mt-4 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loadingCorrection ? "A corrigir..." : "📝 Corrigir teste"}
            </button>
          </div>
        </section>
      ) : null}

      {correction ? (
        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm text-white/50">Correção final</p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Resultado do teu teste
              </h2>
            </div>

            <div className="min-w-[180px] rounded-3xl border border-white/10 bg-neutral-900 p-4">
              <p className="text-sm text-white/50">Nota final</p>
              <div className="mt-1 text-3xl font-bold">
                {extractedScore ? `${extractedScore}/20` : "--/20"}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-sm text-white/55">
              <span>Desempenho</span>
              <span>{Math.round(progressWidth)}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-white/90">
              {correction}
            </pre>
          </div>
        </section>
      ) : null}
    </section>
  );
}