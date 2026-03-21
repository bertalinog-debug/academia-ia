import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { test, answers } = await req.json();

    if (!test || !answers) {
      return NextResponse.json(
        { error: "Teste e respostas são obrigatórios." },
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
Aqui está o teste:
${test}

Aqui estão as respostas do aluno:
${answers}

Corrige o teste.

Regras:
- dá nota final de 0 a 20
- avalia pergunta a pergunta
- marca com ✅ ou ❌
- explica os erros de forma simples
- português de Portugal
- no fim, dá 3 sugestões práticas para melhorar

Formato:
Nota final: X/20

Pergunta 1: ✅ ou ❌
Comentário: ...

Pergunta 2: ✅ ou ❌
Comentário: ...

...

Sugestões de melhoria:
1. ...
2. ...
3. ...
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
              "És um professor exigente, justo e muito claro a corrigir testes.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "Erro ao corrigir teste." },
        { status: response.status }
      );
    }

    const correction = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ correction });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno ao corrigir teste." },
      { status: 500 }
    );
  }
}