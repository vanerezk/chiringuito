import {useEffect, useState} from 'react';
import {menuPdfPath} from '../../data/siteData';

const languageButtons = [
  {code: 'es', label: 'ES', aria: 'Espanol'},
  {code: 'en', label: 'EN', aria: 'English'},
  {code: 'de', label: 'DE', aria: 'Deutsch'},
];

function Navbar({nav, brand, language, onLanguageChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 18);

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'border-b border-white/10 bg-sea-800/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}>
      <nav
        className='container-page flex items-center justify-between py-4'
        aria-label={nav.ariaLabel}>
        <a
          href='#home'
          className='font-serif text-3xl font-semibold text-white'>
          {brand.name}
        </a>

        <button
          type='button'
          aria-label={nav.menuToggleLabel}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className='inline-flex rounded-full border border-white/30 bg-white/10 p-3 text-white md:hidden'>
          <svg
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div className='hidden items-center gap-5 md:flex'>
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm font-semibold text-white/90 transition hover:text-white'>
              {link.label}
            </a>
          ))}
          <div className='flex items-center rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-md'>
            {languageButtons.map((item) => (
              <button
                key={item.code}
                type='button'
                aria-label={`${nav.languageLabel}: ${item.aria}`}
                onClick={() => onLanguageChange(item.code)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  language === item.code
                    ? 'bg-white text-sea-800'
                    : 'text-white/90 hover:text-white'
                }`}>
                {item.label}
              </button>
            ))}
          </div>
          <a
            href={menuPdfPath}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full bg-sand-100 px-5 py-2 text-sm font-bold text-sea-800 transition hover:bg-white'>
            {nav.pdfLabel}
          </a>
        </div>
      </nav>

      <div
        className={`mx-4 overflow-hidden rounded-3xl border border-white/15 bg-sea-800/95 px-4 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
        <div className='flex flex-col gap-1 pt-4 text-white'>
          <div className='mb-2 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-1'>
            {languageButtons.map((item) => (
              <button
                key={item.code}
                type='button'
                aria-label={`${nav.languageLabel}: ${item.aria}`}
                onClick={() => onLanguageChange(item.code)}
                className={`flex-1 rounded-xl px-3 py-2 text-xs font-bold transition ${
                  language === item.code ? 'bg-white text-sea-800' : 'text-white'
                }`}>
                {item.label}
              </button>
            ))}
          </div>
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white/10'
              onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={menuPdfPath}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-2 rounded-2xl bg-sand-100 px-4 py-3 text-sm font-bold text-sea-800'
            onClick={() => setIsOpen(false)}>
            {nav.pdfLabel}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
