import {imageMap} from '../../utils/imageMap';
import {menuPdfPath} from '../../data/siteData';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';

function Hero({hero}) {
  return (
    <section
      id='home'
      className='relative min-h-screen overflow-hidden'>
      <div className='absolute inset-0'>
        <SmartImage
          src={imageMap.heroImage}
          alt={hero.imageAlt}
          className='h-full w-full object-cover'
          fallbackLabel='Hero pendiente'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-sea-800/30 via-sea-800/30 to-sea-800/55' />
      </div>

      <div className='container-page relative flex min-h-screen items-center py-28 sm:py-32'>
        <div className='max-w-3xl text-white'>
          <Reveal>
            <p className='inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md'>
              {hero.badge}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className='mt-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl'>
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className='mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg'>
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className='mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
              <a
                href='#menu'
                className='btn-secondary bg-sand-100 text-sea-800 hover:bg-white'>
                {hero.actions.menu}
              </a>
              <a
                href='#contact'
                className='btn-primary bg-white/20 text-white hover:bg-white/30'>
                {hero.actions.reserve}
              </a>
              <a
                href={menuPdfPath}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary bg-sea-700/85 text-white hover:bg-sea-700'>
                {hero.actions.pdf}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
