/**
 * ALLC Dev - Internationalization (i18n) Engine
 * Supported Languages: pt (Português), en (English)
 */

const translations = {
  pt: {
    // Nav
    nav_home: "Início",
    nav_apps: "Aplicativos",
    nav_enterprise: "Corporativo",
    nav_about: "Sobre",
    nav_contact: "Contato",
    nav_play_store: "Google Play",
    nav_install: "Instalar",

    // Hero
    hero_badge: "Estúdio Independente de Software & Arquitetura",
    hero_title: "Engenharia de Software de Alta Precisão & Produtos Mobile",
    hero_subtitle: "Mais de 25 anos projetando arquiteturas de missão crítica corporativas e desenvolvendo o ecossistema de utilitários independentes ALLC Apps.",
    hero_cta_apps: "Explorar Aplicativos",
    hero_cta_enterprise: "Soluções Corporativas",
    hero_cta_youtube: "Canal no YouTube",

    // Stats Bar
    stat_apps: "11 Apps em Produção",
    stat_apps_desc: "Monorepo Flutter & Melos",
    stat_experience: "+25 Anos de Estrada",
    stat_experience_desc: "Arquitetura & Engenharia",
    stat_global: "Alcance Global",
    stat_global_desc: "Usuários em múltiplos países",
    stat_privacy: "100% Offline-First",
    stat_privacy_desc: "Privacidade e respeito aos dados",

    // Apps Section
    apps_title: "Ecossistema ALLC Apps",
    apps_subtitle: "Aplicativos utilitários desenvolvidos com rigor técnico, arquitetura modular, sem anúncios invasivos e com foco absoluto na experiência do usuário.",
    apps_view_catalog: "Ver Catálogo Completo na Google Play Store",
    app_install_btn: "Instalar na Play Store ↗",

    // Apps Info
    app_bible_title: "Bible",
    app_bible_cat: "Livros & Referência",
    app_bible_desc: "Leitor de alta performance com múltiplos bancos de dados bíblicos embutidos e leitura 100% offline.",

    app_bookquest_title: "BookQuest",
    app_bookquest_cat: "Livros & Quiz",
    app_bookquest_desc: "Exploração interativa, desafios de memorização e quizzes estruturados sobre passagens e história.",

    app_chesstime_title: "ChessTime",
    app_chesstime_cat: "Jogos & Tabuleiro",
    app_chesstime_desc: "Relógio digital profissional para torneios de xadrez com controles Fischer, Bronstein e US Delay.",

    app_exactime_title: "ExacTime",
    app_exactime_cat: "Utilidades",
    app_exactime_desc: "Relógio de cabeceira com sintetização de voz nativa (TTS), hora falada e alarmes graduais.",

    app_focodoro_title: "Focodoro",
    app_focodoro_cat: "Produtividade",
    app_focodoro_desc: "Timer Pomodoro por blocos de foco, rótulos de sessão, metas diárias e histórico semanal de evolução.",

    app_habitus_title: "Habitus",
    app_habitus_cat: "Estilo de Vida",
    app_habitus_desc: "Gestão inteligente de hábitos com proteção de sequência contra imprevistos e widgets interativos.",

    app_multicounter_title: "MultiCounter",
    app_multicounter_cat: "Produtividade",
    app_multicounter_desc: "Múltiplos contadores simultâneos, controle de ocupação e lotação em tempo real e contagem em ciclos.",

    app_nexus_title: "Nexus",
    app_nexus_cat: "Treino Cognitivo",
    app_nexus_desc: "15 minijogos lógicos focados em agilidade mental, memória de trabalho e atenção concentrada.",

    app_petlog_title: "Petlog",
    app_petlog_cat: "Cuidados & Saúde",
    app_petlog_desc: "Gestão completa de saúde animal: controle de vacinas, banhos, medicamentos e prontuário veterinário.",

    app_quietude_title: "Quietude",
    app_quietude_cat: "Saúde & Sono",
    app_quietude_desc: "Gerador de ambiência sonora relaxante, mix de ruídos branco/rosa/marrom e áudio contínuo em primeiro plano.",

    app_serena_title: "Serena",
    app_serena_cat: "Saúde & Bem-estar",
    app_serena_desc: "Diário de humor, micro-hábitos e análise de correlações com armazenamento 100% offline e privado.",

    // Enterprise Section
    enterprise_title: "Engenharia Corporativa & Sistemas",
    enterprise_subtitle: "Soluções desenvolvidas para ambientes corporativos complexos, onde estabilidade, segurança e precisão fiscal são inegociáveis.",
    enterprise_erp_title: "ERPs & Automação Comercial",
    enterprise_erp_desc: "Arquitetura completa de frente de caixa (PDV) e retaguarda, conciliação TEF multiprovedor (Stone, PagBank, GetNet) e sincronização resiliente.",
    enterprise_fiscal_title: "Motores Fiscais & Mensageria",
    enterprise_fiscal_desc: "Processamento de documentos eletrônicos de alto volume (NFC-e, NF-e, MDF-e), concentradores distribuídos e barramentos seguros de mensageria.",
    enterprise_ai_title: "IA Aplicada & Agentes Autônomos",
    enterprise_ai_desc: "Desenvolvimento de fluxos inteligentes com agentes de software, visão computacional no dispositivo (Google ML Kit) e automação de rotinas.",

    // Tech Stack Section
    stack_title: "Stack Tecnológica",
    stack_subtitle: "Ferramentas consolidadas e modernas empregadas na construção de software robusto.",
    stack_mobile: "Mobile & Multiplataforma",
    stack_backend: "Backend & Nuvem",
    stack_desktop: "Corporativo & Desktop",
    stack_ai: "DevOps & IA",

    // About Section
    about_badge: "Arquiteto de Software",
    about_h1_title: "Pós-Graduação Especialização Lato Sensu",
    about_h1_desc: "Engenharia de Software para Dispositivos Móveis.",
    about_h2_title: "Filosofia Privacy-First",
    about_h2_desc: "Dados pertencem ao usuário: armazenamento local e zero venda de telemetria.",
    about_h3_title: "Engenharia Baseada em Testes & CI",
    about_h3_desc: "Monorepos automatizados com esteiras de validação e releases consistentes.",
    tag_retail: "Automação Comercial",
    tag_hubs: "Concentradores",
    tag_agents: "Agentes de Código",
    about_title: "Sobre André Costa",
    about_p1: "Arquiteto de Soluções e Desenvolvedor Sênior com trajetória iniciada no ano 2000. Especialista em construir sistemas corporativos de grande porte em Delphi e PHP/Laravel, além de ecossistemas mobile modernos em Flutter.",
    about_p2: "Pós-graduado em Engenharia de Software para Dispositivos Móveis. Acredito em software artesanal de alta qualidade: ferramentas rápidas, sem bloatware, com código testado e total respeito à privacidade do usuário.",
    about_p3: "À frente do estúdio independente ALLC, mantenho 11 aplicativos em produção na Google Play e compartilho conhecimento técnico e bastidores no canal @allc-dev.",

    // Contact Section
    contact_title: "Vamos Conversar",
    contact_subtitle: "Precisa de consultoria em arquitetura de software, quer conhecer mais sobre o ecossistema ALLC ou enviar feedback?",
    contact_email_label: "E-mail Direto",
    contact_whatsapp_label: "WhatsApp Profissional",
    contact_youtube_label: "YouTube Oficial",
    contact_github_label: "GitHub",
    contact_form_name: "Seu Nome",
    contact_form_email: "Seu E-mail",
    contact_form_subject: "Assunto",
    contact_form_msg: "Escreva sua mensagem...",
    contact_btn_email: "Enviar por E-mail",
    contact_btn_whatsapp: "Enviar por WhatsApp",

    // Footer
    footer_privacy: "Política de Privacidade",
    footer_rights: "Todos os direitos reservados. ALLC Dev / André Costa.",
    footer_motto: "Engenharia de software com foco em arquitetura, qualidade e produtos reais."
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_apps: "Apps",
    nav_enterprise: "Enterprise",
    nav_about: "About",
    nav_contact: "Contact",
    nav_play_store: "Google Play",
    nav_install: "Install",

    // Hero
    hero_badge: "Independent Software & Architecture Studio",
    hero_title: "High-Precision Software Architecture & Mobile Products",
    hero_subtitle: "Over 25 years designing mission-critical enterprise architectures and crafting the independent ALLC Apps utility ecosystem.",
    hero_cta_apps: "Explore Applications",
    hero_cta_enterprise: "Enterprise Solutions",
    hero_cta_youtube: "YouTube Channel",

    // Stats Bar
    stat_apps: "11 Production Apps",
    stat_apps_desc: "Flutter & Melos Monorepo",
    stat_experience: "+25 Years Track Record",
    stat_experience_desc: "Architecture & Engineering",
    stat_global: "Global Audience",
    stat_global_desc: "Active users worldwide",
    stat_privacy: "100% Offline-First",
    stat_privacy_desc: "Privacy and data integrity",

    // Apps Section
    apps_title: "ALLC Apps Ecosystem",
    apps_subtitle: "Lightweight utility tools engineered with modular architecture, zero intrusive ads, and an uncompromising focus on user experience.",
    apps_view_catalog: "View Complete Catalog on Google Play Store",
    app_install_btn: "Get on Google Play ↗",

    // Apps Info
    app_bible_title: "Bible",
    app_bible_cat: "Books & Reference",
    app_bible_desc: "High-performance offline Scripture reader with embedded multi-translation SQLite databases and zero telemetry.",

    app_bookquest_title: "BookQuest",
    app_bookquest_cat: "Books & Trivia",
    app_bookquest_desc: "Interactive exploration, memory challenges, and structured quizzes covering Scripture history.",

    app_chesstime_title: "ChessTime",
    app_chesstime_cat: "Board Games",
    app_chesstime_desc: "Professional tournament digital chess clock with Fischer, Bronstein, and US Delay time controls.",

    app_exactime_title: "ExacTime",
    app_exactime_cat: "Utilities",
    app_exactime_desc: "Nightstand clock with native Text-to-Speech (TTS) voice announcements and progressive alarms.",

    app_focodoro_title: "Focodoro",
    app_focodoro_cat: "Productivity",
    app_focodoro_desc: "Block-based Pomodoro focus timer with session tags, daily goals, and weekly progress statistics.",

    app_habitus_title: "Habitus",
    app_habitus_cat: "Lifestyle",
    app_habitus_desc: "Habit tracking with resilient streak protection against unexpected days and interactive home screen widgets.",

    app_multicounter_title: "MultiCounter",
    app_multicounter_cat: "Productivity",
    app_multicounter_desc: "Multi-counter clicker, real-time venue occupancy monitoring, cycle repeats, and tripwire sensors.",

    app_nexus_title: "Nexus",
    app_nexus_cat: "Brain Training",
    app_nexus_desc: "15 logic mini-games designed to enhance working memory, attention, and mental agility.",

    app_petlog_title: "Petlog",
    app_petlog_cat: "Pet Care",
    app_petlog_desc: "Comprehensive animal wellness management: vaccination scheduling, grooming logs, medications, and vet history.",

    app_quietude_title: "Quietude",
    app_quietude_cat: "Health & Sleep",
    app_quietude_desc: "Ambient soundscape generator featuring customizable white/pink/brown noise mixing and foreground audio.",

    app_serena_title: "Serena",
    app_serena_cat: "Health & Wellness",
    app_serena_desc: "Mood journal with statistical correlations, activity check-ins, and 100% private offline storage.",

    // Enterprise Section
    enterprise_title: "Enterprise Engineering & Systems",
    enterprise_subtitle: "Architected for complex enterprise environments where reliability, performance, and transactional integrity are paramount.",
    enterprise_erp_title: "ERPs & Retail Automation",
    enterprise_erp_desc: "Full back-office and Point of Sale (POS) architecture, multi-acquirer EFT/TEF integration (Stone, PagBank, GetNet), and resilient data sync.",
    enterprise_fiscal_title: "Fiscal Engines & Messaging",
    enterprise_fiscal_desc: "High-throughput electronic tax document processing (NFC-e, NF-e, MDF-e), distributed concentrators, and secure messaging buses.",
    enterprise_ai_title: "Applied AI & Autonomous Agents",
    enterprise_ai_desc: "Production AI integration: autonomous agentic software engineering, on-device computer vision (Google ML Kit), and intelligent automation.",

    // Tech Stack Section
    stack_title: "Core Technology Stack",
    stack_subtitle: "Battle-tested and modern technologies used to build durable, scalable software.",
    stack_mobile: "Multi-Platform & Mobile",
    stack_backend: "Backend & Cloud",
    stack_desktop: "Enterprise & Desktop",
    stack_ai: "DevOps & AI Tooling",

    // About Section
    about_badge: "Software Architect",
    about_h1_title: "Postgraduate Specialization",
    about_h1_desc: "Software Engineering for Mobile Devices.",
    about_h2_title: "Privacy-First Philosophy",
    about_h2_desc: "Data belongs to the user: local storage and zero telemetry resale.",
    about_h3_title: "Test-Driven Engineering & CI",
    about_h3_desc: "Automated monorepos with validation pipelines and consistent releases.",
    tag_retail: "Retail Automation",
    tag_hubs: "Fiscal Hubs",
    tag_agents: "Coding Agents",
    about_title: "About André Costa",
    about_p1: "Solutions Architect and Senior Software Engineer with a career spanning over 25 years. Specialist in high-scale corporate software with Delphi and PHP/Laravel, alongside modern Flutter mobile architectures.",
    about_p2: "Postgraduate in Software Engineering for Mobile Devices. I believe in handcrafted, high-quality software: fast utilities, zero bloatware, tested codebases, and deep respect for user privacy.",
    about_p3: "Leading the independent ALLC studio, I actively maintain 11 production apps on Google Play while sharing technical architecture insights on the @allc-dev YouTube channel.",

    // Contact Section
    contact_title: "Let's Connect",
    contact_subtitle: "Looking for software architecture consulting, interested in the ALLC ecosystem, or want to share feedback?",
    contact_email_label: "Direct Email",
    contact_whatsapp_label: "Professional WhatsApp",
    contact_youtube_label: "Official YouTube",
    contact_github_label: "GitHub",
    contact_form_name: "Your Name",
    contact_form_email: "Your Email",
    contact_form_subject: "Subject",
    contact_form_msg: "Write your message here...",
    contact_btn_email: "Send via Email",
    contact_btn_whatsapp: "Send via WhatsApp",

    // Footer
    footer_privacy: "Privacy Policy",
    footer_rights: "All rights reserved. ALLC Dev / André Costa.",
    footer_motto: "Software engineering focused on architecture, craftsmanship, and real-world impact."
  }
};
