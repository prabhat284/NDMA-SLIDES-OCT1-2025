export const slides = [
  // 1. Landing
  {
    id: 'landing',
    type: 'landing',
    title: 'India\'s Sovereign Flood Intelligence Capability',
    subtitle: 'National Disaster Management Authority',
    date: 'October 1, 2025',
    presenter: 'Aditya Tiwari, Culturiq Research Labs'
  },
  
  // 2. Hero
  {
    id: 'hero',
    type: 'hero',
    title: 'The Capability Gap',
    subtitle: 'September 2025, Yamuna Flooding',
    image: '/yamuna-flooding.jpg'
  },
  
  // 3. Problem - Forecasting-Operations Gap
  {
    id: 'problem',
    type: 'problem',
    title: 'The Forecasting-Operations Gap'
  },
  
  // 4. Sovereignty
  {
    id: 'sovereignty',
    type: 'sovereignty',
    title: 'Why Sovereign Capability Matters'
  },
  
  // 5. Solution - Closing the Gap
  {
    id: 'solution',
    type: 'solution',
    title: 'Closing the Gap'
  },
  
  // 6. Scalability
  {
    id: 'scalability',
    type: 'scalability',
    title: 'Scalable Deployment Architecture'
  },
  
  // 7. Live Demo Readiness
  {
    id: 'live-demo',
    type: 'live-demo',
    title: 'We Can Model Any Location Right Now'
  },
  
  // 8. Deployment Architecture
  {
    id: 'deployment',
    type: 'deployment-architecture',
    title: 'Deployment Architecture'
  },
  
  // 9. Case Study - Yamuna (keep your existing one)
  {
    id: 'yamuna-validation',
    type: 'case-study',
    title: 'September 2025 Yamuna Flooding',
    subtitle: 'IIT Delhi Validation',
    metrics: [
      { label: 'IoU Accuracy', value: '0.774', context: 'IIT Delhi HydroSense Lab' },
      { label: 'Processing Time', value: '3.25 min', context: 'Per 200 sq km tile' },
      { label: 'Precision', value: '10m', context: 'Spatial resolution' }
    ],
    conclusion: 'Validated capability to predict flood extent at coordinate-level precision',
    image: '/yamuna-validation.jpg'
  },
  
  // 10. Validation Partners
  {
    id: 'validation',
    type: 'validation',
    title: 'Institutional Validation',
    partners: [
      { 
        name: 'IIT Delhi', 
        role: 'Technical validation - 0.774 IoU accuracy', 
        status: 'Complete', 
        lead: 'Prof. Manabendra Saharia (ex-NASA/NCAR)' 
      },
      { 
        name: 'CEEW', 
        role: 'Policy research & MP government presentation', 
        status: 'Active', 
        lead: 'Vaibhav Chugh - presenting to MP govt this week' 
      },
      { 
        name: 'Stanford University', 
        role: 'Post-doctoral researcher collaboration', 
        status: 'Active', 
        lead: 'International academic validation' 
      },
      { 
        name: 'NDMA', 
        role: 'Operational deployment & national standards', 
        status: 'Today', 
        lead: 'Decision on mandate pathway' 
      }
    ]
  },
  
  // 11. Mandate Pathway
  {
    id: 'mandate',
    type: 'mandate-pathway',
    title: 'The Mandate Pathway'
  },
  
  // 12. Framework - 6 Month Pilot
  {
    id: 'framework',
    type: 'framework',
    title: '6-Month Pilot Framework'
  },
  
  // 13. Commitment
  {
    id: 'commitment',
    type: 'commitment',
    title: 'Our Commitment to NDMA'
  },
  
  // 14. Next Steps
  {
    id: 'next-steps',
    type: 'next-steps',
    title: 'Next Steps'
  }
];
