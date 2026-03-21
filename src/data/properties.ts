export interface Property {
  id: string;
  tipo: string;
  classe: 'Média' | 'Média Alta' | 'Investimento' | 'Elite' | 'Património' | 'Exclusivo';
  localizacao: string;
  titulo: string;
  area: string;
  priority: number;
  descricao: string[];
  caracteristicas: string[];
  imagens: {
    principal: string;
    internas: string[];
  };
  tags: string[];
}

export const properties: Property[] = [
  // {
  //   id: "penthouse-liberdade",
  //   tipo: "Apartamento",
  //   classe: "Elite",
  //   localizacao: "Avenida da Liberdade, Lisboa",
  //   titulo: "Penthouse Contemporânea",
  //   area: "280m²",
  //   priority: 2,
  //   descricao: [
  //     "Uma obra-prima da arquitetura moderna situada na artéria mais prestigiada de Lisboa. Esta penthouse oferece uma vista panorâmica inigualável sobre a cidade e o rio Tejo.",
  //     "Com acabamentos em mármore de Estremoz e madeiras nobres, o espaço foi desenhado para maximizar a entrada de luz natural através de janelas do chão ao teto.",
  //     "Privacidade absoluta e segurança 24h num condomínio que é referência de luxo e sofisticação na capital portuguesa."
  //   ],
  //   caracteristicas: [
  //     "Terraço privativo com 150m² e jacuzzi",
  //     "Sistema de domótica de última geração",
  //     "Três lugares de estacionamento com carregamento elétrico",
  //     "Acesso direto por elevador privativo"
  //   ],
  //   imagens: {
  //     principal: "/images/penthouse.png",
  //     internas: [
  //       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
  //       "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200"
  //     ]
  //   },
  //   tags: ["luxo", "vista-rio", "lisboa", "penthouse"]
  // },
  {
    id: "quinta-douro",
    tipo: "Quinta",
    classe: "Património",
    localizacao: "Vale do Douro, Peso da Régua",
    titulo: "Quintas Históricas",
    area: "45.000m²",
    priority: 5,
    descricao: [
      "Localizada no coração da primeira região vinícola demarcada do mundo, esta quinta histórica combina tradição com o conforto contemporâneo.",
      "Os vinhedos em socalcos produzem uvas de castas nobres, mantendo uma produção ativa e premiada de Vinho do Porto e Douro DOC.",
      "A casa senhorial, fielmente restaurada, preserva os detalhes originais do século XVIII, oferecendo uma experiência autêntica e refinada."
    ],
    caracteristicas: [
      "Produção vinícola própria e adega equipada",
      "Frente de rio Douro navegável",
      "Capela histórica restaurada",
      "Potencial para projeto de enoturismo de luxo"
    ],
    imagens: {
      principal: "/images/quinta.png",
      internas: [
        "https://images.unsplash.com/photo-1516483642775-82ed8f79f902?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&q=80&w=1200"
      ]
    },
    tags: ["douro", "vinha", "historico", "investimento"]
  },
  {
    id: "villa-vilamoura",
    tipo: "Moradia",
    classe: "Exclusivo",
    localizacao: "Vilamoura, Algarve",
    titulo: "Villas no Litoral",
    area: "650m²",
    priority: 6,
    descricao: [
      "Situada entre os melhores campos de golfe da Europa e a Marina de Vilamoura, esta villa representa a quintessência da vida no Algarve.",
      "As áreas sociais fluem harmoniosamente para os jardins meticulosamente cuidados e para a piscina infinita que se funde com o horizonte.",
      "Design de interiores assinado por estúdio de renome, focando na serenidade e no uso de materiais naturais da região."
    ],
    caracteristicas: [
      "Primeira linha de golfe",
      "Piscina infinita aquecida",
      "Cozinha de verão e zona de BBQ profissional",
      "Cave ampla com ginásio e cinema privativo"
    ],
    imagens: {
      principal: "/images/villa.png",
      internas: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200"
      ]
    },
    tags: ["algarve", "piscina", "golf", "marina"]
  },
  {
    id: "hotel-gaia",
    tipo: "Hotel & SPA",
    classe: "Investimento",
    localizacao: "Vila Nova de Gaia, Portugal",
    titulo: "Hotel & SPA Premium com Vista Douro",
    area: "3.500m²",
    priority: 7,
    descricao: [
      "Uma oportunidade estratégica de investimento no setor de hospitalidade em plena transformação nas margens do Douro.",
      "O projeto contempla 45 suites premium, um SPA de classe mundial focado em vinoterapia e um restaurante de assinatura com vista para a Ribeira do Porto.",
      "Situado na zona histórica das caves de Vinho do Porto, garantindo um fluxo constante de turismo de alto rendimento durante todo o ano."
    ],
    caracteristicas: [
      "Licenciamento aprovado para hotel 5 estrelas",
      "Vistas panorâmicas sobre o Porto e o Rio Douro",
      "Área de SPA e Wellness com piscina interior",
      "Localização prime em zona de regeneração urbana"
    ],
    imagens: {
      principal: "/images/hotel.png",
      internas: [
        "/images/hotel-recepcao-saguao.png",
        "/images/hotel-quarto.png"
      ]
    },
    tags: ["hotel", "spa", "gaia", "investimento"]
  },
  {
    id: "apto-familia-matosinhos",
    tipo: "Apartamento",
    classe: "Média",
    localizacao: "Matosinhos Sul, Porto",
    titulo: "Apartamento Familiar com Varanda e Proximidade à Praia",
    area: "145m²",
    priority: 1,
    descricao: [
      "Situado no coração de Matosinhos Sul, este apartamento destaca-se pela sua planta funcional e pela excelente exposição solar. Ideal para famílias que procuram um estilo de vida prático, a curta distância de escolas, supermercados e da marginal marítima.",
      "O imóvel foi recentemente renovado com foco no conforto térmico e acústico, apresentando janelas de vidro duplo e aquecimento central. A sala comum é ampla e estende-se para uma varanda generosa, perfeita para momentos de lazer ao final do dia.",
      "A zona envolvente oferece uma rede completa de transportes públicos, incluindo estação de metro a 5 minutos a pé, facilitando o acesso ao centro do Porto e ao aeroporto, mantendo simultaneamente a tranquilidade de um bairro residencial."
    ],
    caracteristicas: [
      "Cozinha totalmente equipada com eletrodomésticos de classe A+",
      "Dois lugares de garagem e arrecadação individual",
      "Varanda privativa com orientação Sul-Poente",
      "Proximidade a pé da Praia de Matosinhos e do Parque da Cidade"
    ],
    imagens: {
      principal: "/images/matosinhos-facade.png",
      internas: [
        "/images/matosinhos-sala.png",
        "/images/matosinhos-cozinha.png",
        "/images/matosinhos-garagem.png"
      ]
    },
    tags: ["garagem", "varanda", "elevador", "proximo-ao-metro"]
  },
  {
    id: "moradia-contemporanea-cascais",
    tipo: "Moradia Geminada",
    classe: "Média Alta",
    localizacao: "Bairro do Rosário, Cascais",
    titulo: "Moradia Minimalista com Design de Autor e Acabamentos Premium",
    area: "320m²",
    priority: 4,
    descricao: [
      "Esta moradia unifamiliar reflete o melhor da arquitetura contemporânea portuguesa, com linhas simples e grandes vãos envidraçados que fundem o interior com o jardim privativo. Localizada numa das zonas mais exclusivas de Cascais, garante privacidade e prestígio.",
      "O design foca-se na fluidez dos espaços, apresentando uma zona social em open-space com pé-direito duplo que realça a luminosidade natural. Os materiais selecionados, desde a pedra natural ao soalho em madeira de carvalho, conferem um toque de luxo discreto.",
      "Equipada com as mais recentes tecnologias de domótica e eficiência energética, a propriedade inclui um sistema de climatização invisível e painéis solares integrados, assegurando um impacto ambiental reduzido sem comprometer o conforto sofisticado."
    ],
    caracteristicas: [
      "Suite Master com closet e terraço privativo",
      "Piscina de transbordo com tratamento a sal",
      "Sistema de domótica avançado (luzes, som e segurança)",
      "Certificação energética A+ e acabamentos de alta gama"
    ],
    imagens: {
      principal: "/images/cascais-jardim.png",
      internas: [
        "/images/cascais-sala.png",
        "/images/cascais-garagem.png"
      ]
    },
    tags: ["piscina", "domotica", "suite", "jardim-privativo"]
  },
  {
    id: "moradia-colonial-sintra",
    tipo: "Moradia",
    classe: "Património",
    localizacao: "Colares, Sintra",
    titulo: "Moradia de Traça Colonial com Jardins Centenários",
    area: "420m²",
    priority: 3,
    descricao: [
      "Um exemplar magnífico da arquitetura luso-brasileira de finais do século XIX, este solar em Colares transporta-nos para uma era de elegância e sofisticação tropical. A moradia destaca-se pelos seus pés-direitos generosos e pelas janelas de sacada que inundam os interiores de luz.",
      "O restauro cuidadoso preservou os azulejos originais pintados à mão e os estuques ornamentados, integrando discretamente o conforto moderno. A sala principal, de proporções imperiais, abre-se para uma varanda corrida com vista sobre as matas da Serra de Sintra.",
      "Inserida num lote com jardins maduros repletos de espécies exóticas, camélias e buganvílias, a propriedade oferece uma privacidade total num dos microclimas mais frescos e prestigiados de Portugal, a poucos minutos das praias de Cascais."
    ],
    caracteristicas: [
      "Jardins de traça romântica com espécies centenárias",
      "Pinturas murais e azulejos de época preservados",
      "Pé-direito de 4 metros nas áreas sociais",
      "Lote de 2.500m² com total privacidade e vista serra"
    ],
    imagens: {
      principal: "/images/colonial-fachada.png",
      internas: [
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1510129753123-097c5f87b328?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200"
      ]
    },
    tags: ["colonial", "sintra", "historico", "solar"]
  },
  {
    id: "terreno-expansao-braga",
    tipo: "Terreno",
    classe: "Investimento",
    localizacao: "Gualtar, Braga",
    titulo: "Lote de Terreno Plano com Viabilidade de Construção Imediata",
    area: "600m²",
    priority: 8,
    descricao: [
      "Excelente oportunidade de investimento numa das zonas de maior expansão de Braga. Este terreno plano de 600m² possui todas as infraestruturas concluídas, permitindo o início do licenciamento ou construção de forma célere e sem imprevistos.",
      "Localizado próximo do pólo universitário e de centros tecnológicos, o lote oferece uma topografia perfeita que reduz significativamente os custos de terraplenagem e fundações, maximizando a rentabilidade do projeto de construção.",
      "A zona é servida por novos arruamentos, iluminação LED e fibra ótica, estando inserida num loteamento moderno que privilegia as áreas verdes e o distanciamento entre lotes, garantindo qualidade de vida futura aos moradores."
    ],
    caracteristicas: [
      "Topografia 100% plana facilitadora de obra",
      "Infraestruturas completas (água, luz e saneamento)",
      "Índice de construção favorável para moradia unifamiliar",
      "Localização estratégica em zona de valorização crescente"
    ],
    imagens: {
      principal: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      internas: [
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200"
      ]
    },
    tags: ["construcao-imediata", "vista-desafogada", "topografia-plana", "investimento"]
  }
];
