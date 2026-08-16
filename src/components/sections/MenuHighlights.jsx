import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';

function MenuHighlights({section}) {
  return (
    <section
      id='menu'
      className='section-padding'>
      <div className='container-page'>
        <Reveal>
          <p className='section-kicker'>{section.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className='section-title'>{section.title}</h2>
        </Reveal>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {section.items.map((dish, index) => (
            <Reveal
              key={dish.title}
              delay={index * 100}>
              <article className='card-shell overflow-hidden'>
                <SmartImage
                  src={dish.image}
                  alt={dish.title}
                  className='h-64 w-full object-cover'
                  fallbackLabel={dish.title}
                />
                <div className='p-6'>
                  <h3 className='font-serif text-2xl font-semibold text-sea-800'>{dish.title}</h3>
                  <p className='mt-3 text-slate-600'>{dish.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;
