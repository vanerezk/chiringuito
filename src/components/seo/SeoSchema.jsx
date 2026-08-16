function SeoSchema({language, meta}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'La Pacheca',
    description: meta.description,
    inLanguage: language,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paseo Maritimo Antonio Machado 67',
      addressLocality: 'Malaga',
      postalCode: '29002',
      addressCountry: 'ES',
    },
    telephone: '+34 685 01 77 37',
    servesCuisine: ['Andalusian', 'Mediterranean', 'Seafood'],
    url: siteUrl,
  };

  return <script type='application/ld+json'>{JSON.stringify(schema)}</script>;
}

export default SeoSchema;
