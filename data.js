// Mock data for jobs
const jobsData = [
    {
      id: 1,
      title: "Desenvolvedor Front-end Sênior",
      type: "full-time",
      category: "Tecnologia",
      description: "Estamos procurando um desenvolvedor front-end sênior para se juntar à nossa equipe e criar interfaces incríveis com React, TypeScript e Tailwind CSS.",
      location: "São Paulo, SP",
      salary: {
        min: 8000,
        max: 12000,
        currency: "BRL"
      },
      company: {
        id: 1,
        name: "TechCorp Brasil",
        logo: "https://randomuser.me/api/portraits/men/1.jpg",
        location: "São Paulo, SP"
      },
      featured: true,
      createdAt: new Date(2023, 5, 15),
      closingDate: new Date(2024, 6, 15)
    },
    {
      id: 2,
      title: "UX/UI Designer",
      type: "full-time",
      category: "Design",
      description: "Procuramos um UX/UI Designer talentoso para criar experiências digitais excepcionais para nossos clientes e produtos.",
      location: "Rio de Janeiro, RJ",
      salary: {
        min: 7000,
        max: 10000,
        currency: "BRL"
      },
      company: {
        id: 2,
        name: "Creative Solutions",
        logo: "https://randomuser.me/api/portraits/women/2.jpg",
        location: "Rio de Janeiro, RJ"
      },
      featured: false,
      createdAt: new Date(2023, 6, 20),
      closingDate: new Date(2024, 7, 20)
    },
    {
      id: 3,
      title: "Desenvolvedor Backend Java",
      type: "full-time",
      category: "Tecnologia",
      description: "Estamos procurando um desenvolvedor Java com experiência em Spring Boot para trabalhar em projetos desafiadores.",
      location: "Belo Horizonte, MG",
      salary: {
        min: 7500,
        max: 11000,
        currency: "BRL"
      },
      company: {
        id: 3,
        name: "Software Solutions",
        logo: "https://randomuser.me/api/portraits/men/3.jpg",
        location: "Belo Horizonte, MG"
      },
      featured: true,
      createdAt: new Date(2023, 7, 5),
      closingDate: new Date(2024, 8, 5)
    },
    {
      id: 4,
      title: "Analista de Marketing Digital",
      type: "full-time",
      category: "Marketing",
      description: "Procuramos um analista de marketing digital para ajudar a impulsionar nossas campanhas online e aumentar nossa presença digital.",
      location: "São Paulo, SP",
      salary: {
        min: 5000,
        max: 7000,
        currency: "BRL"
      },
      company: {
        id: 4,
        name: "DigitalGrowth",
        logo: "https://randomuser.me/api/portraits/women/4.jpg",
        location: "São Paulo, SP"
      },
      featured: false,
      createdAt: new Date(2023, 8, 10),
      closingDate: new Date(2024, 9, 10)
    },
    {
      id: 5,
      title: "Desenvolvedor Mobile React Native",
      type: "full-time",
      category: "Tecnologia",
      description: "Estamos procurando um desenvolvedor React Native para criar aplicativos móveis inovadores para nossos clientes.",
      location: "Remoto",
      salary: {
        min: 7000,
        max: 10000,
        currency: "BRL"
      },
      company: {
        id: 5,
        name: "AppMakers",
        logo: "https://randomuser.me/api/portraits/men/5.jpg",
        location: "Remoto"
      },
      featured: true,
      createdAt: new Date(2023, 9, 15),
      closingDate: new Date(2024, 10, 15)
    },
    {
      id: 6,
      title: "Gerente de Produto",
      type: "full-time",
      category: "Gestão",
      description: "Procuramos um gerente de produto experiente para liderar o desenvolvimento de nossos produtos digitais.",
      location: "São Paulo, SP",
      salary: {
        min: 12000,
        max: 18000,
        currency: "BRL"
      },
      company: {
        id: 6,
        name: "ProductLab",
        logo: "https://randomuser.me/api/portraits/women/6.jpg",
        location: "São Paulo, SP"
      },
      featured: false,
      createdAt: new Date(2023, 10, 20),
      closingDate: new Date(2024, 11, 20)
    }
  ];
  
  // Mock data for companies
  const companiesData = [
    {
      id: 1,
      name: "TechCorp Brasil",
      logo: "https://randomuser.me/api/portraits/men/1.jpg",
      industry: "Tecnologia",
      location: "São Paulo, SP",
      description: "Uma empresa líder em soluções de tecnologia para diversos setores."
    },
    {
      id: 2,
      name: "Creative Solutions",
      logo: "https://randomuser.me/api/portraits/women/2.jpg",
      industry: "Design",
      location: "Rio de Janeiro, RJ",
      description: "Agência de design criativo especializada em experiências digitais inovadoras."
    },
    {
      id: 3,
      name: "Software Solutions",
      logo: "https://randomuser.me/api/portraits/men/3.jpg",
      industry: "Tecnologia",
      location: "Belo Horizonte, MG",
      description: "Empresa especializada em desenvolvimento de software para empresas de todos os tamanhos."
    },
    {
      id: 4,
      name: "DigitalGrowth",
      logo: "https://randomuser.me/api/portraits/women/4.jpg",
      industry: "Marketing",
      location: "São Paulo, SP",
      description: "Agência de marketing digital focada em resultados mensuráveis e crescimento."
    },
    {
      id: 5,
      name: "AppMakers",
      logo: "https://randomuser.me/api/portraits/men/5.jpg",
      industry: "Tecnologia",
      location: "Remoto",
      description: "Especialistas em desenvolvimento de aplicativos móveis para diversas plataformas."
    },
    {
      id: 6,
      name: "ProductLab",
      logo: "https://randomuser.me/api/portraits/women/6.jpg",
      industry: "Gestão de Produtos",
      location: "São Paulo, SP",
      description: "Consultoria especializada em estratégia e gestão de produtos digitais."
    },
    {
      id: 7,
      name: "EcoTech Solutions",
      logo: "https://randomuser.me/api/portraits/men/7.jpg",
      industry: "Tecnologia Verde",
      location: "Curitiba, PR",
      description: "Soluções tecnológicas sustentáveis para um futuro melhor."
    },
    {
      id: 8,
      name: "Data Insights",
      logo: "https://randomuser.me/api/portraits/women/8.jpg",
      industry: "Análise de Dados",
      location: "São Paulo, SP",
      description: "Especialistas em análise de dados e insights de negócios."
    }
  ];
  