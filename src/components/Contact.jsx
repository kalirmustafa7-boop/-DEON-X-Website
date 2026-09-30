import { useState } from 'react'
import { site } from '../data/site'
import { useInView } from '../hooks/useInView'
import { submitContact } from '../services/contact'

const initialFields = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState('idle')

  function updateField(event) {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    try {
      await submitContact({
        name: fields.name.trim(),
        email: fields.email.trim(),
        message: fields.message.trim(),
      })
      setFields(initialFields)
      setStatus('sent')
    } catch (error) {
      setStatus(error.code === 'NOT_CONFIGURED' ? 'unconfigured' : 'error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div
        ref={ref}
        className={`section-in mx-auto grid max-w-6xl gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:gap-24 ${
          inView ? 'is-visible' : ''
        }`}
      >
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            LET&apos;S CREATE
            <br />
            SOMETHING.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            For collaborations, ideas or general inquiries, get in touch.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block font-display text-xl break-all text-paper underline decoration-violet/70 decoration-1 underline-offset-8 transition-colors hover:text-violet md:text-2xl"
          >
            {site.email}
          </a>
        </div>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate={false}>
          <label className="block">
            <span className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              value={fields.name}
              onChange={updateField}
              className="mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-base text-paper outline-none transition-colors focus:border-violet"
            />
          </label>
          <label className="block">
            <span className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={fields.email}
              onChange={updateField}
              className="mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-base text-paper outline-none transition-colors focus:border-violet"
            />
          </label>
          <label className="block">
            <span className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={fields.message}
              onChange={updateField}
              className="mt-3 w-full resize-y border-0 border-b border-line bg-transparent py-3 text-base text-paper outline-none transition-colors focus:border-violet"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex h-12 w-fit items-center bg-paper px-6 text-[0.75rem] tracking-[0.16em] text-ink uppercase transition-colors hover:bg-violet hover:text-paper disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending' : 'Send message'}
          </button>
          {status === 'sent' ? (
            <p className="text-sm text-muted" role="status">
              Message sent.
            </p>
          ) : null}
          {status === 'unconfigured' ? (
            <p className="text-sm text-muted" role="status">
              The form is not connected yet. Please write to us by email.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="text-sm text-muted" role="alert">
              The message could not be sent. Please try again, or use email.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
