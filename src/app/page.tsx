import Image from "next/image";

import { Icon } from "~/components/icons";
import { ProjectCarousel } from "~/components/project-carousel";
import { ScrollReveal } from "~/components/scroll-reveal";
import { SectionHeading } from "~/components/section-heading";
import { SiteHeader } from "~/components/site-header";

const technologies = [
  { name: "HTML", category: "estrutura", mark: "<>" },
  { name: "CSS", category: "interface", mark: "{}" },
  { name: "JavaScript", category: "linguagem", mark: "JS" },
  { name: "TypeScript", category: "linguagem", mark: "TS" },
  { name: "React", category: "interface", mark: "R" },
  { name: "Next.js", category: "full-stack", mark: "N" },
  { name: "Node.js", category: "backend", mark: "N/" },
  { name: "Tailwind CSS", category: "interface", mark: "TW" },
  { name: "MySQL", category: "dados", mark: "SQL" },
  { name: "Git", category: "versionamento", mark: "GIT" },
];

const navLinks = [
  { label: "sobre", href: "#sobre" },
  { label: "tecnologias", href: "#tecnologias" },
  { label: "projetos", href: "#projetos" },
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section id="inicio" className="hero-section section-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <ScrollReveal>
              <p className="hero-kicker">
                <span className="status-dot" />
                Olá, eu sou John
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1>
                Desenvolvedor <span>Full-Stack</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="hero-description">
                Estudante de Ciência da Computação, apaixonado por tecnologia e
                desenvolvimento de software.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="hero-actions">
                <a href="#projetos" className="button button-primary">
                  Ver projetos <Icon name="arrow-up-right" size={18} />
                </a>
                <a href="#contato" className="button button-secondary">
                  Entrar em contato <Icon name="arrow-up-right" size={18} />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div className="hero-socials" aria-label="Redes sociais">
                <span className="hero-socials__label">encontre-me em</span>
                <a
                  href="https://github.com/JsURN"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="GitHub de JsURN"
                >
                  <Icon name="github" size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jsurn/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn de John"
                >
                  <span className="social-link__text-mark">in</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="hero-visual" delay={180}>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-visual__frame">
              <Image
                src="/chibi-programmer-among-stars.png"
                alt="Personagem programando em um notebook, cercado por planetas e estrelas"
                width={1402}
                height={1122}
                priority
                className="hero-illustration"
                sizes="(max-width: 768px) 90vw, 52vw"
              />
            </div>
            <div className="hero-visual__caption">
              <span>01</span>
              <span>desenvolvimento com intenção</span>
            </div>
          </ScrollReveal>
        </div>

        <div className="hero-bottomline">
          <span>scroll para explorar</span>
          <a href="#sobre" aria-label="Rolar até a seção Sobre">
            <Icon name="arrow-down" size={18} />
          </a>
          <span className="hero-bottomline__line" />
        </div>
      </section>

      <section id="sobre" className="content-section section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="01 / sobre mim"
            title="Entre suporte, código e sistemas."
            description="Uma base técnica construída na prática e direcionada para criar produtos web cada vez melhores."
            icon="terminal"
          />
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal className="about-intro" delay={100}>
            <p className="about-lead">
              Minha formação é em Ciência da Computação, com experiência
              profissional em suporte técnico e uma curiosidade constante por
              entender como as coisas funcionam por trás da tela.
            </p>
            <p>
              Troubleshooting, redes, SQL e sistemas fazem parte da minha
              vivência prática. Hoje, esse repertório encontra o desenvolvimento
              web em projetos que unem lógica, clareza e atenção aos detalhes.
            </p>
          </ScrollReveal>

          <ScrollReveal className="about-notes" delay={180}>
            <div className="about-note">
              <span className="about-note__number">A</span>
              <div>
                <strong>Base técnica</strong>
                <p>Diagnóstico, sistemas, redes e dados.</p>
              </div>
            </div>
            <div className="about-note">
              <span className="about-note__number">B</span>
              <div>
                <strong>Modo de construir</strong>
                <p>Aprender, simplificar e iterar com cuidado.</p>
              </div>
            </div>
            <div className="about-note">
              <span className="about-note__number">C</span>
              <div>
                <strong>Próximo passo</strong>
                <p>Transformar ideias em experiências web úteis.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="tecnologias"
        className="content-section section-shell section-muted"
      >
        <ScrollReveal>
          <SectionHeading
            eyebrow="02 / tecnologias"
            title="Ferramentas que fazem parte do processo."
            description="Uma stack que acompanha o trabalho desde a estrutura até a entrega e a manutenção."
            icon="code"
          />
        </ScrollReveal>

        <div className="tech-grid">
          {technologies.map((technology, index) => (
            <ScrollReveal key={technology.name} delay={index * 45}>
              <div className="tech-card">
                <span className="tech-card__mark">{technology.mark}</span>
                <div>
                  <h3>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>
                <Icon
                  name="arrow-up-right"
                  size={16}
                  className="tech-card__arrow"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="projetos" className="content-section section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="03 / projetos selecionados"
            title="Poucos projetos, apresentados com contexto."
            description="Um recorte honesto do que está em construção agora — sem inventar escopo, métricas ou entregas."
            icon="briefcase"
          />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <ProjectCarousel />
        </ScrollReveal>
      </section>

      <section id="contato" className="contact-section section-shell">
        <ScrollReveal className="contact-card">
          <div>
            <p className="section-eyebrow">
              <Icon name="sparkles" size={15} />
              <span>04 / contato</span>
            </p>
            <h2>Vamos construir algo com clareza?</h2>
            <p>
              Você pode acompanhar meu trabalho pelo GitHub ou entrar em contato
              comigo pelo LinkedIn.
            </p>
          </div>
          <div className="contact-actions">
            <a
              href="https://github.com/JsURN"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Abrir GitHub <Icon name="arrow-up-right" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jsurn/"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              Abrir LinkedIn <Icon name="arrow-up-right" size={18} />
            </a>
          </div>
        </ScrollReveal>
      </section>

      <footer className="site-footer section-shell">
        <span>JS / portfolio</span>
        <div className="site-footer__links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <span>feito com intenção</span>
      </footer>
    </main>
  );
}
