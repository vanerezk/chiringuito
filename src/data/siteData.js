export const menuPdfPath = '/assets/menu.pdf';

const sharedGallery = [
  {image: '/assets/food.png'},
  {image: '/assets/food2.png'},
  {image: '/assets/food3.png'},
  {image: '/assets/food5.png'},
  {image: '/assets/terraza.png'},
  {image: '/assets/last.png'},
];

export const siteContent = {
  es: {
    meta: {
      title: 'La Pacheca | Chiringuito premium en Malaga',
      description:
        'Chiringuito premium frente al mar en Malaga con brasas al momento, marisco fresco y una experiencia mediterranea inolvidable.',
      ogImage: '/assets/terraza.png',
    },
    brand: {
      name: 'La Pacheca',
      subtitle: 'Chiringuito premium en Malaga',
    },
    nav: {
      ariaLabel: 'Principal',
      menuToggleLabel: 'Abrir menu',
      links: [
        {href: '#home', label: 'Inicio'},
        {href: '#features', label: 'Nuestra esencia'},
        {href: '#menu', label: 'Carta'},
        {href: '#gallery', label: 'Galeria'},
        {href: '#contact', label: 'Contacto'},
      ],
      pdfLabel: 'Carta PDF',
      languageLabel: 'Idioma',
    },
    hero: {
      badge: 'Chiringuito premium en la Costa del Sol',
      title: 'Alta cocina de costa con alma malaguena',
      subtitle:
        'Disfruta de una mesa frente al mar donde el producto fresco, las brasas y la hospitalidad andaluza crean una experiencia sofisticada y cercana.',
      actions: {
        menu: 'Ver carta',
        reserve: 'Reservar experiencia',
        pdf: 'Carta PDF',
      },
      imageAlt: 'Vista de la playa de Malaga',
    },
    features: {
      kicker: 'Nuestra esencia',
      title: 'Cada detalle pensado para una experiencia memorable',
      items: [
        {
          title: 'Mercado fresco cada manana',
          description:
            'Seleccion diaria de lonja para una cocina de temporada con sabor puro y elegante.',
        },
        {
          title: 'Primera linea de mar',
          description:
            'Terraza abierta, luz mediterranea y una atmosfera que invita a alargar la sobremesa.',
        },
        {
          title: 'Andalucia contemporanea',
          description: 'Recetas de raiz elevadas con tecnica actual y presentacion cuidada.',
        },
        {
          title: 'Servicio atento y natural',
          description:
            'Un equipo profesional que acompana cada servicio con ritmo, calidez y precision.',
        },
      ],
    },
    menu: {
      kicker: 'Carta destacada',
      title: 'Firma gastronomica entre mar y brasa',
      items: [
        {
          title: 'Espetos de Sardina',
          description:
            'La tradicion malaguena en su mejor version: fuego vivo, punto exacto y sabor limpio.',
          image: '/assets/food.png',
        },
        {
          title: 'Paella Marinera',
          description:
            'Arroz meloso de marisco con fondo intenso y acabado fino para compartir sin prisa.',
          image: '/assets/food3.png',
        },
        {
          title: 'Pulpo a la Brasa',
          description:
            'Pulpo tierno, marcado al carbon y terminado con aceite de oliva virgen extra.',
          image: '/assets/food4.png',
        },
      ],
    },
    gallery: {
      kicker: 'Galeria',
      title: 'Instantes de cocina, mar y sobremesa',
      items: [
        {label: 'Espetos', ...sharedGallery[0]},
        {label: 'Fritura', ...sharedGallery[1]},
        {label: 'Marisco', ...sharedGallery[2]},
        {label: 'Pulpo', ...sharedGallery[3]},
        {label: 'Terraza', ...sharedGallery[4]},
        {label: 'Atardecer', ...sharedGallery[5]},
      ],
    },
    contact: {
      kicker: 'Contacto',
      title: 'Reserva tu mesa frente al Mediterraneo',
      phoneLabel: 'Telefono',
      addressLabel: 'Direccion',
      address: 'Paseo Maritimo Antonio Machado 67, Malaga',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        messagePlaceholder: 'Indicanos fecha, hora y numero de comensales',
        submit: 'Enviar mensaje',
      },
    },
    footer: {
      socials: ['Instagram', 'Facebook', 'Tripadvisor'],
      copyright: '© 2026 La Pacheca. Todos los derechos reservados.',
    },
  },
  en: {
    meta: {
      title: 'La Pacheca | Premium beachfront restaurant in Malaga',
      description:
        'Premium beachfront chiringuito in Malaga with live embers, fresh seafood and an unforgettable Mediterranean dining experience.',
      ogImage: '/assets/terraza.png',
    },
    brand: {
      name: 'La Pacheca',
      subtitle: 'Premium chiringuito in Malaga',
    },
    nav: {
      ariaLabel: 'Primary',
      menuToggleLabel: 'Open menu',
      links: [
        {href: '#home', label: 'Home'},
        {href: '#features', label: 'Our essence'},
        {href: '#menu', label: 'Menu'},
        {href: '#gallery', label: 'Gallery'},
        {href: '#contact', label: 'Contact'},
      ],
      pdfLabel: 'Menu PDF',
      languageLabel: 'Language',
    },
    hero: {
      badge: 'Premium chiringuito on the Costa del Sol',
      title: 'Coastal fine dining with Malaga soul',
      subtitle:
        'Enjoy a beachfront table where fresh produce, open-fire grilling and Andalusian hospitality come together in a refined yet relaxed setting.',
      actions: {
        menu: 'View menu',
        reserve: 'Book experience',
        pdf: 'Menu PDF',
      },
      imageAlt: 'View of Malaga beach',
    },
    features: {
      kicker: 'Our essence',
      title: 'Every detail designed for a memorable service',
      items: [
        {
          title: 'Daily market freshness',
          description: 'Carefully sourced fish and seafood for seasonal cooking with pure flavor.',
        },
        {
          title: 'True beachfront location',
          description: 'Open terrace, Mediterranean light and an atmosphere made for long lunches.',
        },
        {
          title: 'Contemporary Andalusian cuisine',
          description: 'Rooted recipes elevated through modern technique and elegant presentation.',
        },
        {
          title: 'Warm and precise service',
          description:
            'A professional team that keeps each service smooth, attentive and personal.',
        },
      ],
    },
    menu: {
      kicker: 'Signature menu',
      title: 'Signature cuisine between sea and embers',
      items: [
        {
          title: 'Sardine Espetos',
          description:
            'A Malaga icon at its best: open-fire grilling, perfect point and clean flavor.',
          image: '/assets/food.png',
        },
        {
          title: 'Seafood Paella',
          description: 'Rich seafood rice with deep flavor and a polished finish for sharing.',
          image: '/assets/food3.png',
        },
        {
          title: 'Grilled Octopus',
          description: 'Tender octopus, charcoal-seared and finished with extra virgin olive oil.',
          image: '/assets/food4.png',
        },
      ],
    },
    gallery: {
      kicker: 'Gallery',
      title: 'Moments of cuisine, sea views and long table talks',
      items: [
        {label: 'Espetos', ...sharedGallery[0]},
        {label: 'Fried fish', ...sharedGallery[1]},
        {label: 'Seafood', ...sharedGallery[2]},
        {label: 'Octopus', ...sharedGallery[3]},
        {label: 'Terrace', ...sharedGallery[4]},
        {label: 'Sunset', ...sharedGallery[5]},
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Book your table by the Mediterranean',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      address: 'Paseo Maritimo Antonio Machado 67, Malaga',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@email.com',
        messagePlaceholder: 'Share date, time and number of guests',
        submit: 'Send message',
      },
    },
    footer: {
      socials: ['Instagram', 'Facebook', 'Tripadvisor'],
      copyright: '© 2026 La Pacheca. All rights reserved.',
    },
  },
  de: {
    meta: {
      title: 'La Pacheca | Premium Strandrestaurant in Malaga',
      description:
        'Premium Chiringuito direkt am Strand von Malaga mit frischem Fisch, Grillkohle und entspannter mediterraner Atmosphare.',
      ogImage: '/assets/terraza.png',
    },
    brand: {
      name: 'La Pacheca',
      subtitle: 'Premium Chiringuito in Malaga',
    },
    nav: {
      ariaLabel: 'Hauptnavigation',
      menuToggleLabel: 'Menu offnen',
      links: [
        {href: '#home', label: 'Start'},
        {href: '#features', label: 'Unser Stil'},
        {href: '#menu', label: 'Speisekarte'},
        {href: '#gallery', label: 'Galerie'},
        {href: '#contact', label: 'Kontakt'},
      ],
      pdfLabel: 'PDF Karte',
      languageLabel: 'Sprache',
    },
    hero: {
      badge: 'Premium Chiringuito an der Costa del Sol',
      title: 'Kustenkuche mit malagener Seele',
      subtitle:
        'Geniessen Sie einen Tisch direkt am Meer, wo frische Produkte, offene Glut und andalusische Gastfreundschaft zu einem eleganten Erlebnis werden.',
      actions: {
        menu: 'Speisekarte ansehen',
        reserve: 'Erlebnis buchen',
        pdf: 'PDF Karte',
      },
      imageAlt: 'Blick auf den Strand von Malaga',
    },
    features: {
      kicker: 'Unser Stil',
      title: 'Jedes Detail fur einen unvergesslichen Besuch',
      items: [
        {
          title: 'Frische vom Markt jeden Tag',
          description:
            'Sorgfaltig ausgewahlter Fisch und Meeresfruchte fur saisonale Kuche mit klarem Geschmack.',
        },
        {
          title: 'Direkt an der Promenade',
          description:
            'Offene Terrasse, mediterranes Licht und entspannte Atmosphare fur lange Mittagessen.',
        },
        {
          title: 'Andalusisch modern',
          description: 'Traditionelle Rezepte mit moderner Technik und stilvoller Prasentation.',
        },
        {
          title: 'Aufmerksamer Service',
          description:
            'Unser Team begleitet Sie professionell, herzlich und in fliessendem Englisch.',
        },
      ],
    },
    menu: {
      kicker: 'Unsere Empfehlungen',
      title: 'Signature-Kuche zwischen Meer und Glut',
      items: [
        {
          title: 'Sardinen-Espetos',
          description:
            'Malagas Klassiker vom offenen Feuer, perfekt gegrillt und voller Kustengeschmack.',
          image: '/assets/food.png',
        },
        {
          title: 'Meeresfruchte-Paella',
          description: 'Cremiger Reis mit intensivem Meeresaroma, ideal zum Teilen.',
          image: '/assets/food3.png',
        },
        {
          title: 'Oktopus vom Grill',
          description: 'Zarter Oktopus, auf Holzkohle markiert und mit Olivenol serviert.',
          image: '/assets/food4.png',
        },
      ],
    },
    gallery: {
      kicker: 'Galerie',
      title: 'Momente aus Kuche, Meerblick und langen Abenden',
      items: [
        {label: 'Espetos', ...sharedGallery[0]},
        {label: 'Frittierter Fisch', ...sharedGallery[1]},
        {label: 'Meeresfruchte', ...sharedGallery[2]},
        {label: 'Oktopus', ...sharedGallery[3]},
        {label: 'Terrasse', ...sharedGallery[4]},
        {label: 'Sonnenuntergang', ...sharedGallery[5]},
      ],
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Reservieren Sie Ihren Tisch am Mittelmeer',
      phoneLabel: 'Telefon',
      addressLabel: 'Adresse',
      address: 'Paseo Maritimo Antonio Machado 67, Malaga',
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        namePlaceholder: 'Ihr Name',
        emailPlaceholder: 'ihre@email.com',
        messagePlaceholder: 'Teilen Sie Datum, Uhrzeit und Personenzahl mit',
        submit: 'Nachricht senden',
      },
    },
    footer: {
      socials: ['Instagram', 'Facebook', 'Tripadvisor'],
      copyright: '© 2026 La Pacheca. Alle Rechte vorbehalten.',
    },
  },
};
