// src/app/data/departamentos.ts

// Interface para representar uma Categoria com nome e rota
export interface Categoria {
  nome: string;
  rota: string;
}

// Interface para representar um Departamento com nome, rota e uma lista de categorias
export interface Departamento {
  nome: string;
  rota: string;
  categorias: Categoria[];
}

// Função auxiliar para gerar categorias com rotas específicas e extras para cada departamento
const gerarCategoriasPersonalizadas = (
  departamentoSlug: string,
  rotasExtras: { nome: string; rota: string }[]
): Categoria[] => [
  ...rotasExtras.map((item) => ({ nome: "Categoria", rota: item.rota })),
  ...Array.from({ length: 26 }, (_, i) => ({
    nome: "Categoria",
    rota: `/departamento/${departamentoSlug}/categoria-${i + rotasExtras.length + 1}`,
  })),
];

// Lista de departamentos com categorias personalizadas
export const departamentosMockTwo: Departamento[] = [
  {
    nome: "Departamento",
    rota: "/departamento/smartphones",
    categorias: gerarCategoriasPersonalizadas("smartphones", [
      { nome: "Categoria", rota: "" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/tvs",
    categorias: gerarCategoriasPersonalizadas("tvs", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/fones",
    categorias: gerarCategoriasPersonalizadas("fones", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/notebooks",
    categorias: gerarCategoriasPersonalizadas("notebooks", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/games",
    categorias: gerarCategoriasPersonalizadas("games", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/tablets",
    categorias: gerarCategoriasPersonalizadas("tablets", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/perifericos",
    categorias: gerarCategoriasPersonalizadas("perifericos", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/acessorios",
    categorias: gerarCategoriasPersonalizadas("acessorios", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
  {
    nome: "Departamento",
    rota: "/departamento/smartwatches",
    categorias: gerarCategoriasPersonalizadas("smartwatches", [
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
      { nome: "Categoria", rota: "https://ic.penseavanti.com.br/mod/page/view.php?id=51" },
    ]),
  },
];
