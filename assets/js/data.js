// ========================================
// PORTFOLIO DATA
// ========================================

console.log("data loaded")

 const portfolioData = {
  projects: [
    {
      id: '1',
      title: 'Shop Grocery',
      category: 'E-Commerce',
      year: '2025',

      description:
        'Modern grocery and foodstuffs delivery e-commerce platform built with Next.js and TypeScript, featuring secure authentication, state management, and seamless online ordering.',

      shortDescription:
        'Fast and reliable grocery delivery platform with modern UI.',

      image: 'public/Shop-grocery.png',
      imageAlt: 'Grocery e-commerce homepage showing food products and categories',

      technologies: ['nextjs', 'typescript', 'tailwind'],

      links: {
        live: 'https://ecommerce-app-pearl-tau.vercel.app',
        github: '#'
      },

      gridClass: '',

      detail: {
        client: 'Personal / Portfolio Project',
        duration: '3–4 Months',
        role: 'Full Stack Developer',

        allTechnologies: [
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Redux',
          'Prisma',
          'MongoDB',
          'Clerk Authentication'
        ],

        overview: [
          'Shop Grocery is a modern online grocery delivery application designed to provide users with a smooth and reliable shopping experience for foodstuffs and household items.',
          'The platform combines a powerful backend with an intuitive frontend, allowing users to browse products, manage carts, and place orders securely with fast performance and scalability in mind.'
        ],

        challenges: [
          'Designing a fast and intuitive grocery shopping experience',
          'Managing global application state efficiently',
          'Implementing secure authentication and user sessions',
          'Handling scalable product and order data',
          'Ensuring responsive performance across devices'
        ],

        solutions: {
          frontend:
            'Built with Next.js and TypeScript for performance, SEO, and scalability. Tailwind CSS ensures a clean, responsive UI optimized for both desktop and mobile users.',
          backend:
            'Prisma ORM with MongoDB manages products, users, and orders efficiently. Clerk handles secure authentication and session management.',
          stateManagement:
            'Redux is used to manage cart state, user interactions, and application-wide data consistently.'
        },

        features: [
          {
            icon: 'lock',
            title: 'Secure Authentication',
            description:
              'Clerk authentication ensures secure user login, session management, and data protection.'
          },
          {
            icon: 'shopping-cart',
            title: 'Shopping Cart & Checkout',
            description:
              'Smooth cart experience with real-time updates and order management.'
          },
          {
            icon: 'database',
            title: 'Database with Prisma',
            description:
              'MongoDB and Prisma ORM provide reliable and scalable data management.'
          },
          {
            icon: 'layers',
            title: 'State Management',
            description:
              'Redux store manages global state for carts, users, and products.'
          }
        ],

        results: [
          { number: 'Fast', label: 'Page Load Speed' },
          { number: 'Secure', label: 'User Authentication' },
          { number: 'Scalable', label: 'Database Architecture' },
          { number: 'Mobile-Ready', label: 'Responsive Design' }
        ],

        resultsDescription:
          'Shop Grocery delivers a seamless grocery shopping experience with fast performance, secure authentication, and scalable data management. The project demonstrates strong full-stack architecture and real-world e-commerce problem solving.',

        techStack: {
          frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
          backend: ['Prisma ORM'],
          database: ['MongoDB'],
          auth: ['Clerk'],
          devops: ['Vercel', 'GitHub']
        }
      }
    },

    
    {
      id: '2',
      title: "Environmental Impact Analyzer",
      category: 'AI / Sustainability',
      year: '2025',

      description:
        'AI-powered web application that analyzes the environmental impact of products, including carbon footprint and resource usage, and provides sustainability recommendations.',

      shortDescription:
        'AI-driven platform for analyzing product environmental impact.',

      image: 'public/Environmental-Impact-Analyzer.png',
      imageAlt: 'Environmental impact analysis dashboard showing sustainability metrics',

      technologies: ['python', 'Javascript', 'React', 'Tailwind'],

      links: {
        live: 'https://environmental-analysis-react.onrender.com',
        github: 'https://github.com/chidoskyi/environmental-analysis_react'
      },

      detail: {
        client: 'Personal / Open Source Project',
        duration: '3 Months',
        role: 'Full Stack Developer',

        allTechnologies: [
          'React',
          'JavaScript',
          'Tailwind CSS',
          'Python',
          'FastAPI',
          'REST API'
        ],

        overview: [
          'Environmental Impact Analyzer is a sustainability-focused web application designed to help users understand the environmental effects of consumer products.',
          'The platform accepts product data and uses backend analysis logic to calculate metrics such as carbon footprint and water usage, while offering actionable sustainability recommendations.'
        ],

        challenges: [
          'Designing a clear environmental scoring system',
          'Handling secure API authentication',
          'Processing and comparing historical analysis data',
          'Presenting complex sustainability data in a simple UI',
          'Ensuring fast and responsive performance'
        ],

        solutions: {
          frontend:
            'React with Tailwind CSS for a clean, responsive interface. The UI focuses on clarity and accessibility of sustainability metrics.',
          backend:
            'Python-based API (FastAPI) handling authentication, analysis logic, and data processing.',
          features:
            'Environmental impact calculations, sustainability recommendations, historical benchmarking, and secure API authentication.'
        },

        features: [
          {
            icon: 'shield',
            title: 'API Authentication',
            description:
              'Secure token-based authentication to protect user data and analysis history.'
          },
          {
            icon: 'leaf',
            title: 'Dynamic Environmental Analysis',
            description:
              'Analyzes product inputs to calculate carbon footprint and water usage.'
          },
          {
            icon: 'trending-up',
            title: 'Sustainability Recommendations',
            description:
              'Provides actionable insights to help improve product sustainability.'
          },
          {
            icon: 'clock',
            title: 'Historical Benchmarking',
            description:
              'Tracks and compares previous analyses to measure sustainability improvements.'
          }
        ],

        results: [
          { number: '100%', label: 'Functional MVP Delivery' },
          { number: '<2s', label: 'Average Load Time' },
          { number: '4+', label: 'Core Sustainability Metrics' },
          { number: 'Open Source', label: 'Community Ready' }
        ],

        resultsDescription:
          'The project was successfully deployed as a functional MVP with real-time analysis capabilities. Users can securely analyze products, view sustainability insights, and track historical improvements through a clean, responsive interface.',

        techStack: {
          frontend: ['React', 'JavaScript', 'Tailwind CSS'],
          backend: ['Python', 'FastAPI'],
          database: ['SQLite / PostgreSQL'],
          devops: ['Render', 'GitHub']
        }
      }
    },

    
    {
      id: '3',
      title: 'ChatApp',
      category: 'Real-Time Communication',
      year: '2024',

      description:
        'Real-time messaging application similar to WhatsApp, supporting one-to-one and group chats, audio and video calls, media sharing, and live user presence using WebSockets.',

      shortDescription:
        'Real-time chat application with messaging, calls, and live presence.',

      image: 'public/chatapp.png',
      imageAlt: 'Chat application interface showing conversations and online users',

      technologies: [
        'Django',
        'Django REST Framework',
        'Django Channels',
        'WebSocket',
        'Next.js',
        'TypeScript'
      ],

      links: {
        live: 'https://next-chat-three-azure.vercel.app/',
        github: 'https://github.com/chidoskyi/next_chat'
      },

      detail: {
        client: 'Personal / Portfolio Project',
        duration: '4 Months',
        role: 'Full Stack Developer',

        allTechnologies: [
          'Django',
          'Django REST Framework',
          'Django Channels',
          'WebSocket',
          'Next.js',
          'TypeScript',
          'JWT Authentication',
          'PostgreSQL'
        ],

        overview: [
          'ChatApp is a real-time messaging platform designed to deliver fast, reliable, and interactive communication for users, similar to WhatsApp.',
          'The system supports one-to-one and group chats, audio and video calls, file sharing, and live presence indicators, all powered by WebSockets and Django Channels for instant message delivery.'
        ],

        challenges: [
          'Implementing reliable real-time messaging',
          'Handling WebSocket connections at scale',
          'Synchronizing message states (sent, delivered, seen)',
          'Managing online and offline user presence',
          'Securing authentication with JWT',
          'Supporting audio, video, and media sharing'
        ],

        solutions: {
          frontend:
            'Next.js with TypeScript provides a responsive and scalable UI. Real-time updates are handled through WebSocket connections, enabling instant message delivery and presence updates.',
          backend:
            'Django REST Framework handles authentication and APIs, while Django Channels manages WebSocket connections for real-time communication.',
          realtime:
            'WebSocket-based architecture ensures low-latency message delivery, typing indicators, and live user presence.'
        },

        features: [
          {
            icon: 'message-circle',
            title: 'Real-Time Messaging',
            description:
              'Instant message delivery using WebSockets with support for one-to-one and group chats.'
          },
          {
            icon: 'phone',
            title: 'Audio & Video Calls',
            description:
              'Built-in audio and video calling for seamless real-time communication.'
          },
          {
            icon: 'check-circle',
            title: 'Message Status',
            description:
              'Tracks sent, delivered, and seen message states.'
          },
          {
            icon: 'users',
            title: 'Live Presence',
            description:
              'Shows online and offline status with typing indicators.'
          }
        ],

        results: [
          { number: 'Real-Time', label: 'Instant Message Delivery' },
          { number: '100%', label: 'WebSocket Powered' },
          { number: 'JWT', label: 'Secure Authentication' },
          { number: 'Multi-Device', label: 'Scalable Architecture' }
        ],

        resultsDescription:
          'ChatApp successfully delivers a real-time communication experience with low latency messaging, live presence updates, and secure authentication. The system demonstrates a production-ready WebSocket architecture using Django Channels and Next.js.',

        techStack: {
          frontend: ['Next.js', 'TypeScript'],
          backend: ['Django', 'Django REST Framework', 'Django Channels'],
          database: ['PostgreSQL'],
          realtime: ['WebSocket'],
          devops: ['Vercel', 'Render']
        }
      }
    },

    
    // {
    //   id: '4',
    //   title: 'Team Collaboration App',
    //   category: 'Productivity Tool',
    //   year: '2024',
    //   description: 'Real-time project management tool with WebSocket integration. Built for remote teams.',
    //   shortDescription: 'Real-time collaboration platform for distributed teams.',
    //   image: 'https://img.rocket.new/generatedImages/rocket_gen_img_197ae51e6-1767459681165.png',
    //   imageAlt: 'Project management dashboard showing task boards and team collaboration tools',
    //   technologies: ['React', 'Django Channels', 'WebSocket', 'Docker'],
    //   links: {
    //     live: '#',
    //     github: '#'
    //   },
    //   gridClass: 'portfolio-item-wide',
      
    //   detail: {
    //     client: 'TeamFlow Inc.',
    //     duration: '5 Months',
    //     role: 'Lead Full Stack Developer',
    //     allTechnologies: ['React', 'Django Channels', 'WebSocket', 'Docker', 'PostgreSQL', 'Redis'],
        
    //     overview: [
    //       'TeamFlow Inc. needed a powerful collaboration platform to support their rapidly growing remote workforce. The tool needed to support real-time updates, handle complex project hierarchies, and integrate with existing tools like Slack and Google Calendar.',
    //       'We built a comprehensive project management application with real-time collaboration features. Using Django Channels for WebSocket support, team members can see updates instantly without refreshing. The intuitive interface makes it easy for teams to organize work, track progress, and communicate effectively.'
    //     ],
        
    //     challenges: [
    //       'Implement real-time updates for multiple users',
    //       'Handle complex project and task hierarchies',
    //       'Create intuitive drag-and-drop interfaces',
    //       'Integrate with third-party tools (Slack, Google)',
    //       'Support file uploads and sharing',
    //       'Build robust notification system'
    //     ],
        
    //     solutions: {
    //       frontend: 'React with Redux for state management. React Beautiful DnD for drag-and-drop functionality. Socket.io client for real-time updates. Rich text editor for comments and descriptions.',
    //       backend: 'Django Channels enables WebSocket support for real-time features. Django REST Framework for API endpoints. Celery for background tasks like notifications and file processing. PostgreSQL for data persistence.',
    //       realtime: 'WebSocket connections managed through Django Channels. Redis as channel layer for scalable real-time messaging. Optimistic UI updates for immediate feedback.'
    //     },
        
    //     features: [
    //       {
    //         icon: 'users',
    //         title: 'Real-Time Collaboration',
    //         description: 'See team members\' changes instantly with WebSocket-powered live updates.'
    //       },
    //       {
    //         icon: 'trello',
    //         title: 'Kanban Boards',
    //         description: 'Drag-and-drop task management with customizable columns and swimlanes.'
    //       },
    //       {
    //         icon: 'message-square',
    //         title: 'Team Chat',
    //         description: 'Built-in messaging with file sharing, mentions, and threaded conversations.'
    //       },
    //       {
    //         icon: 'bell',
    //         title: 'Smart Notifications',
    //         description: 'Customizable notifications for task updates, mentions, and deadlines.'
    //       }
    //     ],
        
    //     results: [
    //       { number: '500+', label: 'Active Teams' },
    //       { number: '15ms', label: 'Update Latency' },
    //       { number: '40%', label: 'Productivity Increase' },
    //       { number: '4.9/5', label: 'User Satisfaction' }
    //     ],
        
    //     resultsDescription: 'The platform successfully supports over 500 active teams with thousands of daily users. Real-time updates occur with minimal latency (15ms average), creating a seamless collaborative experience. Users report 40% increase in team productivity and exceptional satisfaction with the platform.',
        
    //     techStack: {
    //       frontend: ['React 18', 'Redux Toolkit', 'Socket.io Client', 'React Beautiful DnD', 'Draft.js'],
    //       backend: ['Django 4.x', 'Django Channels', 'Django REST Framework', 'Celery', 'Socket.io'],
    //       database: ['PostgreSQL', 'Redis'],
    //       devops: ['Docker', 'Docker Compose', 'AWS ECS', 'GitHub Actions']
    //     }
    //   }
    // },

    // {
    //   id: '5',
    //   title: 'Analytics Dashboard',
    //   category: 'SaaS Platform',
    //   year: '2025',
    //   description: 'Real-time data visualization platform built with React and Django REST Framework. Handles 10k+ concurrent users.',
    //   shortDescription: 'Real-time data visualization platform with advanced analytics capabilities.',
    //   image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1332050cb-1768402326844.png',
    //   imageAlt: 'Modern SaaS dashboard with data visualization charts and analytics interface',
    //   technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
    //   links: {
    //     live: '#',
    //     github: '#'
    //   },
    //   gridClass: 'portfolio-item-large',
      
    //   detail: {
    //     client: 'DataFlow Inc.',
    //     duration: '6 Months',
    //     role: 'Lead Developer',
    //     allTechnologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'WebSocket', 'Docker'],
    //     overview: [
    //       'DataFlow Inc. needed a robust analytics platform capable of processing and visualizing large-scale data in real-time. The existing solution was struggling with performance issues and couldn\'t handle the growing user base. Our challenge was to build a scalable, performant dashboard from the ground up.',
    //       'The platform needed to support multiple data sources, provide real-time updates, and maintain responsiveness even under heavy load. We implemented a microservices architecture with React on the frontend and Django REST Framework on the backend, utilizing Redis for caching and WebSockets for live data updates.'
    //     ],
    //     challenges: [
    //       'Handle 10,000+ concurrent users without performance degradation',
    //       'Process and visualize data updates in real-time (< 1 second latency)',
    //       'Integrate with multiple third-party APIs and data sources',
    //       'Provide complex data filtering and customization options',
    //       'Ensure data security and compliance with industry standards',
    //       'Maintain 99.9% uptime with minimal maintenance windows'
    //     ],
    //     solutions: {
    //       frontend: 'Built with React 18 using modern hooks and context API for state management. Implemented code-splitting and lazy loading to optimize initial load times. Used Recharts for data visualization with custom components optimized for large datasets.',
    //       backend: 'Django REST Framework powers the API layer with custom viewsets and serializers. PostgreSQL handles persistent storage with optimized indexes. Redis provides caching and session management. WebSocket connections managed through Django Channels for real-time updates.',
    //       performance: 'Implemented database query optimization with select_related and prefetch_related. Server-side pagination and filtering reduce data transfer. CDN integration for static assets. Horizontal scaling with load balancing across multiple servers.'
    //     },
    //     features: [
    //       { icon: 'activity', title: 'Real-Time Updates', description: 'Live data streaming with WebSocket connections for instant updates across all connected clients.' },
    //       { icon: 'grid', title: 'Custom Dashboards', description: 'Drag-and-drop interface allowing users to create personalized dashboard layouts and widgets.' },
    //       { icon: 'clock', title: 'Performance Monitoring', description: 'Built-in analytics to track platform usage, query performance, and system health metrics.' },
    //       { icon: 'package', title: 'API Integration', description: 'RESTful API with comprehensive documentation for third-party integrations and custom extensions.' }
    //     ],
    //     results: [
    //       { number: '10,000+', label: 'Concurrent Users' },
    //       { number: '< 1s', label: 'Average Response Time' },
    //       { number: '99.9%', label: 'Uptime' },
    //       { number: '85%', label: 'Performance Improvement' }
    //     ],
    //     resultsDescription: 'The new platform exceeded expectations, handling peak loads with ease and providing users with instant access to critical data. Client satisfaction scores improved by 40%, and the platform became a key differentiator in the competitive landscape.',
    //     techStack: {
    //       frontend: ['React 18', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Axios'],
    //       backend: ['Django 4.2', 'Django REST Framework', 'Django Channels', 'Celery', 'Redis'],
    //       database: ['PostgreSQL', 'Redis Cache'],
    //       devops: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS (EC2, RDS, S3)']
    //     }
    //   }
    // },
    
    // {
    //   id: '6',
    //   title: 'Fashion Marketplace',
    //   category: 'E-Commerce',
    //   year: '2025',
    //   description: 'Full-stack e-commerce platform with Stripe integration and inventory management.',
    //   shortDescription: 'Modern e-commerce platform with seamless payment processing.',
    //   image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png',
    //   imageAlt: 'E-commerce website showing product catalog with modern shopping cart interface',
    //   technologies: ['Next.js', 'TypeScript', 'Stripe'],
    //   links: {
    //     live: '#',
    //     github: null
    //   },
      
    //   detail: {
    //     client: 'TechStyle Co.',
    //     duration: '4 Months',
    //     role: 'Full Stack Developer',
    //     allTechnologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    //     overview: [
    //       'TechStyle Co. needed a modern, scalable e-commerce solution to replace their aging platform. The new marketplace needed to handle high traffic during sales events, provide a seamless checkout experience, and integrate with their existing inventory management system.',
    //       'We built a headless e-commerce platform using Next.js for optimal performance and SEO. The integration with Stripe ensures secure payment processing, while our custom inventory management system provides real-time stock updates across all sales channels.'
    //     ],
    //     challenges: [
    //       'Build a fast, SEO-friendly e-commerce platform',
    //       'Integrate secure payment processing with Stripe',
    //       'Implement real-time inventory management',
    //       'Handle high traffic during flash sales',
    //       'Create an intuitive admin dashboard',
    //       'Ensure mobile-first responsive design'
    //     ],
    //     solutions: {
    //       frontend: 'Next.js 14 with server-side rendering for optimal performance and SEO. TypeScript ensures type safety throughout the application. Tailwind CSS provides a consistent, responsive design system.',
    //       backend: 'Next.js API routes handle server-side logic. MongoDB stores product data, orders, and user information. Stripe integration handles all payment processing securely.',
    //       features: 'Advanced product filtering, wishlist functionality, order tracking, customer reviews, and admin dashboard for managing products, orders, and analytics.'
    //     },
    //     features: [
    //       { icon: 'shopping-cart', title: 'Smart Shopping Cart', description: 'Persistent cart with real-time price updates and inventory checking.' },
    //       { icon: 'credit-card', title: 'Secure Payments', description: 'Stripe integration with support for multiple payment methods and currencies.' },
    //       { icon: 'package', title: 'Order Tracking', description: 'Real-time order tracking with email notifications at each stage.' },
    //       { icon: 'bar-chart', title: 'Analytics Dashboard', description: 'Comprehensive admin dashboard with sales analytics and inventory insights.' }
    //     ],
    //     results: [
    //       { number: '250%', label: 'Sales Increase' },
    //       { number: '2.5s', label: 'Page Load Time' },
    //       { number: '95%', label: 'Mobile Traffic' },
    //       { number: '4.8/5', label: 'Customer Rating' }
    //     ],
    //     resultsDescription: 'The new platform launched successfully with zero downtime migration. Sales increased by 250% in the first quarter, and the improved user experience led to a 35% increase in conversion rate. Mobile traffic now accounts for 95% of all visits.',
    //     techStack: {
    //       frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form'],
    //       backend: ['Next.js API Routes', 'Stripe API', 'MongoDB', 'Mongoose'],
    //       database: ['MongoDB Atlas'],
    //       devops: ['Vercel', 'GitHub Actions', 'Cloudflare CDN']
    //     }
    //   }
    // },
    
    // {
    //   id: '7',
    //   title: 'Tech Blog CMS',
    //   category: 'Content Platform',
    //   year: '2024',
    //   description: 'Headless WordPress CMS with React frontend. SEO-optimized and lightning fast.',
    //   shortDescription: 'High-performance headless CMS with modern frontend.',
    //   image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ac9f52e3-1764758855402.png',
    //   imageAlt: 'Blog platform homepage with featured articles and clean typography layout',
    //   technologies: ['React', 'WordPress', 'GraphQL'],
    //   links: {
    //     live: '#',
    //     github: null
    //   },
      
    //   detail: {
    //     client: 'ContentHub Media',
    //     duration: '3 Months',
    //     role: 'Frontend Developer',
    //     allTechnologies: ['React', 'WordPress', 'GraphQL', 'WPGraphQL', 'Next.js'],
    //     overview: [
    //       'ContentHub Media wanted to modernize their WordPress blog while keeping the familiar CMS backend that their content team loved. The challenge was to create a lightning-fast, SEO-optimized frontend while maintaining WordPress as the content management system.',
    //       'We implemented a headless WordPress architecture using WPGraphQL to expose content via GraphQL API. The React frontend fetches content at build time for optimal performance, with incremental static regeneration to keep content fresh without rebuilding the entire site.'
    //     ],
    //     challenges: [
    //       'Migrate from traditional WordPress to headless architecture',
    //       'Maintain SEO performance during transition',
    //       'Implement efficient content preview for editors',
    //       'Optimize for Core Web Vitals',
    //       'Create reusable component library',
    //       'Support custom post types and taxonomies'
    //     ],
    //     solutions: {
    //       frontend: 'Next.js with static site generation (SSG) for lightning-fast page loads. React components for flexible, reusable UI elements. Tailwind CSS for consistent styling.',
    //       backend: 'WordPress with WPGraphQL plugin exposes content via GraphQL API. Custom WordPress plugins for specific business logic. Advanced Custom Fields (ACF) for flexible content modeling.',
    //       performance: 'Static site generation with incremental static regeneration (ISR) ensures fresh content without sacrificing performance. Image optimization with Next.js Image component. CDN caching for global distribution.'
    //     },
    //     features: [
    //       { icon: 'zap', title: 'Lightning Fast', description: 'Static site generation delivers sub-second page loads with 100/100 Lighthouse scores.' },
    //       { icon: 'search', title: 'SEO Optimized', description: 'Full control over meta tags, structured data, and Open Graph tags for maximum visibility.' },
    //       { icon: 'eye', title: 'Live Preview', description: 'Content editors can preview changes in real-time before publishing.' },
    //       { icon: 'layers', title: 'Component Library', description: 'Reusable components enable consistent design and faster content creation.' }
    //     ],
    //     results: [
    //       { number: '300%', label: 'Speed Improvement' },
    //       { number: '100/100', label: 'Lighthouse Score' },
    //       { number: '60%', label: 'More Organic Traffic' },
    //       { number: '0.8s', label: 'Average Page Load' }
    //     ],
    //     resultsDescription: 'The headless architecture delivered exceptional results. Page load times improved by 300%, leading to better user engagement and a 60% increase in organic traffic. The development team can now ship new features faster using the reusable component library.',
    //     techStack: {
    //       frontend: ['Next.js 13', 'React 18', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    //       backend: ['WordPress 6.x', 'WPGraphQL', 'Advanced Custom Fields', 'Custom Plugins'],
    //       database: ['MySQL'],
    //       devops: ['Vercel', 'WP Engine', 'Cloudflare']
    //     }
    //   }
    // },
    
    // {
    //   id: '8',
    //   title: 'Team Collaboration App',
    //   category: 'Productivity Tool',
    //   year: '2024',
    //   description: 'Real-time project management tool with WebSocket integration. Built for remote teams.',
    //   shortDescription: 'Real-time collaboration platform for distributed teams.',
    //   image: 'https://img.rocket.new/generatedImages/rocket_gen_img_197ae51e6-1767459681165.png',
    //   imageAlt: 'Project management dashboard showing task boards and team collaboration tools',
    //   technologies: ['React', 'Django Channels', 'WebSocket', 'Docker'],
    //   links: {
    //     live: '#',
    //     github: '#'
    //   },
    //   gridClass: 'portfolio-item-wide',
      
    //   detail: {
    //     client: 'TeamFlow Inc.',
    //     duration: '5 Months',
    //     role: 'Lead Full Stack Developer',
    //     allTechnologies: ['React', 'Django Channels', 'WebSocket', 'Docker', 'PostgreSQL', 'Redis'],
    //     overview: [
    //       'TeamFlow Inc. needed a powerful collaboration platform to support their rapidly growing remote workforce. The tool needed to support real-time updates, handle complex project hierarchies, and integrate with existing tools like Slack and Google Calendar.',
    //       'We built a comprehensive project management application with real-time collaboration features. Using Django Channels for WebSocket support, team members can see updates instantly without refreshing. The intuitive interface makes it easy for teams to organize work, track progress, and communicate effectively.'
    //     ],
    //     challenges: [
    //       'Implement real-time updates for multiple users',
    //       'Handle complex project and task hierarchies',
    //       'Create intuitive drag-and-drop interfaces',
    //       'Integrate with third-party tools (Slack, Google)',
    //       'Support file uploads and sharing',
    //       'Build robust notification system'
    //     ],
    //     solutions: {
    //       frontend: 'React with Redux for state management. React Beautiful DnD for drag-and-drop functionality. Socket.io client for real-time updates. Rich text editor for comments and descriptions.',
    //       backend: 'Django Channels enables WebSocket support for real-time features. Django REST Framework for API endpoints. Celery for background tasks like notifications and file processing. PostgreSQL for data persistence.',
    //       realtime: 'WebSocket connections managed through Django Channels. Redis as channel layer for scalable real-time messaging. Optimistic UI updates for immediate feedback.'
    //     },
    //     features: [
    //       { icon: 'users', title: 'Real-Time Collaboration', description: 'See team members\' changes instantly with WebSocket-powered live updates.' },
    //       { icon: 'trello', title: 'Kanban Boards', description: 'Drag-and-drop task management with customizable columns and swimlanes.' },
    //       { icon: 'message-square', title: 'Team Chat', description: 'Built-in messaging with file sharing, mentions, and threaded conversations.' },
    //       { icon: 'bell', title: 'Smart Notifications', description: 'Customizable notifications for task updates, mentions, and deadlines.' }
    //     ],
    //     results: [
    //       { number: '500+', label: 'Active Teams' },
    //       { number: '15ms', label: 'Update Latency' },
    //       { number: '40%', label: 'Productivity Increase' },
    //       { number: '4.9/5', label: 'User Satisfaction' }
    //     ],
    //     resultsDescription: 'The platform successfully supports over 500 active teams with thousands of daily users. Real-time updates occur with minimal latency (15ms average), creating a seamless collaborative experience. Users report 40% increase in team productivity and exceptional satisfaction with the platform.',
    //     techStack: {
    //       frontend: ['React 18', 'Redux Toolkit', 'Socket.io Client', 'React Beautiful DnD', 'Draft.js'],
    //       backend: ['Django 4.x', 'Django Channels', 'Django REST Framework', 'Celery', 'Socket.io'],
    //       database: ['PostgreSQL', 'Redis'],
    //       devops: ['Docker', 'Docker Compose', 'AWS ECS', 'GitHub Actions']
    //     }
    //   }
    // },
    
    // // Additional projects for pagination demo
    // {
    //   id: '9',
    //   title: 'Fitness Tracking App',
    //   category: 'Mobile App',
    //   year: '2024',
    //   description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
    //   shortDescription: 'Comprehensive fitness and health tracking solution.',
    //   image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop',
    //   imageAlt: 'Fitness tracking app interface showing workout statistics',
    //   technologies: ['React Native', 'Node.js', 'MongoDB'],
    //   links: { live: '#', github: '#' },
    //   detail: {
    //     client: 'FitLife Co.',
    //     duration: '6 Months',
    //     role: 'Mobile Developer',
    //     allTechnologies: ['React Native', 'Node.js', 'MongoDB', 'Redux', 'Express'],
    //     overview: ['Mobile fitness tracking application with comprehensive health monitoring.'],
    //     challenges: ['Cross-platform compatibility', 'Real-time sync', 'Offline support'],
    //     solutions: { frontend: 'React Native with offline-first architecture', backend: 'Node.js REST API with MongoDB' },
    //     features: [{ icon: 'activity', title: 'Workout Tracking', description: 'Track exercises, sets, and reps with detailed analytics.' }],
    //     results: [{ number: '50k+', label: 'Downloads' }],
    //     resultsDescription: 'Successfully launched with excellent user retention.',
    //     techStack: { frontend: ['React Native', 'Redux'], backend: ['Node.js', 'Express'], database: ['MongoDB'] }
    //   }
    // },
    
    // {
    //   id: '10',
    //   title: 'Restaurant POS System',
    //   category: 'SaaS Platform',
    //   year: '2024',
    //   description: 'Cloud-based point-of-sale system for restaurants with inventory management.',
    //   shortDescription: 'Modern POS solution for food service businesses.',
    //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    //   imageAlt: 'Restaurant POS interface with order management',
    //   technologies: ['Vue.js', 'Python', 'MySQL'],
    //   links: { live: '#', github: null },
    //   detail: {
    //     client: 'DineTrack',
    //     duration: '5 Months',
    //     role: 'Full Stack Developer',
    //     allTechnologies: ['Vue.js', 'Python', 'MySQL', 'Flask'],
    //     overview: ['Complete POS solution with inventory and employee management.'],
    //     challenges: ['Real-time order processing', 'Multi-location support', 'Payment integration'],
    //     solutions: { frontend: 'Vue.js with Vuex state management', backend: 'Flask REST API with MySQL database' },
    //     features: [{ icon: 'package', title: 'Inventory Management', description: 'Real-time stock tracking and automated reordering.' }],
    //     results: [{ number: '200+', label: 'Restaurants' }],
    //     resultsDescription: 'Deployed across 200+ locations with 99.8% uptime.',
    //     techStack: { frontend: ['Vue.js 3', 'Vuex'], backend: ['Flask', 'Python'], database: ['MySQL'] }
    //   }
    // },
    
    // {
    //   id: '11',
    //   title: 'Online Learning Platform',
    //   category: 'E-Learning',
    //   year: '2023',
    //   description: 'Interactive e-learning platform with video courses and live sessions.',
    //   shortDescription: 'Scalable platform for online education.',
    //   image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
    //   imageAlt: 'E-learning platform showing course dashboard',
    //   technologies: ['React', 'Ruby on Rails', 'PostgreSQL'],
    //   links: { live: '#', github: '#' },
    //   detail: {
    //     client: 'EduMaster',
    //     duration: '8 Months',
    //     role: 'Lead Developer',
    //     allTechnologies: ['React', 'Ruby on Rails', 'PostgreSQL', 'Redis'],
    //     overview: ['Comprehensive learning management system with video streaming.'],
    //     challenges: ['Video streaming optimization', 'Student progress tracking', 'Live session support'],
    //     solutions: { frontend: 'React with WebRTC for live sessions', backend: 'Rails API with background job processing' },
    //     features: [{ icon: 'users', title: 'Live Classes', description: 'Real-time video conferencing with screen sharing.' }],
    //     results: [{ number: '100k+', label: 'Students' }],
    //     resultsDescription: 'Platform serves over 100,000 active students monthly.',
    //     techStack: { frontend: ['React', 'WebRTC'], backend: ['Ruby on Rails'], database: ['PostgreSQL'] }
    //   }
    // },
    
    // {
    //   id: '12',
    //   title: 'Real Estate Portal',
    //   category: 'Web App',
    //   year: '2023',
    //   description: 'Property listing platform with advanced search and virtual tours.',
    //   shortDescription: 'Modern real estate marketplace.',
    //   image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
    //   imageAlt: 'Real estate portal showing property listings',
    //   technologies: ['Angular', 'ASP.NET', 'SQL Server'],
    //   links: { live: '#', github: null },
    //   detail: {
    //     client: 'PropFinder',
    //     duration: '7 Months',
    //     role: 'Full Stack Developer',
    //     allTechnologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure'],
    //     overview: ['Full-featured property marketplace with virtual tours.'],
    //     challenges: ['Map integration', 'Image optimization', '3D tour integration'],
    //     solutions: { frontend: 'Angular with Google Maps API', backend: 'ASP.NET Core with Entity Framework' },
    //     features: [{ icon: 'search', title: 'Smart Search', description: 'AI-powered property matching based on preferences.' }],
    //     results: [{ number: '10k+', label: 'Properties' }],
    //     resultsDescription: 'Successfully listing properties with 95% satisfaction rate.',
    //     techStack: { frontend: ['Angular', 'TypeScript'], backend: ['ASP.NET Core'], database: ['SQL Server'] }
    //   }
    // },
    
    // {
    //   id: '13',
    //   title: 'Hotel Booking System',
    //   category: 'E-Commerce',
    //   year: '2023',
    //   description: 'Comprehensive hotel reservation platform with payment processing.',
    //   shortDescription: 'End-to-end hotel booking solution.',
    //   image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    //   imageAlt: 'Hotel booking interface with room selection',
    //   technologies: ['Next.js', 'Express', 'MongoDB'],
    //   links: { live: '#', github: '#' },
    //   detail: {
    //     client: 'StayEasy',
    //     duration: '5 Months',
    //     role: 'Senior Developer',
    //     allTechnologies: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
    //     overview: ['Modern booking platform with real-time availability.'],
    //     challenges: ['Real-time availability', 'Multi-currency support', 'Calendar sync'],
    //     solutions: { frontend: 'Next.js with SSR for SEO', backend: 'Express REST API with webhook processing' },
    //     features: [{ icon: 'credit-card', title: 'Secure Payments', description: 'PCI-compliant payment processing with Stripe.' }],
    //     results: [{ number: '5k+', label: 'Bookings/Month' }],
    //     resultsDescription: 'Processing thousands of bookings with zero payment issues.',
    //     techStack: { frontend: ['Next.js', 'React'], backend: ['Express', 'Node.js'], database: ['MongoDB'] }
    //   }
    // },
    
    // {
    //   id: '14',
    //   title: 'Social Media Manager',
    //   category: 'Productivity Tool',
    //   year: '2023',
    //   description: 'All-in-one tool for managing multiple social media accounts.',
    //   shortDescription: 'Unified social media management dashboard.',
    //   image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    //   imageAlt: 'Social media management dashboard',
    //   technologies: ['React', 'Django', 'Celery'],
    //   links: { live: '#', github: null },
    //   detail: {
    //     client: 'SocialHub',
    //     duration: '6 Months',
    //     role: 'Full Stack Developer',
    //     allTechnologies: ['React', 'Django', 'Celery', 'Redis', 'PostgreSQL'],
    //     overview: ['Multi-platform social media scheduling and analytics.'],
    //     challenges: ['API rate limits', 'Post scheduling', 'Analytics aggregation'],
    //     solutions: { frontend: 'React with calendar components', backend: 'Django with Celery for scheduled posts' },
    //     features: [{ icon: 'clock', title: 'Auto-Posting', description: 'Schedule posts across multiple platforms simultaneously.' }],
    //     results: [{ number: '15k+', label: 'Users' }],
    //     resultsDescription: 'Helping businesses manage their social presence efficiently.',
    //     techStack: { frontend: ['React', 'Chart.js'], backend: ['Django', 'Celery'], database: ['PostgreSQL'] }
    //   }
    // },
    
    // {
    //   id: '15',
    //   title: 'Patient Portal',
    //   category: 'Healthcare',
    //   year: '2022',
    //   description: 'HIPAA-compliant patient management system for healthcare providers.',
    //   shortDescription: 'Secure healthcare management platform.',
    //   image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
    //   imageAlt: 'Healthcare patient portal interface',
    //   technologies: ['Vue.js', 'Laravel', 'MySQL'],
    //   links: { live: '#', github: null },
    //   detail: {
    //     client: 'MedConnect',
    //     duration: '9 Months',
    //     role: 'Senior Developer',
    //     allTechnologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    //     overview: ['HIPAA-compliant portal for patient-doctor communication.'],
    //     challenges: ['HIPAA compliance', 'Secure messaging', 'Appointment scheduling'],
    //     solutions: { frontend: 'Vue.js with end-to-end encryption', backend: 'Laravel with secure authentication' },
    //     features: [{ icon: 'users', title: 'Telemedicine', description: 'Secure video consultations with healthcare providers.' }],
    //     results: [{ number: '50+', label: 'Clinics' }],
    //     resultsDescription: 'Serving 50+ medical facilities with perfect security record.',
    //     techStack: { frontend: ['Vue.js 3', 'Vuetify'], backend: ['Laravel', 'PHP'], database: ['MySQL'] }
    //   }
    // },
    
    // {
    //   id: '16',
    //   title: 'Warehouse Management',
    //   category: 'SaaS Platform',
    //   year: '2022',
    //   description: 'Enterprise inventory tracking system with barcode scanning.',
    //   shortDescription: 'Comprehensive warehouse management solution.',
    //   image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop',
    //   imageAlt: 'Warehouse management system interface',
    //   technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    //   links: { live: '#', github: '#' },
    //   detail: {
    //     client: 'LogiTrack',
    //     duration: '7 Months',
    //     role: 'Full Stack Developer',
    //     allTechnologies: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    //     overview: ['Enterprise-grade inventory management with barcode integration.'],
    //     challenges: ['Real-time inventory', 'Multi-warehouse support', 'Barcode integration'],
    //     solutions: { frontend: 'React with PWA capabilities', backend: 'Spring Boot microservices architecture' },
    //     features: [{ icon: 'package', title: 'Barcode Scanning', description: 'Mobile-friendly barcode scanning for quick updates.' }],
    //     results: [{ number: '1M+', label: 'Items Tracked' }],
    //     resultsDescription: 'Managing inventory across 50+ warehouses efficiently.',
    //     techStack: { frontend: ['React', 'PWA'], backend: ['Spring Boot', 'Java'], database: ['PostgreSQL'] }
    //   }
    // }
  ]
};

// Helper function to get project by ID
function getProjectById(id) {
  return portfolioData.projects.find(project => project.id === id);
}

// Helper function to get next project
function getNextProject(currentId) {
  const currentIndex = portfolioData.projects.findIndex(p => p.id === currentId);
  const nextIndex = (currentIndex + 1) % portfolioData.projects.length;
  return portfolioData.projects[nextIndex];
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioData, getProjectById, getNextProject };
}