import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';

function Gallery({section}) {
  return (
    <section
      id='gallery'
      className='section-padding'>
      <div className='container-page'>
        <Reveal>
          <p className='section-kicker'>{section.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className='section-title'>{section.title}</h2>
        </Reveal>

        <div className='mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
          {section.items.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 85}>
              <figure className='card-shell relative aspect-[4/3] overflow-hidden'>
                <SmartImage
                  src={item.image}
                  alt={item.label}
                  className='h-full w-full object-cover'
                  fallbackLabel={item.label}
                />
                <figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-sea-800/85 to-transparent px-5 py-4 text-sm font-bold uppercase tracking-[0.28em] text-white'>
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
