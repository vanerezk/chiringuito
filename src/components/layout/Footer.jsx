function Footer({brand, footer, contact}) {
  return (
    <footer className='mt-8 border-t border-sea-900/10 bg-sea-800 px-4 py-14 text-white sm:px-6 lg:px-8'>
      <div className='container-page grid gap-8 md:grid-cols-2 md:items-end'>
        <div>
          <p className='font-serif text-3xl font-semibold'>{brand.name}</p>
          <p className='mt-2 text-sm uppercase tracking-[0.3em] text-white/65'>{brand.subtitle}</p>
          <p className='mt-5 text-white/75'>{contact.address}</p>
        </div>

        <div className='flex flex-wrap gap-3 md:justify-end'>
          {footer.socials.map((social) => (
            <a
              key={social}
              href='#'
              className='rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/14'>
              {social}
            </a>
          ))}
        </div>
      </div>

      <div className='container-page mt-10 border-t border-white/10 pt-6 text-sm text-white/60'>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
