import {useEffect, useState} from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import MenuHighlights from './components/sections/MenuHighlights';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import SeoSchema from './components/seo/SeoSchema';
import {siteContent} from './data/siteData';

function getInitialLanguage() {
  if (typeof navigator === 'undefined') return 'en';

  const candidates = [navigator.language, ...(navigator.languages || [])]
    .filter(Boolean)
    .map((value) => value.toLowerCase());

  if (candidates.some((lang) => lang.startsWith('de'))) return 'de';
  if (candidates.some((lang) => lang.startsWith('es'))) return 'es';
  return 'en';
}

function upsertMetaTag(attr, key, value) {
  if (!value) return;

  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
}

function upsertCanonicalLink(url) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const copy = siteContent[language] || siteContent.en;

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const ogImage = copy.meta.ogImage || import.meta.env.VITE_DEFAULT_OG_IMAGE;
    const localeMap = {
      es: 'es_ES',
      en: 'en_US',
      de: 'de_DE',
    };
    const locale = localeMap[language] || 'en_US';

    document.documentElement.lang = language;
    document.title = copy.meta.title;

    upsertMetaTag('name', 'description', copy.meta.description);
    upsertMetaTag('property', 'og:title', copy.meta.title);
    upsertMetaTag('property', 'og:description', copy.meta.description);
    upsertMetaTag('property', 'og:url', siteUrl);
    upsertMetaTag('property', 'og:locale', locale);
    upsertMetaTag('property', 'og:image', ogImage);
    upsertMetaTag('name', 'twitter:title', copy.meta.title);
    upsertMetaTag('name', 'twitter:description', copy.meta.description);
    upsertMetaTag('name', 'twitter:image', ogImage);
    upsertCanonicalLink(siteUrl);
  }, [copy.meta.description, copy.meta.title, language]);

  return (
    <div className='overflow-x-hidden'>
      <SeoSchema
        language={language}
        meta={copy.meta}
      />
      <Navbar
        nav={copy.nav}
        brand={copy.brand}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero hero={copy.hero} />
        <Features section={copy.features} />
        <MenuHighlights section={copy.menu} />
        <Gallery section={copy.gallery} />
        <Contact section={copy.contact} />
      </main>
      <Footer
        brand={copy.brand}
        footer={copy.footer}
        contact={copy.contact}
      />
    </div>
  );
}

export default App;
