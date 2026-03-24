export interface Property {
  id: string;
  tipo: string;
  classe: 'Média' | 'Média Alta' | 'Investimento' | 'Elite' | 'Património' | 'Exclusivo';
  localizacao: string;
  titulo: string;
  subtitulo: string;
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
  //   id: "penthouse-contemporanea",
  //   tipo: "Apartamento",
  //   classe: "Elite",
  //   localizacao: "Avenida da Liberdade, Lisboa",
  //   titulo: "Penthouse Contemporânea",
  //   subtitulo: "Exclusividade e vista panorâmica",
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
    id: "quinta-historica",
    tipo: "Quintas",
    classe: "Património",
    localizacao: "Portugal",
    titulo: "Quintas Históricas",
    subtitulo: "Tradição, Património e Exclusividade",
    area: "5.000m² - 50.000m²",
    priority: 5,
    descricao: [
      "Apresentamos uma seleção de quintas históricas, verdadeiros refúgios de charme e autenticidade, onde o tempo se preserva na arquitetura, na paisagem e na identidade de cada propriedade.",
      "Com origens que remontam a diferentes épocas, estas quintas destacam-se pelo seu valor patrimonial, integrando elementos únicos como casas senhoriais, detalhes arquitetónicos de época, capelas, adegas e extensos jardins ou terrenos envolventes.",
      "Os espaços exteriores, muitas vezes marcados por árvores centenárias, vinhas, pomares ou áreas agrícolas, oferecem uma envolvente de rara beleza, ideal para quem procura tranquilidade, privacidade e ligação à natureza.",
      "Cada propriedade possui características singulares, com potencial para habitação privada, projetos turísticos ou investimento diferenciado, preservando sempre o seu caráter histórico e a sua identidade original.",
      "Se procura um imóvel com história, alma e um elevado potencial de valorização, estas quintas representam uma oportunidade única.",
      "Para mais informações, estamos ao dispor."
    ],
    caracteristicas: [
      "Curadoria de Ativos Selecionados",
      "Abordagem Personalizada ao Seu Perfil",
      "Foco na Qualidade e Valorização",
      "Acesso a Oportunidades Exclusivas"
    ],
    imagens: {
      principal: "/images/quinta.png",
      internas: [
        "/images/quinta-douro-1.png",
        "/images/quinta-douro-2.png",
        "/images/quinta-douro-3.png"
      ]
    },
    tags: ["quinta", "historico", "patrimonio", "exclusividade"]
  },
  {
    id: "vila-litoral",
    tipo: "Vilas",
    classe: "Exclusivo",
    localizacao: "Portugal",
    titulo: "Vilas no Litoral",
    subtitulo: "Qualidade de Vida Entre o Mar e o Conforto",
    area: "180m² - 450m²",
    priority: 6,
    descricao: [
      "Apresentamos uma seleção de vilas localizadas em zonas costeiras privilegiadas, ideais para quem valoriza a proximidade ao mar, a tranquilidade e um estilo de vida mais leve e equilibrado.",
      "Com diferentes tipologias e características, estas propriedades oferecem soluções que vão desde opções mais contemporâneas e funcionais até vilas com maior dimensão e espaços exteriores generosos, perfeitos para momentos de lazer e convívio.",
      "A proximidade às praias, aliada a boas acessibilidades e à presença de comércio, restauração e serviços, proporciona uma vivência prática, sem abdicar do contacto diário com a natureza e o ambiente marítimo.",
      "Seja para residência permanente, casa de férias ou investimento, estas vilas representam uma excelente oportunidade para desfrutar do melhor que o litoral tem para oferecer.",
      "Para mais informações, estamos ao dispor."
    ],
    caracteristicas: [
      "Curadoria de Ativos Selecionados",
      "Abordagem Personalizada ao Seu Perfil",
      "Foco na Qualidade e Valorização",
      "Acesso a Oportunidades Exclusivas"
    ],
    imagens: {
      principal: "/images/vila.png",
      internas: [
        "/images/vila-litoral-1.png",
        "/images/vila-litoral-2.png",
        "/images/vila-litoral-3.png",
        "/images/vila-litoral-4.png"
      ]
    },
    tags: ["vilas", "litoral", "mar", "conforto"]
  },
  {
    id: "hotel-spa",
    tipo: "Hoteis & Spas",
    classe: "Investimento",
    localizacao: "Portugal",
    titulo: "Hotéis e Spas exclusivos",
    subtitulo: "Sofisticação, bem-estar e investimento de excelência",
    area: "1.500m² - 5.000m²",
    priority: 7,
    descricao: [
      "Apresentamos uma seleção de hotéis e spas exclusivos, concebidos para proporcionar experiências únicas de conforto, requinte e bem-estar.",
      "Estes empreendimentos distinguem-se pela sua identidade própria, combinando arquitetura cuidada, design elegante e uma oferta de serviços orientada para a excelência. Os espaços são pensados ao detalhe, criando ambientes que privilegiam o relaxamento, a privacidade e a experiência sensorial.",
      "As unidades de alojamento, aliadas a áreas de spa, wellness e lazer, oferecem um conceito integrado que valoriza a tranquilidade e o equilíbrio, muitas vezes inserido em localizações de grande beleza natural ou em contextos urbanos de prestígio.",
      "Com forte potencial no setor do turismo de qualidade, estes ativos representam oportunidades sólidas tanto para exploração hoteleira como para investimento, acompanhando a crescente procura por experiências diferenciadas e exclusivas.",
      "Se procura um projeto que una rentabilidade, prestígio e conceito, teremos todo o gosto em apresentar-lhe as melhores oportunidades.",
      "Para mais informações, estamos ao dispor."
    ],
    caracteristicas: [
      "Curadoria de Ativos Selecionados",
      "Abordagem Personalizada ao Seu Perfil",
      "Foco na Qualidade e Valorização",
      "Acesso a Oportunidades Exclusivas"
    ],
    imagens: {
      principal: "/images/hotel.png",
      internas: [
        "/images/hotel-recepcao-saguao.png",
        "/images/hotel-quarto.png"
      ]
    },
    tags: ["hotel", "spa", "investimento", "exclusividade"]
  },
  {
    id: "apartamento-familia",
    tipo: "Apartamentos",
    classe: "Média",
    localizacao: "Portugal",
    titulo: "Apartamentos Selecionados",
    subtitulo: "Diversidade, qualidade e oportunidade",
    area: "80m² - 250m²",
    priority: 1,
    descricao: [
      "Apresentamos uma seleção de apartamentos com diferentes tipologias, localizações e características, pensados para responder às mais variadas necessidades e estilos de vida.",
      "Dispomos de imóveis que vão desde soluções mais compactas e funcionais até apartamentos mais amplos e sofisticados, inseridos em zonas distintas, quer em áreas mais centrais e dinâmicas, quer em locais mais tranquilos e residenciais.",
      "Cada imóvel apresenta características próprias, oferecendo diferentes opções ao nível de áreas, distribuição, exposição solar e envolvente, permitindo encontrar a solução mais adequada para habitação própria ou investimento.",
      "Se procura um apartamento que se enquadre no seu perfil e nas suas expectativas, teremos todo o gosto em ajudá-lo a encontrar a opção certa.",
      "Para mais informações, estamos ao dispor."
    ],
    caracteristicas: [
      "Curadoria de Ativos Selecionados",
      "Abordagem Personalizada ao Seu Perfil",
      "Foco na Qualidade e Valorização",
      "Acesso a Oportunidades Exclusivas"
    ],
    imagens: {
      principal: "/images/matosinhos-facade.png",
      internas: [
        "/images/matosinhos-sala.png",
        "/images/matosinhos-cozinha.png",
        "/images/matosinhos-garagem.png"
      ]
    },
    tags: ["apartamento", "qualidade", "investimento", "diversidade"]
  },
  {
    id: "moradia-contemporanea",
    tipo: "Vivendas",
    classe: "Média Alta",
    localizacao: "Portugal",
    titulo: "Vivendas Contemporâneas",
    subtitulo: "Design, exclusividade e sofisticação",
    area: "200m² - 500m²",
    priority: 4,
    descricao: [
      "Apresentamos uma seleção de moradias de arquitetura contemporânea, marcadas por um design minimalista e pela assinatura de autores que privilegiam a estética, a funcionalidade e a harmonia com o espaço envolvente.",
      "Com linhas depuradas e uma linguagem arquitetónica distinta, estes imóveis destacam-se pela atenção ao detalhe e pela escolha criteriosa de materiais, traduzida em acabamentos de excelência e soluções construtivas de elevada qualidade.",
      "Os espaços interiores foram concebidos para proporcionar conforto, fluidez e luminosidade, com uma forte ligação ao exterior, onde jardins, terraços ou zonas de lazer complementam a experiência de habitar com elegância e discrição.",
      "Inseridas em localizações selecionadas, estas moradias oferecem privacidade e tranquilidade, sem abdicar da proximidade a serviços essenciais e bons acessos.",
      "Ideais para quem valoriza arquitetura, exclusividade e qualidade de vida, estas propriedades representam uma oportunidade única para viver com distinção ou investir com segurança.",
      "Para mais informações, estamos ao dispor."
    ],
    caracteristicas: [
      "Curadoria de Ativos Selecionados",
      "Abordagem Personalizada ao Seu Perfil",
      "Foco na Qualidade e Valorização",
      "Acesso a Oportunidades Exclusivas"
    ],
    imagens: {
      principal: "/images/cascais-jardim.png",
      internas: [
        "/images/cascais-sala.png",
        "/images/cascais-garagem.png"
      ]
    },
    tags: ["moradia", "design", "exclusividade", "sofisticação"]
  },
  {
    id: "moradia-tradicional",
    tipo: "Moradias",
    classe: "Património",
    localizacao: "Portugal",
    titulo: "Moradia Tradicional",
    subtitulo: "Espaço, charme e qualidade de vida",
    area: "150m² - 600m²",
    priority: 3,
    descricao: [
      "Apresentamos uma seleção de moradias com características distintas, pensadas para responder a diferentes estilos de vida e preferências.",
      "Desde moradias de linhas mais tradicionais e coloniais, algumas inseridas em terrenos amplos com jardins centenários e uma envolvente de grande charme, até opções mais compactas, modernas e funcionais, ideais para quem privilegia praticidade sem abdicar do conforto.",
      "Os imóveis distribuem-se por localizações variadas, permitindo escolher entre ambientes mais tranquilos e reservados ou zonas com maior proximidade a serviços, comércio e acessos principais.",
      "Cada moradia apresenta a sua identidade própria, seja pelo traço arquitetónico, pela dimensão dos espaços exteriores ou pela forma como se integra na paisagem envolvente, oferecendo soluções tanto para habitação própria como para investimento.",
      "Se procura uma moradia que combine personalidade, conforto e potencial de valorização, teremos todo o gosto em ajudá-lo a encontrar a opção certa.",
      "Para mais informações, estamos ao dispor."
    ],
    caracteristicas: [
      "Curadoria de Ativos Selecionados",
      "Abordagem Personalizada ao Seu Perfil",
      "Foco na Qualidade e Valorização",
      "Acesso a Oportunidades Exclusivas"
    ],
    imagens: {
      principal: "/images/colonial-fachada.png",
      internas: [
        "/images/sintra-colonial-interior.png",
        "/images/sintra-colonial-interior-2.png",
        "/images/sintra-colonial-interior-3.png"
      ]
    },
    tags: ["moradia", "charme", "qualidade", "investimento"]
  },
  {
    id: "terreno-viabilidade",
    tipo: "Terrenos",
    classe: "Investimento",
    localizacao: "Portugal",
    titulo: "Terrenos com viabilidade de construção",
    subtitulo: "Potencial, segurança e valorização",
    area: "1.000m² - 25.000m²",
    priority: 8,
    descricao: [
      "Apresentamos uma seleção de terrenos com elevado potencial de valorização, ideais para desenvolvimento imobiliário ou construction personalizada.",
      "Disponibilizamos opções com diferentes enquadramentos urbanísticos, incluindo terrenos com projetos aprovados e outros com Pedido de Informação Prévia (PIP) favorável, oferecendo maior segurança e previsibilidade no processo de desenvolvimento.",
      "Localizados em zonas estratégicas, estes terrenos beneficiam de boas acessibilidades, proximidade a infraestruturas e enquadramento urbano ou paisagístico que potencia a valorização do investimento.",
      "Com capacidades construtivas distintas, adaptam-se a diversos tipos de projetos, desde moradias unifamiliares até empreendimentos de maior escala, permitindo ao investidor ou particular concretizar soluções ajustadas aos seus objetivos.",
      "Se procura um terreno com viabilidade clara e forte potencial de retorno, teremos todo o gosto em apresentar-lhe as melhores oportunidades.",
      "Para mais informações, estamos ao dispor."
    ],
    caracteristicas: [
      "Curadoria de Ativos Selecionados",
      "Abordagem Personalizada ao Seu Perfil",
      "Foco na Qualidade e Valorização",
      "Acesso a Oportunidades Exclusivas"
    ],
    imagens: {
      principal: "/images/terreno-expansao-1.png",
      internas: [
        "/images/terreno-expansao-2.png",
        "/images/terreno-expansao-3.png"
      ]
    },
    tags: ["terreno", "construcao", "investimento", "viabilidade"]
  }
];
