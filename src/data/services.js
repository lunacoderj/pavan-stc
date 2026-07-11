import { Home, Building2, Store, Construction, Pipette, Container } from 'lucide-react';

export const services = [
  {
    id: 'septic',
    title: 'Septic Tank Cleaning',
    description: 'Complete septic tank pumping and deep cleaning for residential and commercial properties.',
    scenario: 'Perfect for households and businesses experiencing slow drains or foul odors.',
    icon: Home,
    image: '/service_septic_tank_1783733470515.png',
    details: 'A blocked or full septic tank causes severe hygiene issues and property damage. Our professional septic tank cleaning service uses high-capacity vacuum trucks to completely remove waste, followed by high-pressure water jetting to clean the tank walls. We ensure zero-mess operations with responsible waste disposal at authorized municipal facilities.',
    process: [
      { step: 1, title: 'Rapid Inspection', desc: 'We locate and assess your septic tank to determine the best approach.' },
      { step: 2, title: 'Power Suction', desc: 'Our advanced vacuum pumps quickly remove all solid and liquid waste.' },
      { step: 3, title: 'Deep Sanitize', desc: 'We pressure wash the tank interior to clear any stubborn residue.' },
      { step: 4, title: 'Flow Check', desc: 'We verify that your drains are clear and flowing freely before closing.' }
    ]
  },
  {
    id: 'manhole',
    title: 'Manhole Cleaning',
    description: 'Professional clearing of blocked manholes, underground drains and sewage systems.',
    scenario: 'For residential complexes, municipal areas and community drainage blockages.',
    icon: Construction,
    image: '/service_manhole_cleaning_1783733481452.png',
    details: 'Blocked manholes lead to severe flooding, foul smells, and community health risks. Our teams are equipped with heavy-duty safety gear, gas detection equipment, and ultra-high-pressure water jetting systems to blast through the toughest blockages including roots, solid waste, and hardened sludge.',
    process: [
      { step: 1, title: 'Traffic & Safety', desc: 'We secure the area to protect both the public and our workers.' },
      { step: 2, title: 'Hazard Testing', desc: 'We check for dangerous gases before commencing any deep work.' },
      { step: 3, title: 'Jet-Blast Clearing', desc: 'High-pressure water jets break down massive obstructions instantly.' },
      { step: 4, title: 'Waste Disposal', desc: 'Extracted debris is safely vacuumed and disposed of according to regulations.' }
    ]
  },
  {
    id: 'drainline',
    title: 'Drain Line Cleaning',
    description: 'High-pressure jetting to clear blocked drain lines, underground pipes and sewer connections.',
    scenario: 'Ideal for recurring blockages, tree root intrusion and slow-draining pipes.',
    icon: Pipette,
    image: '/service_drain_line_1783733491651.png',
    details: 'Drain lines accumulate grease, sludge, and debris over time causing slow drainage and eventual blockages. Our high-pressure hydro jetting technology can clear even the most stubborn pipe blockages without damaging the pipe structure. We handle both residential and commercial drain line cleaning.',
    process: [
      { step: 1, title: 'Line Inspection', desc: 'We identify the blockage location and assess the pipe condition.' },
      { step: 2, title: 'Hydro Jetting', desc: 'High-pressure water jets scour the pipe walls and clear debris.' },
      { step: 3, title: 'Flow Verification', desc: 'We run water through the system to confirm full clearance.' },
      { step: 4, title: 'Preventive Advice', desc: 'We provide maintenance tips to prevent future blockages.' }
    ]
  },
  {
    id: 'grease',
    title: 'Grease Trap Cleaning',
    description: 'Specialized grease extraction for commercial kitchens, restaurants and food processing units.',
    scenario: 'Essential for maintaining hygiene and preventing foul odors in eateries.',
    icon: Store,
    image: '/service_grease_trap_1783733503528.png',
    details: 'Commercial kitchens produce large amounts of fats, oils, and grease (FOG) which can quickly clog drainage systems and create severe health hazards. We offer specialized grease trap cleaning and maintenance programs. Our service thoroughly cleans the trap and scrapes hardened grease from the walls to ensure compliance with health regulations.',
    process: [
      { step: 1, title: 'Trap Inspection', desc: 'We measure FOG levels to determine the required cleaning depth.' },
      { step: 2, title: 'Pump & Scrape', desc: 'We pump out the liquids and manually scrape the hardened grease.' },
      { step: 3, title: 'Flow Testing', desc: 'We test water flow to ensure all connecting pipes are fully clear.' },
      { step: 4, title: 'Documentation', desc: 'We provide maintenance logs for your health inspector compliance.' }
    ]
  },
  {
    id: 'soakpit',
    title: 'Soak Pit Cleaning',
    description: 'Deep cleaning and restoration of soak pits to ensure proper water absorption and drainage.',
    scenario: 'For properties with overflowing or non-functional soak pits.',
    icon: Container,
    image: '/service_soak_pit_1783733517513.png',
    details: 'Soak pits lose their absorption capacity over time due to silt, grease, and solid waste buildup. Our soak pit cleaning service involves complete waste extraction, wall cleaning, and filter media restoration. We ensure the pit regains its original drainage efficiency, preventing water logging and property damage.',
    process: [
      { step: 1, title: 'Pit Assessment', desc: 'We evaluate the soak pit condition and absorption capacity.' },
      { step: 2, title: 'Waste Extraction', desc: 'We vacuum out all accumulated sludge and solid waste.' },
      { step: 3, title: 'Wall Cleaning', desc: 'High-pressure jets clean the pit walls and restore porosity.' },
      { step: 4, title: 'Capacity Test', desc: 'We test drainage flow to confirm the pit is functioning properly.' }
    ]
  }
];
