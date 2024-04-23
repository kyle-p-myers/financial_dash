const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];
  
  const customers = [
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Luke Skywalker',
      email: 'luke.skywalker@example.com',
      image_url: '/customers/delba-de-oliveira.png',
    },
    {
      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'Princess Leia',
      email: 'princess.leia@example.com',
      image_url: '/customers/lee-robinson.png',
    },
    {
      id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
      name: 'Han Solo',
      email: 'han.solo@example.com',
      image_url: '/customers/hector-simpson.png',
    },
    {
      id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
      name: 'Obi-Wan Kenobi',
      email: 'obiwan.kenobi@example.com',
      image_url: '/customers/steven-tey.png',
    },
    {
      id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
      name: 'Darth Vader',
      email: 'darth.vader@example.com',
      image_url: '/customers/steph-dietz.png',
    },
    {
      id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
      name: 'Yoda',
      email: 'yoda@example.com',
      image_url: '/customers/michael-novotny.png',
    },
    {
      id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
      name: 'Chewbacca',
      email: 'chewbacca@example.com',
      image_url: '/customers/evil-rabbit.png',
    },
    {
      id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
      name: 'R2-D2',
      email: 'r2d2@example.com',
      image_url: '/customers/emil-kowalski.png',
    },
    {
      id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
      name: 'C-3PO',
      email: 'c3po@example.com',
      image_url: '/customers/amy-burns.png',
    },
    {
      id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
      name: 'Padmé Amidala',
      email: 'padme.amidala@example.com',
      image_url: '/customers/balazs-orban.png',
    },
  ];
  
  
  const notes = [
    {
      customer_id: customers[0].id,
      title: 'Processing Requisitions',
      body: 'Meeting to discuss the process for handling incoming requisitions and assigning tasks to team members.',
      team: 'accounting',
      date: '2022-12-06',
    },
    {
      customer_id: customers[1].id,
      title: 'Product Launch Campaign Strategy',
      body: 'Brainstorming session to outline the marketing strategy for the upcoming product launch, including key messaging and target audience.',
      team: 'marketing',
      date: '2022-11-20',
    },
    {
      customer_id: customers[2].id,
      title: 'Sprint Planning Meeting',
      body: 'Planning session to prioritize tasks for the next sprint, assign responsibilities, and estimate timelines for development.',
      team: 'development',
      date: '2022-12-15',
    },
    {
      customer_id: customers[3].id,
      title: 'Quarterly Budget Review',
      body: 'Reviewing the quarterly budget performance, analyzing expenses, and identifying areas for cost optimization.',
      team: 'accounting',
      date: '2022-12-02',
    },
    {
      customer_id: customers[4].id,
      title: 'Content Calendar Creation',
      body: 'Collaborative session to plan content creation for the upcoming month, including blog posts, social media updates, and email newsletters.',
      team: 'marketing',
      date: '2022-11-25',
    },
    {
      customer_id: customers[5].id,
      title: 'Feature Enhancement Discussion',
      body: 'Discussion on potential feature enhancements based on user feedback and market trends, prioritizing features for the next development sprint.',
      team: 'development',
      date: '2022-12-10',
    },
    {
      customer_id: customers[6].id,
      title: 'Tax Filing Preparation',
      body: 'Preparation session to gather necessary documents and information for filing quarterly taxes, ensuring compliance with tax regulations.',
      team: 'accounting',
      date: '2022-11-28',
    },
    {
      customer_id: customers[7].id,
      title: 'Social Media Analytics Review',
      body: 'Analyzing the performance of recent social media campaigns, including engagement metrics, reach, and conversion rates.',
      team: 'marketing',
      date: '2022-12-03',
    },
    {
      customer_id: customers[8].id,
      title: 'Code Review Session',
      body: 'Reviewing code changes submitted by team members, providing feedback, and ensuring code quality and standards compliance.',
      team: 'development',
      date: '2022-11-30',
    },
    {
      customer_id: customers[9].id,
      title: 'Accounts Payable Audit',
      body: 'Conducting an audit of accounts payable records to reconcile invoices, verify payments, and ensure accuracy in financial records.',
      team: 'accounting',
      date: '2022-12-08',
    },
  ];

  module.exports = {
    users,
    customers,
    notes,
  };