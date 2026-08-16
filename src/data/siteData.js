export const menuPdfPath = '/assets/menu.pdf';

import berenjenaImage from '../assets/berenjena.png';
import boqueronesImage from '../assets/boquerones.png';
import foodImage from '../assets/food.png';
import langostaImage from '../assets/langosta.png';
import lastImage from '../assets/last.png';
import paellaImage from '../assets/paella.png';
import terrazaImage from '../assets/terraza.png';

const sharedGallery = [
  {image: foodImage},
  {image: boqueronesImage},
  {image: paellaImage},
  {image: langostaImage},
  {image: berenjenaImage},
  {image: terrazaImage},
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
          title: 'Boquerones de Malaga',
          description:
            'Pescado fresco preparado al momento con tecnica precisa y sabor costero autentico.',
          image: boqueronesImage,
        },
        {
          title: 'Paella Marinera',
          description:
            'Arroz meloso de marisco con fondo intenso y acabado fino para compartir sin prisa.',
          image: paellaImage,
        },
        {
          title: 'Langosta a la Plancha',
          description:
            'Textura suave, marcado de plancha y un final limpio con aceite de oliva virgen extra.',
          image: langostaImage,
        },
      ],
    },
    gallery: {
      kicker: 'Galeria',
      title: 'Instantes de cocina, mar y sobremesa',
      items: [
        {label: 'Espetos', ...sharedGallery[0]},
        {label: 'Boquerones', ...sharedGallery[1]},
        {label: 'Paella', ...sharedGallery[2]},
        {label: 'Langosta', ...sharedGallery[3]},
        {label: 'Berenjena', ...sharedGallery[4]},
        {label: 'Terraza', ...sharedGallery[5]},
      ],
    },
    contact: {
      kicker: 'Contacto',
      title: 'Reserva tu mesa frente al Mediterraneo',
      phoneLabel: 'Telefono',
      addressLabel: 'Direccion',
      address: 'Paseo Maritimo Antonio Machado 67, Malaga',
      mapTitle: 'Ubicacion en Google Maps',
      mapLinkLabel: 'Abrir mapa',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Paseo+Maritimo+Antonio+Machado+67+Malaga&output=embed',
      mapExternalUrl:
        'https://www.google.com/maps/search/?api=1&query=Paseo+Maritimo+Antonio+Machado+67+Malaga',
      closingImage: lastImage,
      closingImageAlt: 'Vista final junto al mar en La Pacheca',
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
          title: 'Malaga Anchovies',
          description:
            'Freshly prepared local fish with precise cooking and authentic coastal flavor.',
          image: boqueronesImage,
        },
        {
          title: 'Seafood Paella',
          description: 'Rich seafood rice with deep flavor and a polished finish for sharing.',
          image: paellaImage,
        },
        {
          title: 'Grilled Lobster',
          description:
            'Delicate texture, seared finish and extra virgin olive oil for a clean Mediterranean profile.',
          image: langostaImage,
        },
      ],
    },
    gallery: {
      kicker: 'Gallery',
      title: 'Moments of cuisine, sea views and long table talks',
      items: [
        {label: 'Espetos', ...sharedGallery[0]},
        {label: 'Anchovies', ...sharedGallery[1]},
        {label: 'Paella', ...sharedGallery[2]},
        {label: 'Lobster', ...sharedGallery[3]},
        {label: 'Aubergine', ...sharedGallery[4]},
        {label: 'Terrace', ...sharedGallery[5]},
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Book your table by the Mediterranean',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      address: 'Paseo Maritimo Antonio Machado 67, Malaga',
      mapTitle: 'Location on Google Maps',
      mapLinkLabel: 'Open map',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Paseo+Maritimo+Antonio+Machado+67+Malaga&output=embed',
      mapExternalUrl:
        'https://www.google.com/maps/search/?api=1&query=Paseo+Maritimo+Antonio+Machado+67+Malaga',
      closingImage: lastImage,
      closingImageAlt: 'Closing seaside moment at La Pacheca',
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
          title: 'Boquerones aus Malaga',
          description:
            'Frischer Fisch, punktgenau zubereitet, mit authentischem Geschmack der andalusischen Kuste.',
          image: boqueronesImage,
        },
        {
          title: 'Meeresfruchte-Paella',
          description: 'Cremiger Reis mit intensivem Meeresaroma, ideal zum Teilen.',
          image: paellaImage,
        },
        {
          title: 'Languste von der Plancha',
          description:
            'Feine Textur, kurz angegrillt und mit extra nativem Olivenol mediterran vollendet.',
          image: langostaImage,
        },
      ],
    },
    gallery: {
      kicker: 'Galerie',
      title: 'Momente aus Kuche, Meerblick und langen Abenden',
      items: [
        {label: 'Espetos', ...sharedGallery[0]},
        {label: 'Boquerones', ...sharedGallery[1]},
        {label: 'Paella', ...sharedGallery[2]},
        {label: 'Languste', ...sharedGallery[3]},
        {label: 'Aubergine', ...sharedGallery[4]},
        {label: 'Terrasse', ...sharedGallery[5]},
      ],
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Reservieren Sie Ihren Tisch am Mittelmeer',
      phoneLabel: 'Telefon',
      addressLabel: 'Adresse',
      address: 'Paseo Maritimo Antonio Machado 67, Malaga',
      mapTitle: 'Standort in Google Maps',
      mapLinkLabel: 'Karte offnen',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Paseo+Maritimo+Antonio+Machado+67+Malaga&output=embed',
      mapExternalUrl:
        'https://www.google.com/maps/search/?api=1&query=Paseo+Maritimo+Antonio+Machado+67+Malaga',
      closingImage: lastImage,
      closingImageAlt: 'Abendstimmung am Meer bei La Pacheca',
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
