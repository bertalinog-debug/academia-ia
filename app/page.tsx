"use client";

import { useMemo, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import GeneratorSection from "../components/home/GeneratorSection";
import PremiumFeaturesSection from "../components/home/PremiumFeaturesSection";
import PricingSection from "../components/home/PricingSection";
import FinalCTASection from "../components/home/FinalCTASection";
import type { Feature, Plan, Template } from "../types/home";

const templates: Template[] = [
  {
    label: "Matemática 12º",
    subject: "Matemática",
    level: "12º ano",
    topic: "Funções, derivadas e trigonometria",
  },
  {
    label: "Biologia 12º",
    subject: "Biologia",
    level: "12º ano",
    topic: "Genética e evolução",
  },
  {
    label: "História A",
    subject: "História",
    level: "12º ano",
    topic: "Estado Novo e século XX",
  },
  {
    label: "Programação",
    subject: "Programação",
    level: "Universidade",
    topic: "Algoritmos e estruturas de dados",
  },
];

const premiumFeatures: Feature[] = [
  {
    title: "Modo exame real",
    description: "Simula exames com tempo limitado e pressão real.",
    badge: "Pro",
  },
  {
    title: "Explicações passo a passo",
    description: "Entende exatamente onde erraste e como corrigir.",
    badge: "Pro",
  },
  {
    title: "Histórico de resultados",
    description: "Acompanha a tua evolução e melhora continuamente.",
    badge: "Pro",
  },
  {
    title: "Testes ilimitados",
    description: "Treina quantas vezes quiseres sem limites diários.",
    badge: "Pro",
  },
];

const plans: Plan[] = [
  {
    name: "Plano Gratuito",
    subtitle: "Para experimentar a plataforma",
    price: "€0",
    features: [
      "1 teste por dia",
      "Correção automática básica",
      "Explicações básicas",
      "Sem histórico",
      "Sem modo exame real",
    ],
    buttonText: "Plano atual",
    current: true,
  },
  {
    name: "Plano Pro",
    subtitle: "Para quem quer resultados reais",
    price: "€9.99",
    priceNote: "/ mês",
    features: [
      "Testes ilimitados",
      "Modo exame completo",
      "Explicações passo a passo",
      "Histórico de resultados",
      "Prioridade nas respostas",
    ],
    buttonText: "🚀 Upgrade para Pro",
    highlighted: true,
    badge: "Mais popular",
  },
];

export default function HomePage() {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [topic, setTopic] = useState("");

  const [test, setTest] = useState("");
  const [answers, setAnswers] = useState("");
  const [correction, setCorrection] = useState("");

  const [loadingTest, setLoadingTest] = useState(false);
  const [loadingCorrection, setLoadingCorrection] = useState(false);
  const [error, setError] = useState("");
  const [showProMessage, setShowProMessage] = useState(false);

  function applyTemplate(template: Template) {
    setSubject(template.subject);
    setLevel(template.level);
    setTopic(template.topic);
    setError("");
  }

  async function generateTest() {
    setLoadingTest(true);
    setError("");
    setTest("");
    setCorrection("");

    try {
      const res = await fetch("/api/generate-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, level, topic }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao gerar teste.");
        return;
      }

      setTest(data.test || "");
    } catch {
      setError("Erro de ligação ao gerar teste.");
    } finally {
      setLoadingTest(false);
    }
  }

  async function correctTest() {
    setLoadingCorrection(true);
    setError("");
    setCorrection("");

    try {
      const res = await fetch("/api/correct-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ test, answers }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao corrigir teste.");
        return;
      }

      setCorrection(data.correction || "");
    } catch {
      setError("Erro de ligação ao corrigir teste.");
    } finally {
      setLoadingCorrection(false);
    }
  }

  const extractedScore = useMemo(() => {
    const match = correction.match(/(\d{1,2}(?:[.,]\d+)?)\s*\/\s*20/);
    return match ? match[1].replace(",", ".") : null;
  }, [correction]);

  const progressWidth = useMemo(() => {
    if (!extractedScore) return 0;
    const value = Number(extractedScore);
    if (Number.isNaN(value)) return 0;
    return Math.max(0, Math.min(100, (value / 20) * 100));
  }, [extractedScore]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <HeroSection />

      <GeneratorSection
        subject={subject}
        level={level}
        topic={topic}
        setSubject={setSubject}
        setLevel={setLevel}
        setTopic={setTopic}
        templates={templates}
        applyTemplate={applyTemplate}
        generateTest={generateTest}
        loadingTest={loadingTest}
        error={error}
        test={test}
        answers={answers}
        setAnswers={setAnswers}
        correctTest={correctTest}
        loadingCorrection={loadingCorrection}
        correction={correction}
        extractedScore={extractedScore}
        progressWidth={progressWidth}
      />

      <PremiumFeaturesSection features={premiumFeatures} />

      <PricingSection
        plans={plans}
        showProMessage={showProMessage}
        onProClick={() => setShowProMessage(true)}
      />

      <FinalCTASection onProClick={() => setShowProMessage(true)} />
    </main>
  );
}