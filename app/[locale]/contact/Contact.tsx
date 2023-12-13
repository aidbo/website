'use client'

import { Form } from '~/components/ui/Form'
import { useTranslations } from 'next-intl'
import React from 'react'
import { TbMail } from 'react-icons/tb'
import { z } from 'zod'

const contactFormSchema = z.object({
  message: z.string().min(2),
  name: z.string().min(2),
  email: z.string().email(),
})
export type ContactFormSchema = z.infer<typeof contactFormSchema>
export function Contact() {
  const t = useTranslations('Contact')

  return (
    <>
      <h1>{t.rich('Heading')}</h1>

      <p>{t('Description')}</p>

      <Form.Root>
        <Form.Container>
          <header>
            <p className="flex flex-col text-sm tracking-tight text-stone-500 md:flex-row md:items-center">
              {t.rich('Tips', {
                email: (text) => (
                  <span className="inline-flex items-center space-x-0.5 text-stone-600 dark:text-stone-300 md:mx-1">
                    <TbMail className="h-4 w-4" />
                    <a
                      href="mailto:contact@aidbo.fun"
                      className="text-stone-600 no-underline hover:underline dark:text-stone-300"
                    >
                      {text}
                    </a>
                  </span>
                ),
              })}
            </p>
          </header>
        </Form.Container>

        <Form.Footer></Form.Footer>
      </Form.Root>
    </>
  )
}
