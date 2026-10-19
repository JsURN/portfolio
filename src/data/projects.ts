export type Project = {
  id: string;
  title: string;
  status: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  repository?: string;
};

export const projects: Project[] = [
  {
    id: "eclipse",
    title: "ECLIPSE: Ecos do Abismo",
    status: "em desenvolvimento",
    description:
      "Roguelite 2D em pixel art de fantasia sombria, desenvolvido na Godot 4. O jogo combina exploração de masmorras, combate contra criaturas corrompidas e sistemas de progressão para criar uma experiência de ação e descoberta.",
    technologies: ["Godot 4", "GDScript"],
    image: "/eclipse-project-placeholder.svg",
    imageAlt: "Arte conceitual do projeto ECLIPSE: Ecos do Abismo",
    repository: "https://github.com/JsURN/eclipse-ecos-do-abismo",
  },
  {
    id: "gamemind-ai",
    title: "GameMind AI",
    status: "projeto experimental",
    description:
      "Experimento de inteligência artificial aplicada a ambientes de jogos, explorando a criação de agentes capazes de perceber o mundo virtual, tomar decisões e executar desafios de maneira autônoma. O Minecraft é utilizado como ambiente inicial para explorar navegação, interação e automação.",
    technologies: ["Node.js", "JavaScript", "Mineflayer"],
    image: "/gamemind-ai-concept.png",
    imageAlt:
      "Arte conceitual de um ambiente voxel conectado a um núcleo de inteligência artificial",
  },
  {
    id: "nexus-tasks",
    title: "Nexus Tasks",
    status: "projeto planejado",
    description:
      "Conceito de aplicação full-stack para organização de tarefas e projetos, com foco em produtividade, acompanhamento de atividades e uma experiência de usuário intuitiva. A proposta inclui gerenciamento de prioridades, categorias, estados de conclusão e painéis interativos.",
    technologies: ["React", "TypeScript", "Node.js", "MySQL"],
    image: "/nexus-tasks-concept.png",
    imageAlt:
      "Arte conceitual de um dashboard escuro com tarefas, prioridades e cards de projeto",
  },
];
