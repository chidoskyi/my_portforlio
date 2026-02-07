// ========================================
// PORTFOLIO DATA
// ========================================

 const portfolioData = {
  projects: [
    {
      id: '1',
      title: 'Analytics Dashboard',
      category: 'SaaS Platform',
      year: '2025',
      description: 'Real-time data visualization platform built with React and Django REST Framework. Handles 10k+ concurrent users.',
      shortDescription: 'Real-time data visualization platform with advanced analytics capabilities.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1332050cb-1768402326844.png',
      imageAlt: 'Modern SaaS dashboard with data visualization charts and analytics interface',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      links: {
        live: '#',
        github: '#'
      },
      gridClass: 'portfolio-item-large', // Special grid layout class
      
      // Detail page data
      detail: {
        client: 'DataFlow Inc.',
        duration: '6 Months',
        role: 'Lead Developer',
        allTechnologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'WebSocket', 'Docker'],
        
        overview: [
          'DataFlow Inc. needed a robust analytics platform capable of processing and visualizing large-scale data in real-time. The existing solution was struggling with performance issues and couldn\'t handle the growing user base. Our challenge was to build a scalable, performant dashboard from the ground up.',
          'The platform needed to support multiple data sources, provide real-time updates, and maintain responsiveness even under heavy load. We implemented a microservices architecture with React on the frontend and Django REST Framework on the backend, utilizing Redis for caching and WebSockets for live data updates.'
        ],
        
        challenges: [
          'Handle 10,000+ concurrent users without performance degradation',
          'Process and visualize data updates in real-time (< 1 second latency)',
          'Integrate with multiple third-party APIs and data sources',
          'Provide complex data filtering and customization options',
          'Ensure data security and compliance with industry standards',
          'Maintain 99.9% uptime with minimal maintenance windows'
        ],
        
        solutions: {
          frontend: 'Built with React 18 using modern hooks and context API for state management. Implemented code-splitting and lazy loading to optimize initial load times. Used Recharts for data visualization with custom components optimized for large datasets.',
          backend: 'Django REST Framework powers the API layer with custom viewsets and serializers. PostgreSQL handles persistent storage with optimized indexes. Redis provides caching and session management. WebSocket connections managed through Django Channels for real-time updates.',
          performance: 'Implemented database query optimization with select_related and prefetch_related. Server-side pagination and filtering reduce data transfer. CDN integration for static assets. Horizontal scaling with load balancing across multiple servers.'
        },
        
        features: [
          {
            icon: 'activity',
            title: 'Real-Time Updates',
            description: 'Live data streaming with WebSocket connections for instant updates across all connected clients.'
          },
          {
            icon: 'grid',
            title: 'Custom Dashboards',
            description: 'Drag-and-drop interface allowing users to create personalized dashboard layouts and widgets.'
          },
          {
            icon: 'clock',
            title: 'Performance Monitoring',
            description: 'Built-in analytics to track platform usage, query performance, and system health metrics.'
          },
          {
            icon: 'package',
            title: 'API Integration',
            description: 'RESTful API with comprehensive documentation for third-party integrations and custom extensions.'
          }
        ],
        
        results: [
          { number: '10,000+', label: 'Concurrent Users' },
          { number: '< 1s', label: 'Average Response Time' },
          { number: '99.9%', label: 'Uptime' },
          { number: '85%', label: 'Performance Improvement' }
        ],
        
        resultsDescription: 'The new platform exceeded expectations, handling peak loads with ease and providing users with instant access to critical data. Client satisfaction scores improved by 40%, and the platform became a key differentiator in the competitive landscape.',
        
        techStack: {
          frontend: ['React 18', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Axios'],
          backend: ['Django 4.2', 'Django REST Framework', 'Django Channels', 'Celery', 'Redis'],
          database: ['PostgreSQL', 'Redis Cache'],
          devops: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS (EC2, RDS, S3)']
        }
      }
    },
    
    {
      id: '2',
      title: 'Fashion Marketplace',
      category: 'E-Commerce',
      year: '2025',
      description: 'Full-stack e-commerce platform with Stripe integration and inventory management.',
      shortDescription: 'Modern e-commerce platform with seamless payment processing.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png',
      imageAlt: 'E-commerce website showing product catalog with modern shopping cart interface',
      technologies: ['Next.js', 'TypeScript', 'Stripe'],
      links: {
        live: '#',
        github: null
      },
      
      detail: {
        client: 'TechStyle Co.',
        duration: '4 Months',
        role: 'Full Stack Developer',
        allTechnologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
        
        overview: [
          'TechStyle Co. needed a modern, scalable e-commerce solution to replace their aging platform. The new marketplace needed to handle high traffic during sales events, provide a seamless checkout experience, and integrate with their existing inventory management system.',
          'We built a headless e-commerce platform using Next.js for optimal performance and SEO. The integration with Stripe ensures secure payment processing, while our custom inventory management system provides real-time stock updates across all sales channels.'
        ],
        
        challenges: [
          'Build a fast, SEO-friendly e-commerce platform',
          'Integrate secure payment processing with Stripe',
          'Implement real-time inventory management',
          'Handle high traffic during flash sales',
          'Create an intuitive admin dashboard',
          'Ensure mobile-first responsive design'
        ],
        
        solutions: {
          frontend: 'Next.js 14 with server-side rendering for optimal performance and SEO. TypeScript ensures type safety throughout the application. Tailwind CSS provides a consistent, responsive design system.',
          backend: 'Next.js API routes handle server-side logic. MongoDB stores product data, orders, and user information. Stripe integration handles all payment processing securely.',
          features: 'Advanced product filtering, wishlist functionality, order tracking, customer reviews, and admin dashboard for managing products, orders, and analytics.'
        },
        
        features: [
          {
            icon: 'shopping-cart',
            title: 'Smart Shopping Cart',
            description: 'Persistent cart with real-time price updates and inventory checking.'
          },
          {
            icon: 'credit-card',
            title: 'Secure Payments',
            description: 'Stripe integration with support for multiple payment methods and currencies.'
          },
          {
            icon: 'package',
            title: 'Order Tracking',
            description: 'Real-time order tracking with email notifications at each stage.'
          },
          {
            icon: 'bar-chart',
            title: 'Analytics Dashboard',
            description: 'Comprehensive admin dashboard with sales analytics and inventory insights.'
          }
        ],
        
        results: [
          { number: '250%', label: 'Sales Increase' },
          { number: '2.5s', label: 'Page Load Time' },
          { number: '95%', label: 'Mobile Traffic' },
          { number: '4.8/5', label: 'Customer Rating' }
        ],
        
        resultsDescription: 'The new platform launched successfully with zero downtime migration. Sales increased by 250% in the first quarter, and the improved user experience led to a 35% increase in conversion rate. Mobile traffic now accounts for 95% of all visits.',
        
        techStack: {
          frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form'],
          backend: ['Next.js API Routes', 'Stripe API', 'MongoDB', 'Mongoose'],
          database: ['MongoDB Atlas'],
          devops: ['Vercel', 'GitHub Actions', 'Cloudflare CDN']
        }
      }
    },
    
    {
      id: '3',
      title: 'Tech Blog CMS',
      category: 'Content Platform',
      year: '2024',
      description: 'Headless WordPress CMS with React frontend. SEO-optimized and lightning fast.',
      shortDescription: 'High-performance headless CMS with modern frontend.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ac9f52e3-1764758855402.png',
      imageAlt: 'Blog platform homepage with featured articles and clean typography layout',
      technologies: ['React', 'WordPress', 'GraphQL'],
      links: {
        live: '#',
        github: null
      },
      
      detail: {
        client: 'ContentHub Media',
        duration: '3 Months',
        role: 'Frontend Developer',
        allTechnologies: ['React', 'WordPress', 'GraphQL', 'WPGraphQL', 'Next.js'],
        
        overview: [
          'ContentHub Media wanted to modernize their WordPress blog while keeping the familiar CMS backend that their content team loved. The challenge was to create a lightning-fast, SEO-optimized frontend while maintaining WordPress as the content management system.',
          'We implemented a headless WordPress architecture using WPGraphQL to expose content via GraphQL API. The React frontend fetches content at build time for optimal performance, with incremental static regeneration to keep content fresh without rebuilding the entire site.'
        ],
        
        challenges: [
          'Migrate from traditional WordPress to headless architecture',
          'Maintain SEO performance during transition',
          'Implement efficient content preview for editors',
          'Optimize for Core Web Vitals',
          'Create reusable component library',
          'Support custom post types and taxonomies'
        ],
        
        solutions: {
          frontend: 'Next.js with static site generation (SSG) for lightning-fast page loads. React components for flexible, reusable UI elements. Tailwind CSS for consistent styling.',
          backend: 'WordPress with WPGraphQL plugin exposes content via GraphQL API. Custom WordPress plugins for specific business logic. Advanced Custom Fields (ACF) for flexible content modeling.',
          performance: 'Static site generation with incremental static regeneration (ISR) ensures fresh content without sacrificing performance. Image optimization with Next.js Image component. CDN caching for global distribution.'
        },
        
        features: [
          {
            icon: 'zap',
            title: 'Lightning Fast',
            description: 'Static site generation delivers sub-second page loads with 100/100 Lighthouse scores.'
          },
          {
            icon: 'search',
            title: 'SEO Optimized',
            description: 'Full control over meta tags, structured data, and Open Graph tags for maximum visibility.'
          },
          {
            icon: 'eye',
            title: 'Live Preview',
            description: 'Content editors can preview changes in real-time before publishing.'
          },
          {
            icon: 'layers',
            title: 'Component Library',
            description: 'Reusable components enable consistent design and faster content creation.'
          }
        ],
        
        results: [
          { number: '300%', label: 'Speed Improvement' },
          { number: '100/100', label: 'Lighthouse Score' },
          { number: '60%', label: 'More Organic Traffic' },
          { number: '0.8s', label: 'Average Page Load' }
        ],
        
        resultsDescription: 'The headless architecture delivered exceptional results. Page load times improved by 300%, leading to better user engagement and a 60% increase in organic traffic. The development team can now ship new features faster using the reusable component library.',
        
        techStack: {
          frontend: ['Next.js 13', 'React 18', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
          backend: ['WordPress 6.x', 'WPGraphQL', 'Advanced Custom Fields', 'Custom Plugins'],
          database: ['MySQL'],
          devops: ['Vercel', 'WP Engine', 'Cloudflare']
        }
      }
    },
    
    {
      id: '4',
      title: 'Team Collaboration App',
      category: 'Productivity Tool',
      year: '2024',
      description: 'Real-time project management tool with WebSocket integration. Built for remote teams.',
      shortDescription: 'Real-time collaboration platform for distributed teams.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_197ae51e6-1767459681165.png',
      imageAlt: 'Project management dashboard showing task boards and team collaboration tools',
      technologies: ['React', 'Django Channels', 'WebSocket', 'Docker'],
      links: {
        live: '#',
        github: '#'
      },
      gridClass: 'portfolio-item-wide',
      
      detail: {
        client: 'TeamFlow Inc.',
        duration: '5 Months',
        role: 'Lead Full Stack Developer',
        allTechnologies: ['React', 'Django Channels', 'WebSocket', 'Docker', 'PostgreSQL', 'Redis'],
        
        overview: [
          'TeamFlow Inc. needed a powerful collaboration platform to support their rapidly growing remote workforce. The tool needed to support real-time updates, handle complex project hierarchies, and integrate with existing tools like Slack and Google Calendar.',
          'We built a comprehensive project management application with real-time collaboration features. Using Django Channels for WebSocket support, team members can see updates instantly without refreshing. The intuitive interface makes it easy for teams to organize work, track progress, and communicate effectively.'
        ],
        
        challenges: [
          'Implement real-time updates for multiple users',
          'Handle complex project and task hierarchies',
          'Create intuitive drag-and-drop interfaces',
          'Integrate with third-party tools (Slack, Google)',
          'Support file uploads and sharing',
          'Build robust notification system'
        ],
        
        solutions: {
          frontend: 'React with Redux for state management. React Beautiful DnD for drag-and-drop functionality. Socket.io client for real-time updates. Rich text editor for comments and descriptions.',
          backend: 'Django Channels enables WebSocket support for real-time features. Django REST Framework for API endpoints. Celery for background tasks like notifications and file processing. PostgreSQL for data persistence.',
          realtime: 'WebSocket connections managed through Django Channels. Redis as channel layer for scalable real-time messaging. Optimistic UI updates for immediate feedback.'
        },
        
        features: [
          {
            icon: 'users',
            title: 'Real-Time Collaboration',
            description: 'See team members\' changes instantly with WebSocket-powered live updates.'
          },
          {
            icon: 'trello',
            title: 'Kanban Boards',
            description: 'Drag-and-drop task management with customizable columns and swimlanes.'
          },
          {
            icon: 'message-square',
            title: 'Team Chat',
            description: 'Built-in messaging with file sharing, mentions, and threaded conversations.'
          },
          {
            icon: 'bell',
            title: 'Smart Notifications',
            description: 'Customizable notifications for task updates, mentions, and deadlines.'
          }
        ],
        
        results: [
          { number: '500+', label: 'Active Teams' },
          { number: '15ms', label: 'Update Latency' },
          { number: '40%', label: 'Productivity Increase' },
          { number: '4.9/5', label: 'User Satisfaction' }
        ],
        
        resultsDescription: 'The platform successfully supports over 500 active teams with thousands of daily users. Real-time updates occur with minimal latency (15ms average), creating a seamless collaborative experience. Users report 40% increase in team productivity and exceptional satisfaction with the platform.',
        
        techStack: {
          frontend: ['React 18', 'Redux Toolkit', 'Socket.io Client', 'React Beautiful DnD', 'Draft.js'],
          backend: ['Django 4.x', 'Django Channels', 'Django REST Framework', 'Celery', 'Socket.io'],
          database: ['PostgreSQL', 'Redis'],
          devops: ['Docker', 'Docker Compose', 'AWS ECS', 'GitHub Actions']
        }
      }
    }
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