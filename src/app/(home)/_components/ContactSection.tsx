'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem muito curta'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    const phoneNumber = '5516999976746' // Substitua pelo número real
    const text = `Olá, meu nome é ${data.name}.%0AEmail: ${data.email}%0A${data.message}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`

    window.open(whatsappUrl, '_blank')
    toast.success('Mensagem enviada com sucesso!')
    reset() // limpa o formulário após o envio
  }

  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center bg-zinc-500/20 backdrop-blur-sm rounded-lg p-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h2>

        <motion.p
          className="mb-10 text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tem alguma dúvida, pedido de oração ou quer falar com a gente?
        </motion.p>

        <motion.form
          className="space-y-4 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input placeholder="Nome" {...register('name')} className='bg-zinc-500/20 backdrop-blur-sm rounded-lg text-zinc-400' />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input type="email" placeholder="E-mail" {...register('email')} className='bg-zinc-500/20 backdrop-blur-sm rounded-lg text-zinc-400'/>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Textarea placeholder="Sua mensagem" rows={4} {...register('message')} className='bg-zinc-500/20 backdrop-blur-sm rounded-lg text-zinc-400'/>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="rounded-full px-10 py-6 cursor-pointer hover:bg-green-500 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              Enviar para WhatsApp
            </Button>
          </div>
        </motion.form>

        <div className="mt-12 flex justify-center space-x-6">
          <a href="mailto:contato@cristoreinachurch.com" aria-label="Email" className="text-zinc-700 hover:text-primary">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/cristoreinachurchoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-700 hover:text-primary">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/cristoreinachurch" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-700 hover:text-primary">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
