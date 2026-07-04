// ✅  LLM-populated CONFIG — cross-reference against live CONFIG.js

const CONFIG = {
  businessName: "Mike's Painting Solutions",
  tagline: "Tampa's Most Trusted Residential & Commercial Painters",
  phone: "423-732-0647",
  phoneRaw: "4237320647",
  email: "",
  city: "Tampa",
  state: "Florida",
  stateShort: "FL",
  address: "",
  licenseNumber: "",
  colors: {
    primary: "#1A2F4F",
    secondary: "#2D3748",
  },
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    linkedin: "",
    yelp: "",
    houzz: "",
    nextdoor: "",
  },
  googleReviewsUrl: "",
  rating: "",
  reviewCount: 0,
  yearsExperience: 19,
  projectsCompleted: "0+",
  satisfactionRate: "100%",
  webhookUrl: "",
  metaPixelId: "",
  hero: {
    headline: "Your Trusted Tampa Painters for Residential & Commercial Excellence",
    subheadline: "Mike's Painting Solutions delivers superior quality, lasting finishes, and 100% satisfaction across Tampa Bay with nearly two decades of expertise.",
    ctaPrimary: "Get My Free Estimate",
    ctaSecondary: "See Our Work",
    heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=75&fm=webp&auto=format",
  },
  services: [
    {
      slug: "interior-painting",
      name: "Interior Painting",
      desc: "Transform your living spaces with Mike's Painting Solutions' expert interior painting services, creating beautiful, lasting finishes throughout your Tampa home.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=75&fm=webp&auto=format",
      longDesc: "Our interior painting services in Tampa are designed to revitalize your home's atmosphere. We meticulously prepare every surface, from walls and ceilings to trim and doors, ensuring a flawless and durable finish. Using premium paints and modern techniques, our skilled team minimizes disruption and delivers exceptional results that reflect your style and enhance your living environment. Trust Mike's Painting Solutions for a smooth, stress-free interior transformation.",
      benefits: [
        "Enhanced Aesthetic Appeal: Elevate your home's beauty with fresh, vibrant colors.",
        "Increased Property Value: A professional paint job adds significant market appeal.",
        "Surface Protection: High-quality paints protect walls from wear and tear.",
        "Expert Color Consultation: Guidance to choose the perfect palette for your space.",
        "Meticulous Preparation: Thorough patching, sanding, and priming for a smooth finish.",
        "Clean & Efficient Service: We respect your home, ensuring a tidy work area and timely completion.",
      ],
      faqs: [
        {
          question: "How long does interior painting typically take?",
          answer: "The duration depends on the size of the space and the complexity of the job. A standard room might take 1-2 days, while a whole house could take several days to a week. We provide a detailed timeline with your free estimate.",
        },
        {
          question: "Do I need to move all my furniture?",
          answer: "While we appreciate you moving smaller, delicate items, our team will carefully move and cover larger furniture pieces to protect them during the painting process. We ensure everything is returned to its original place.",
        },
        {
          question: "What kind of paint do you use for interiors?",
          answer: "We primarily use high-quality, low-VOC (Volatile Organic Compound) paints from trusted brands, ensuring a durable finish and healthier indoor air quality. We can discuss specific paint types and finishes that best suit your needs and preferences during our consultation.",
        },
        {
          question: "How do you protect my floors and belongings?",
          answer: "We use drop cloths, plastic sheeting, and painter's tape to meticulously protect all non-painted surfaces, including floors, furniture, and fixtures, ensuring no drips or splatters occur.",
        },
      ],
    },
    {
      slug: "exterior-painting",
      name: "Exterior Painting",
      desc: "Boost your curb appeal and protect your Tampa property with Mike's Painting Solutions' durable and beautiful exterior painting services.",
      image: "https://images.unsplash.com/photo-1558618047-f4e60cef8b3e?w=800&q=75&fm-webp&auto=format",
      longDesc: "The Florida climate can be harsh on your home's exterior. Our exterior painting services are designed to withstand Tampa's heat, humidity, and sun, providing long-lasting protection and a stunning finish. We begin with thorough pressure washing, surface repairs, and priming to ensure optimal adhesion and durability. Our experienced painters use premium, weather-resistant paints to give your home a fresh, vibrant look that enhances its curb appeal and value for years to come.",
      benefits: [
        "Superior Weather Protection: Shield your home from Tampa's sun, rain, and humidity.",
        "Enhanced Curb Appeal: Significantly improve your property's first impression and value.",
        "Preventative Maintenance: Protects against rot, mildew, and pest intrusion.",
        "Expert Surface Preparation: Comprehensive cleaning, patching, and priming for lasting results.",
        "Durable, Long-Lasting Finishes: We use high-quality, weather-resistant paints.",
        "Experienced Local Team: Knowledgeable about Tampa's specific climate challenges.",
      ],
      faqs: [
        {
          question: "How often should I repaint my home's exterior in Tampa?",
          answer: "Due to Tampa's climate, we generally recommend repainting your home's exterior every 5-7 years to maintain its protection and appearance. Regular inspections can help determine the optimal time.",
        },
        {
          question: "What kind of preparation is involved for exterior painting?",
          answer: "Preparation is key for exterior durability. We thoroughly pressure wash all surfaces, scrape loose paint, fill cracks and holes, caulk gaps, and prime bare wood or problem areas to ensure a smooth, adhesive base.",
        },
        {
          question: "Are your exterior paints resistant to mildew and fading?",
          answer: "Yes, we use high-quality exterior paints specifically formulated to resist mildew growth, fading from UV rays, and other weather-related wear common in the Tampa Bay area, ensuring your home looks great longer.",
        },
        {
          question: "Will you protect my landscaping and outdoor fixtures?",
          answer: "Absolutely. Our team takes great care to cover and protect all landscaping, plants, outdoor furniture, light fixtures, and windows from paint splatter and overspray throughout the entire project.",
        },
      ],
    },
    {
      slug: "cabinet-painting",
      name: "Cabinet Painting & Refinishing",
      desc: "Give your kitchen or bathroom a fresh, modern look without the cost of replacement with our expert cabinet painting and refinishing services in Tampa.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=75&fm-webp&auto=format",
      longDesc: "Cabinet painting and refinishing are cost-effective ways to update your kitchen or bathroom. Mike's Painting Solutions specializes in transforming tired, outdated cabinets into beautiful, like-new features. We follow a meticulous process, including careful removal, thorough cleaning, sanding, priming, and applying multiple coats of high-quality, durable cabinet-specific finishes. The result is a smooth, factory-like finish that will refresh your space and add significant value to your Tampa home.",
      benefits: [
        "Cost-Effective Renovation: Achieve a new look without the expense of full replacement.",
        "Modernized Aesthetic: Update outdated cabinets to a contemporary style.",
        "Durable, Smooth Finish: We use specialized paints for a factory-like, long-lasting surface.",
        "Extensive Color Options: Choose from a wide range of colors to match your decor.",
        "Minimal Disruption: Most work is done off-site, reducing impact on your daily routine.",
        "Increased Home Value: A fresh kitchen or bathroom significantly boosts property appeal.",
      ],
      faqs: [
        {
          question: "How long does the cabinet painting process take?",
          answer: "Typically, cabinet painting projects take about 5-7 days. This includes de-installation, off-site preparation and painting of doors and drawers, and on-site prep and painting of cabinet frames.",
        },
        {
          question: "Can you paint any type of cabinet material?",
          answer: "We can paint most cabinet materials, including wood, MDF, and laminate. During our consultation, we'll assess your specific cabinets to ensure they are suitable for painting and advise on the best approach.",
        },
        {
          question: "Will the painted finish be durable and easy to clean?",
          answer: "Yes, we use high-quality, durable cabinet-specific lacquers and enamels that are designed to withstand daily use, resist chipping, and are easy to clean, ensuring a beautiful and functional finish for years.",
        },
        {
          question: "Do I need to empty my cabinets completely?",
          answer: "Yes, we ask that you completely empty your cabinets and drawers before our team arrives. This allows us to work efficiently and ensures no items are damaged or stained during the process.",
        },
      ],
    },
    {
      slug: "commercial-painting",
      name: "Commercial Painting",
      desc: "Enhance your business's professional image with Mike's Painting Solutions' reliable and efficient commercial painting services across Tampa Bay.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&fm-webp&auto=format",
      longDesc: "First impressions matter, especially for businesses. Mike's Painting Solutions provides comprehensive commercial painting services for offices, retail spaces, warehouses, and more throughout Tampa. We understand the unique needs of commercial clients, offering flexible scheduling to minimize disruption to your operations. Our team delivers high-quality, durable finishes that reflect your brand's professionalism, using robust paints designed for high-traffic areas. Trust us to complete your project efficiently, on budget, and with minimal impact on your business.",
      benefits: [
        "Professional Image: A fresh coat of paint enhances your business's credibility and appeal.",
        "Minimized Disruption: Flexible scheduling to work around your business hours.",
        "Durable, High-Traffic Solutions: We use robust paints built to last in commercial environments.",
        "Increased Property Value: Attract more clients and tenants with a well-maintained exterior.",
        "Efficient Project Management: Timely completion with clear communication.",
        "Experienced Commercial Team: Skilled in handling projects of all sizes and complexities.",
      ],
      faqs: [
        {
          question: "Can you work around our business hours to avoid disruption?",
          answer: "Yes, we offer flexible scheduling options, including evenings and weekends, to minimize disruption to your business operations. We'll work closely with you to create a painting schedule that suits your needs.",
        },
        {
          question: "What types of commercial properties do you paint in Tampa?",
          answer: "We paint a wide range of commercial properties, including offices, retail stores, restaurants, medical facilities, warehouses, and multi-family residential buildings throughout the Tampa Bay area.",
        },
        {
          question: "Do you use specialized paints for commercial projects?",
          answer: "Yes, we often use commercial-grade paints that offer enhanced durability, washability, and specific properties like low-VOC for indoor air quality or anti-graffiti coatings, depending on the project's requirements.",
        },
        {
          question: "Are you insured for commercial painting projects?",
          answer: "Absolutely. Mike's Painting Solutions is fully licensed and insured, providing peace of mind for all our commercial clients. We adhere to all safety standards and regulations.",
        },
      ],
    },
    {
      slug: "deck-fence-staining",
      name: "Deck & Fence Staining",
      desc: "Restore and protect your outdoor living spaces with Mike's Painting Solutions' professional deck and fence staining services in Tampa.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=75&fm-webp&auto=format",
      longDesc: "Your deck and fence are significant investments that enhance your outdoor enjoyment. In Tampa's climate, they require proper protection. Our deck and fence staining services clean, restore, and protect these surfaces from weathering, UV damage, and mildew. We carefully prepare the wood, apply high-quality stains or sealants that penetrate deeply, and leave you with a beautiful, protected outdoor space that will last for years.",
      benefits: [
        "Extended Lifespan: Protects wood from rot, decay, and insect damage.",
        "Enhanced Appearance: Revitalizes faded wood with rich, natural colors.",
        "Weather Protection: Shields against sun, rain, and humidity common in Tampa.",
        "Mildew & Mold Resistance: Specialized treatments to combat fungal growth.",
        "Increased Property Value: Well-maintained outdoor structures boost home appeal.",
        "Expert Preparation: Thorough cleaning and sanding for optimal stain adhesion.",
      ],
      faqs: [
        {
          question: "How often should I stain my deck or fence in Tampa?",
          answer: "Given Tampa's climate, we typically recommend re-staining your deck every 2-3 years and your fence every 3-5 years, depending on the type of wood and exposure to the elements.",
        },
        {
          question: "What's the difference between staining and sealing?",
          answer: "Stains add color and penetrate the wood, offering UV protection and moisture resistance. Sealers primarily provide a clear protective barrier against moisture. Many products offer both staining and sealing properties for comprehensive protection.",
        },
        {
          question: "Do you clean the deck/fence before staining?",
          answer: "Yes, proper cleaning is crucial. We thoroughly power wash the deck or fence to remove dirt, grime, mildew, and loose old stain, ensuring the new stain adheres properly and provides a uniform finish.",
        },
        {
          question: "Can I choose the color of the stain?",
          answer: "Absolutely! We offer a wide range of stain colors, from transparent and semi-transparent to solid colors, allowing you to choose the perfect look that complements your home and personal style.",
        },
      ],
    },
    {
      slug: "colour-consultation",
      name: "Colour Consultation",
      desc: "Confidently choose the perfect paint colors for your Tampa home or business with expert guidance from Mike's Painting Solutions' color consultation.",
      image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=75&fm-webp&auto=format",
      longDesc: "Choosing the right colors can be daunting, but Mike's Painting Solutions makes it easy with our professional color consultation services. We consider your home's architectural style, existing decor, lighting conditions, and personal preferences to help you select a palette that creates the desired mood and enhances your space. Our experts understand how colors interact with Tampa's natural light and can guide you to choices that will look beautiful and last.",
      benefits: [
        "Expert Guidance: Navigate color choices with a professional eye for design.",
        "Cohesive Design: Ensure your chosen colors complement existing decor and architecture.",
        "Optimal Lighting Consideration: Select colors that look best in your home's unique light.",
        "Time & Stress Savings: Avoid costly mistakes and indecision with informed choices.",
        "Personalized Palette: Create a look that truly reflects your style and personality.",
        "Increased Confidence: Feel assured in your color selections before painting begins.",
      ],
      faqs: [
        {
          question: "What does a color consultation involve?",
          answer: "Our consultation involves an on-site visit where we discuss your vision, assess your space's lighting and existing elements, and provide expert recommendations for paint colors and finishes tailored to your preferences.",
        },
        {
          question: "How long does a typical color consultation take?",
          answer: "A standard color consultation usually takes about 1-2 hours, depending on the size of the project and the number of areas you'd like to discuss. We ensure ample time to address all your questions.",
        },
        {
          question: "Can you help with both interior and exterior color choices?",
          answer: "Yes, our color consultants are experienced in guiding both interior and exterior color selections. We help you choose palettes that enhance curb appeal and create inviting indoor environments, considering Tampa's unique aesthetic.",
        },
        {
          question: "What if I'm not happy with the suggested colors?",
          answer: "Our goal is your complete satisfaction. We work collaboratively, providing samples and discussing options until you feel confident and excited about your chosen colors. We ensure you love the palette before any paint is applied.",
        },
      ],
    },
  ],
  googleMapsEmbedUrl: "",
  serviceAreas: [
    { slug: "tampa", name: "Tampa", county: "" }
  ],
  testimonials: [
    {
      quote: "Mike's Painting Solutions did an incredible job on our home's interior. The team was professional, clean, and the quality of work is outstanding. Our living room feels brand new!",
      name: "Sarah",
      city: "Tampa",
    },
    {
      quote: "We hired Mike's Painting Solutions for our commercial office space in downtown Tampa, and they exceeded expectations. They worked around our schedule and delivered a flawless finish. Highly recommend!",
      name: "David",
      city: "Tampa",
    },
    {
      quote: "Our cabinets were desperate for an update, and Mike's team transformed them beautifully. It looks like a brand new kitchen for a fraction of the cost. Fantastic work!",
      name: "Maria",
      city: "Tampa",
    },
    {
      quote: "From the initial quote to the final walkthrough, Mike's Painting Solutions was a pleasure to work with. They repainted our exterior, and the house looks amazing and protected against the Florida weather.",
      name: "John",
      city: "Tampa",
    },
  ],
  processSteps: [
    { title: "Free On-Site Estimate", desc: "We walk the project with you, assess every surface, and give you a detailed written quote — broken down by area with zero surprise add-ons." },
    { title: "Surface Prep", desc: "Power washing, scraping, patching, caulking, and priming. The paint is only as good as the surface underneath it." },
    { title: "Professional Application", desc: "Two coats of premium paint, meticulously cut in and rolled or sprayed by trained painters who care about the corners." },
    { title: "Final Walkthrough", desc: "We go room by room with you before we call the job done. Touch-ups handled on the spot. We don't leave until you're happy." },
  ],
  faqs: [
    {
      question: "How do I get a free estimate for my painting project in Tampa?",
      answer: "Simply call us at 423-732-0647 or fill out the contact form on our website. We'll schedule a convenient time to visit your Tampa property, assess your needs, and provide a detailed, no-obligation quote.",
    },
    {
      question: "What areas of Tampa Bay do you serve?",
      answer: "Mike's Painting Solutions proudly serves Tampa and the surrounding areas in the Tampa Bay region. Contact us to confirm service availability in your specific neighborhood.",
    },
    {
      question: "How long has Mike's Painting Solutions been in business?",
      answer: "We have been providing dependable painting services to the Tampa Bay community since 2005, bringing nearly two decades of experience to every residential and commercial project.",
    },
    {
      question: "Do you offer a warranty on your painting services?",
      answer: "Yes, we stand behind the quality of our work. We offer a satisfaction guarantee and discuss specific warranty details for your project during the estimation process, ensuring your peace of mind.",
    },
    {
      question: "What kind of paint brands do you use?",
      answer: "We partner with leading paint manufacturers to use high-quality, durable paints that are best suited for the Florida climate and your specific project needs. We can discuss brand preferences during your consultation.",
    },
    {
      question: "Is Mike's Painting Solutions licensed and insured?",
      answer: "Yes, Mike's Painting Solutions is a fully licensed and insured painting contractor. We prioritize safety and professionalism on every job, protecting both our team and your property.",
    },
    {
      question: "How do you ensure a clean work environment?",
      answer: "Our team is committed to maintaining a clean and organized workspace. We meticulously cover furniture, floors, and non-painted surfaces, and we conduct thorough cleanup at the end of each workday and upon project completion.",
    },
    {
      question: "What steps do I need to take before the painters arrive?",
      answer: "We recommend removing small, delicate items and clearing pathways. For interior jobs, please empty cabinets if they are being painted. We will handle moving larger furniture and covering all surfaces.",
    },
  ],
  portfolioProjects: [
    { title: "4-Bedroom Home — Full Interior", category: "Interior", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80" },
    { title: "Victorian Exterior — Full Repaint", category: "Exterior", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80" },
    { title: "Kitchen Cabinet Transformation", category: "Cabinets", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
    { title: "12-Unit Corridor Repaint", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
    { title: "Cedar Deck — Oil Stain Restoration", category: "Deck & Fence", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80" },
    { title: "Office Suite — Low-VOC Repaint", category: "Commercial", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" },
  ],
  legal: {
    privacyPolicyDate: "May 1, 2025",
    termsDate: "May 1, 2025",
  },
};