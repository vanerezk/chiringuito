import Reveal from '../ui/Reveal';

function Contact({section}) {
  return (
    <section
      id='contact'
      className='section-padding pt-6'>
      <div className='container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
        <Reveal>
          <article className='card-shell p-8'>
            <p className='section-kicker'>{section.kicker}</p>
            <h2 className='section-title'>{section.title}</h2>

            <div className='mt-6 space-y-4 text-lg text-slate-700'>
              <p>
                <span className='font-bold text-sea-800'>{section.phoneLabel}</span>
                <br />
                <a
                  href='tel:+34685017737'
                  className='transition hover:text-sea-600'>
                  +34 685 01 77 37
                </a>
              </p>
              <p>
                <span className='font-bold text-sea-800'>{section.addressLabel}</span>
                <br />
                {section.address}
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className='glass-panel p-4'>
            <form
              className='rounded-[1.7rem] bg-white p-6 sm:p-8'
              onSubmit={(event) => event.preventDefault()}>
              <div className='grid gap-5'>
                <div>
                  <label
                    className='mb-2 block text-sm font-bold uppercase tracking-[0.24em] text-sea-700'
                    htmlFor='name'>
                    {section.form.name}
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder={section.form.namePlaceholder}
                    className='w-full rounded-2xl border border-sand-200 bg-sand-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sea-400 focus:bg-white focus:ring-4 focus:ring-sea-100'
                  />
                </div>

                <div>
                  <label
                    className='mb-2 block text-sm font-bold uppercase tracking-[0.24em] text-sea-700'
                    htmlFor='email'>
                    {section.form.email}
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder={section.form.emailPlaceholder}
                    className='w-full rounded-2xl border border-sand-200 bg-sand-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sea-400 focus:bg-white focus:ring-4 focus:ring-sea-100'
                  />
                </div>

                <div>
                  <label
                    className='mb-2 block text-sm font-bold uppercase tracking-[0.24em] text-sea-700'
                    htmlFor='message'>
                    {section.form.message}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    placeholder={section.form.messagePlaceholder}
                    className='w-full rounded-2xl border border-sand-200 bg-sand-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sea-400 focus:bg-white focus:ring-4 focus:ring-sea-100'
                  />
                </div>

                <button
                  type='submit'
                  className='btn-primary'>
                  {section.form.submit}
                </button>
              </div>
            </form>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
