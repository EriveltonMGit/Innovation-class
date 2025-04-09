import { Produto } from "../types/produto";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL não está definido nas variáveis de ambiente");
}

export const ApiService = {
  async getProdutos(): Promise<Produto[]> {
    const response = await fetch(`${API_BASE_URL}/produtos`);
    if (!response.ok) {
      throw new Error("Erro ao carregar produtos");
    }
    return await response.json();
  },

  async salvarProduto(produto: Omit<Produto, "id">): Promise<Produto> {
    const response = await fetch(`${API_BASE_URL}/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...produto,
        id: crypto.randomUUID(),
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao salvar produto");
    }

    return await response.json();
  },

  // Adicione outros métodos conforme necessário
};