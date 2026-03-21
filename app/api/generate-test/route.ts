import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { subject, level, topic } = await req.json();

    if (!subject || !level) {
      return NextResponse.json(
        { error: "Disciplina e nível são obrigatórios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY não encontrada." },
        { status: 500 }
      );
    }

    const prompt = `
Cria um teste de ${subject} para o nível ${level}${
      topic ? ` sobre o tema ${topic}` : ""
    }.

Regras:
- 5 perguntas
- mistura perguntas fáceis, médias e difíceis
- formato claro e numerado
- português de Portugal
- não dês respostas
- devolve apenas o teste final, sem texto extra
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content:
              "És um professor rigoroso e claro, especializado em criar testes realistas para estudantes.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "Erro ao gerar teste." },
        { status: response.status }
      );
    }

    const test = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ test });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno ao gerar teste." },
      { status: 500 }
    );
  }
}