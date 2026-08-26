import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  Globe2,
  Layers3,
  LayoutTemplate,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MoveRight,
  PenTool,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Tablet,
  X,
  Zap,
} from 'lucide-react';

const whatsappLink = 'https://wa.me/5521966265318?text=Ol%C3%A1%2C%20quero%20criar%20meu%20site%20com%20a%20FrontDsigner.';

const audiences = [
  { name: 'Contadores', icon: BarChart3 },
  { name: 'Dentistas', icon: Sparkles },
  { name: 'Advogados', icon: BriefcaseBusiness },
  { name: 'Psicólogos', icon: BrainCircuit },
  { name: 'Arquitetos', icon: PenTool },
  { name: 'Engenheiros', icon: Layers3 },
  { name: 'Consultores', icon: Compass },
  { name: 'Prestadores de serviços', icon: Globe2 },
];

const faqs = [
  ['O site tem mensalidade?', 'O desenvolvimento possui pagamento único, definido de acordo com o projeto. Domínio, serviços externos ou necessidades adicionais podem ter custos separados.'],
  ['O site funciona no celular?', 'Sim. Cada projeto é pensado para funcionar bem em computadores, tablets e smartphones, com uma experiência clara em qualquer tela.'],
  ['Vocês fazem o domínio?', 'Podemos auxiliar você na configuração do domínio quando necessário. A contratação e a renovação do domínio ficam separadas do desenvolvimento.'],
  ['Posso colocar meu WhatsApp?', 'Sim. O WhatsApp pode aparecer em botões estratégicos e chamadas de contato para tornar o caminho até você mais simples.'],
  ['O site aparece no Google?', 'O projeto pode receber uma estrutura básica de SEO. O posicionamento orgânico depende de diversos fatores e não pode ser garantido.'],
  ['Posso solicitar alterações?', 'Sim. As alterações são definidas de acordo com o escopo contratado para que o projeto tenha clareza do início à entrega.'],
  ['Posso ter mais de uma página?', 'Sim. A FrontDsigner trabalha principalmente com sites institucionais e landing pages, mas o número de páginas pode variar conforme a necessidade.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="FrontDsigner início">
            <span className="brand-mark"><span /></span>
            <span>Front<span>D</span>signer</span>
          </a>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
            <a href="#processo" onClick={closeMenu}>Como funciona</a>
            <a href="#vantagens" onClick={closeMenu}>Vantagens</a>
            <a href="#para-quem" onClick={closeMenu}>Para quem é</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-mobile-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>Quero meu site <ArrowUpRight size={15} /></a>
          </nav>
          <a className="button button-small header-cta" href={whatsappLink} target="_blank" rel="noreferrer">Quero meu site <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-line" /> presença digital sem complicação</div>
              <h1>Seu negócio merece mais do que um <em>cartão de visita</em> digital.</h1>
              <p className="hero-subtitle">Tenha um site profissional, rápido e preparado para gerar confiança — com pagamento único e sem mensalidade.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">Quero meu site <MoveRight size={17} /></a>
                <a className="text-link" href="#processo">Ver como funciona <ArrowDown size={16} /></a>
              </div>
              <div className="hero-proof"><span className="status-dot" /> Feito para profissionais que valorizam o próprio trabalho</div>
            </div>
            <div className="hero-visual reveal-up delay-1">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="hero-image-wrap">
                <img src="/images/hero/Hero-gemini.jpg" alt="Cidade iluminada representando presença digital" />
                <div className="image-overlay" />
                <div className="floating-label label-top"><span className="label-icon"><Zap size={14} /></span><div><strong>Rápido de carregar</strong><small>Experiência que não espera</small></div></div>
                <div className="floating-label label-bottom"><span className="label-icon"><Smartphone size={14} /></span><div><strong>Feito para qualquer tela</strong><small>Desktop, tablet e celular</small></div></div>
                <div className="hero-image-caption"><span>FRONTDSIGNER / 2026</span><span>01 — 04</span></div>
              </div>
              <div className="hero-side-stat"><span className="stat-number">01</span><span className="stat-line" /><span>presença<br />que posiciona</span></div>
            </div>
          </div>
          <div className="container hero-scroll"><span>Role para explorar</span><div className="scroll-line" /></div>
        </section>

        <section className="marquee-section" aria-label="Características">
          <div className="marquee-track"><span>design que comunica</span><i>✦</i><span>performance sem excessos</span><i>✦</i><span>pagamento único</span><i>✦</i><span>design que comunica</span><i>✦</i><span>performance sem excessos</span><i>✦</i></div>
        </section>

        <section className="section problem-section">
          <div className="container split-heading">
            <div><span className="section-kicker">01 / o ponto de partida</span><h2>Seu cliente pesquisa antes de <em>entrar em contato.</em></h2></div>
            <p>Hoje, ter apenas Instagram ou WhatsApp pode não ser suficiente para transmitir autoridade. Um site profissional funciona como sua base digital: apresenta seu trabalho, seus serviços e oferece um caminho simples para falar com você.</p>
          </div>
          <div className="container feature-grid">
            {[
              [BadgeCheck, 'Credibilidade', 'Apresente seu negócio de forma profissional e mostre por que seu trabalho merece confiança.'],
              [Globe2, 'Presença digital', 'Tenha um endereço próprio na internet para apresentar seus serviços com clareza.'],
              [MessageCircle, 'Conversão', 'Facilite o contato pelo WhatsApp e transforme interesse em uma conversa real.'],
            ].map(([Icon, title, text], index) => {
              const FeatureIcon = Icon as typeof BadgeCheck;
              return <article className="feature-card" key={title as string}><span className="feature-index">0{index + 1}</span><FeatureIcon size={23} strokeWidth={1.5} /><h3>{title as string}</h3><p>{text as string}</p><ArrowUpRight className="card-arrow" size={19} /></article>;
            })}
          </div>
        </section>

        <section className="section showcase-section" id="vantagens">
          <div className="container">
            <div className="section-heading-row"><div><span className="section-kicker">02 / o que entregamos</span><h2>Veja como seu negócio pode ser <em>apresentado.</em></h2></div><p>Estruturas sob medida para profissionais que precisam parecer tão bons na tela quanto são no trabalho.</p></div>
            <div className="showcase-grid">
              <article className="showcase-card showcase-large"><div className="showcase-meta"><span>01 / contabilidade</span><span>institucional</span></div><img src="/images/mockups/mockup_contabilidade.png" alt="Mockup de site para escritório de contabilidade" loading="lazy" /><div className="showcase-footer"><h3>Clareza para decisões importantes.</h3><span className="round-arrow"><ArrowUpRight size={16} /></span></div></article>
              <article className="showcase-card showcase-tall"><div className="showcase-meta"><span>02 / portfólio</span><span>serviços</span></div><img src="/images/mockups/mockup-port1.png" alt="Mockup de site profissional em notebook e celular" loading="lazy" /><div className="showcase-footer"><h3>Seu trabalho, no lugar certo.</h3><span className="round-arrow"><ArrowUpRight size={16} /></span></div></article>
            </div>
            <div className="showcase-bottom"><span>Contador / Dentista / Advogado / Arquiteto / Psicólogo</span><a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-outline">Quero um site assim <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="container">
            <div className="section-heading-row"><div><span className="section-kicker">03 / sem complicação</span><h2>Do primeiro contato ao <em>site publicado.</em></h2></div><p>Um processo transparente, com decisões compartilhadas e foco no que realmente importa para o seu negócio.</p></div>
            <div className="process-list">
              {[['01', 'Conversa', 'Entendemos seu negócio, seu público e os objetivos que você quer alcançar.'], ['02', 'Estrutura', 'Definimos conteúdo, seções e uma estrutura que faça sentido para quem visita.'], ['03', 'Desenvolvimento', 'O site é desenvolvido com foco em velocidade, responsividade e experiência.'], ['04', 'Publicação', 'Após sua aprovação, o site é publicado e entregue para você.']].map(([number, title, text]) => <article className="process-item" key={number}><span className="process-number">{number}</span><div className="process-dot" /><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="process-arrow" size={18} /></article>)}
            </div>
          </div>
        </section>

        <section className="section tech-section">
          <div className="container tech-grid"><div><span className="section-kicker">04 / por trás da experiência</span><h2>Um site mais leve <em>por trás da experiência.</em></h2><p>Depois de desenvolvido, o site pode ser publicado utilizando uma arquitetura otimizada para entregar apenas os arquivos necessários ao visitante. Isso reduz a dependência de sistemas complexos e permite uma experiência mais rápida e eficiente.</p><span className="fine-print">Tecnologia utilizada conforme o projeto e as necessidades do cliente.</span></div><div className="tech-visual"><div className="tech-square square-one" /><div className="tech-square square-two" /><div className="tech-code"><span>&lt;presence</span><span className="code-indent">digital <b>/&gt;</b></span><span className="code-muted">// leve por natureza</span></div><div className="tech-tag"><Code2 size={17} /> estrutura otimizada</div></div></div>
          <div className="container tech-benefits">{[['Mais velocidade', 'Arquivos leves e carregamento otimizado.'], ['Mais segurança', 'Menor dependência de sistemas dinâmicos expostos.'], ['Mais estabilidade', 'Uma estrutura simples e eficiente.']].map(([title, text]) => <div key={title}><span className="benefit-check"><Check size={14} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </section>

        <section className="section benefits-section">
          <div className="container"><div className="section-heading-row"><div><span className="section-kicker">05 / uma escolha inteligente</span><h2>Por que escolher um site <em>FrontDsigner?</em></h2></div></div><div className="benefits-grid">{[['Pagamento único', 'Você paga pelo desenvolvimento do projeto, sem mensalidade obrigatória pelo site.', Clock3], ['Rápido', 'Estrutura otimizada para oferecer boa velocidade de carregamento.', Zap], ['Responsivo', 'Seu site funciona em computador, tablet e celular.', MonitorSmartphone], ['SEO básico', 'Estrutura preparada para mecanismos de busca.', BarChart3], ['WhatsApp', 'Botões e chamadas para facilitar o contato.', MessageCircle], ['Design profissional', 'Layout desenvolvido de acordo com o segmento do negócio.', LayoutTemplate]].map(([title, text, Icon]) => { const BenefitIcon = Icon as typeof Clock3; return <article className="benefit-card" key={title as string}><BenefitIcon size={21} strokeWidth={1.5} /><h3>{title as string}</h3><p>{text as string}</p></article>; })}</div></div>
        </section>

        <section className="section audience-section" id="para-quem"><div className="container audience-grid"><div><span className="section-kicker">06 / feito para você</span><h2>Seu negócio <em>está aqui?</em></h2><p>Se o seu negócio depende de confiança para conquistar clientes, um site profissional pode ser uma das peças mais importantes da sua presença digital.</p><a href={whatsappLink} target="_blank" rel="noreferrer" className="text-link text-link-gold">Quero conversar sobre meu projeto <ArrowUpRight size={16} /></a></div><div className="audience-list">{audiences.map(({ name, icon: Icon }) => <div className="audience-item" key={name}><Icon size={17} /><span>{name}</span><ArrowUpRight size={15} /></div>)}</div></div></section>

        <section className="section compare-section"><div className="container"><div className="section-heading-row"><div><span className="section-kicker">07 / uma decisão mais simples</span><h2>Menos dependência. <em>Mais autonomia.</em></h2></div><p>Uma comparação de posicionamento para você entender o que muda quando o projeto é pensado para ser leve desde o início.</p></div><div className="compare-grid"><div className="compare-card compare-muted"><span className="compare-label">modelo recorrente</span><h3>Site tradicional com manutenção</h3><ul><li>Mensalidades e custos recorrentes</li><li>Estrutura mais complexa</li><li>Dependência de atualizações</li><li>Mais pontos de manutenção</li></ul></div><div className="compare-card compare-highlight"><span className="compare-label">a escolha FrontDsigner</span><h3>Site profissional com pagamento único</h3><ul><li>Pagamento único pelo desenvolvimento</li><li>Estrutura otimizada</li><li>Site rápido e responsivo</li><li>Publicação moderna e eficiente</li></ul><a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-primary">Quero meu site <ArrowUpRight size={16} /></a></div></div></div></section>

        <section className="offer-section"><div className="container offer-inner"><div><span className="section-kicker">08 / pronto para começar</span><h2>Tenha seu site profissional sem transformar isso em mais uma <em>despesa mensal.</em></h2><p>Uma página profissional para apresentar seu negócio, seus serviços e facilitar o contato com seus clientes.</p></div><div className="offer-list">{['Design profissional', 'Layout responsivo', 'Estrutura otimizada', 'SEO básico', 'Integração com WhatsApp', 'Publicação do site', 'Configuração inicial'].map(item => <span key={item}><Check size={14} />{item}</span>)}<a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-light">Quero meu site <MoveRight size={17} /></a><small>Domínio, serviços de terceiros e recursos adicionais podem ter custos próprios.</small></div></div></section>

        <section className="section about-section" id="sobre"><div className="container about-grid"><div className="about-photo"><div className="photo-frame"><div className="avatar-placeholder">RB</div></div><span>RICARDO BELCHIOR<br /><b>FRONTDSIGNER</b></span></div><div className="about-copy"><span className="section-kicker">09 / por trás da marca</span><h2>Quem está por trás da <em>FrontDsigner.</em></h2><p>Sou Ricardo Belchior e estou construindo minha atuação profissional na área de criação de sites e presença digital.</p><p>Minha formação complementar inclui cursos de Design Gráfico e Inteligência Artificial pela Escola Virtual da Fundação Bradesco, além de conhecimentos em HTML e CSS e desenvolvimento de projetos para web.</p><p>Meu objetivo com a FrontDsigner é ajudar profissionais e pequenos negócios a terem uma presença digital profissional, objetiva e acessível.</p><div className="about-signature">Ricardo Belchior <span>— criando presenças que fazem sentido</span></div></div></div></section>

        <section className="section faq-section" id="faq"><div className="container faq-grid"><div><span className="section-kicker">10 / respostas diretas</span><h2>Perguntas <em>frequentes.</em></h2><p>Se ainda ficou alguma dúvida, fale diretamente comigo pelo WhatsApp.</p><a href={whatsappLink} target="_blank" rel="noreferrer" className="text-link text-link-gold">Falar com Ricardo <ArrowUpRight size={16} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? 'faq-item is-open' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={17} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

        <section className="final-cta"><div className="container final-cta-inner"><span className="section-kicker">11 / seu próximo passo</span><h2>Seu próximo cliente pode estar procurando por você <em>agora.</em></h2><p>Tenha uma presença digital profissional para apresentar seu trabalho e facilitar o contato com seus clientes.</p><div className="final-actions"><a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-light">Quero criar meu site <MoveRight size={17} /></a><a href={whatsappLink} target="_blank" rel="noreferrer" className="text-link">Falar pelo WhatsApp <MessageCircle size={16} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div><a className="brand" href="#inicio"><span className="brand-mark"><span /></span><span>Front<span>D</span>signer</span></a><p>Sites profissionais para negócios que precisam estar presentes na internet.</p></div><div className="footer-nav"><a href="#inicio">Início</a><a href="#processo">Como funciona</a><a href="#vantagens">Vantagens</a><a href="#sobre">Sobre</a><a href="#faq">FAQ</a><a href={whatsappLink} target="_blank" rel="noreferrer">Contato <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© 2026 FrontDsigner. Todos os direitos reservados.</span><span>presença digital com intenção <span className="footer-dot">✦</span></span></div></footer>
    </div>
  );
}

export default App;
