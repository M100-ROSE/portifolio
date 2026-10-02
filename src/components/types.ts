export interface TechTag {
  label: string;
  group: "web" | "linguagem" | "hardware" | "visao";
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tags: string[];
  link?: string;
  status: "disponivel" | "em-breve";
}

export interface Contato {
  label: string;
  valor: string;
  href?: string;
}
