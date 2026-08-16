import Reveal from '../ui/Reveal';

function Features({section}) {
  return (
    <section
      id='features'
      className='section-padding'>
      <div className='container-page'>
        <Reveal>
          <p className='section-kicker'>{section.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className='section-title'>{section.title}</h2>
        </Reveal>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {section.items.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 90}>
              <article className='card-shell p-6'>
                <h3 className='font-serif text-2xl font-semibold text-sea-800'>{feature.title}</h3>
                <p className='mt-3 text-slate-600'>{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
