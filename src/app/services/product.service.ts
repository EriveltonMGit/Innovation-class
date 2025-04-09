import { Produto } from "../types/produto";

export const salvarProdutoNoServidor = async (produto: Produto): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/produtos`,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...produto,
        id: crypto.randomUUID(),
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Erro ao salvar produto:", error);
    throw new Error("Erro ao conectar com o servidor JSON.");
  }
};
