'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useState } from 'react';

// UI Local Components
import { CtaButton } from '@/shared/components';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                             CONTACT COMPOENENT                             */
/* -------------------------------------------------------------------------- */
function Contact() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [status, setStatus] = useState('');

/* -------------------------------- CONSTANTS ------------------------------- */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Envoi en cours...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message envoyé !');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus("Erreur lors de l'envoi.");
    }
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <section id="contact" className={styles.contactWrapper}>
        <div className={`${styles.contactContainer} container`}>
            <h1>
                <span>Let&apos;s start a</span>
                <span>project together</span>
            </h1>

            <div className={`${styles.arrow} flex items-end justify-end`}>
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
                    <title>arrow-up-right</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Artboard" transform="translate(-1019.000000, -279.000000)" stroke="#FFFFFF" strokeWidth="1.5">
                            <g id="arrow-up-right" transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <div className={styles.formAndContacts}>
                <div className={styles.form}>
                    <form className='flex flex-column' onSubmit={handleSubmit}>
                        <div className={styles.fieldWrapper}>
                            <label htmlFor='Name' className={styles.fielLabel}>Name</label>
                            <input 
                                className={styles.contactField} 
                                id='Name'
                                name='name' 
                                value={form.name}
                                data-name='Name' 
                                placeholder='ex: Zahra Kaabi'
                                type='text'
                                maxLength={256} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label htmlFor='Email' className={styles.fielLabel}>E-mail</label>
                            <input 
                                className={styles.contactField} 
                                id='Email'
                                name='email'
                                value={form.email}
                                data-name='Email' 
                                placeholder='ex: kaabizahra@gmail.com'
                                type='email'
                                maxLength={256} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label htmlFor='Message' className={styles.fielLabel}>Message</label>
                            <textarea
                                className={styles.contactField} 
                                id='Message'
                                name='message'
                                value={form.message}
                                data-name='Message'
                                placeholder='ex: Hello zahra, can you help me with...'
                                maxLength={5000} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`${styles.sendWrapper} w-fit-content`}>
                            <CtaButton content='Send message' value='send message' />
                        </div>
                        {status && <p>{status}</p>}
                    </form>
                </div>
                <div className={styles.contacts}>
                    <h5>Contact Details</h5>
                    <ul>
                        <li className='flex items-center'>kaabizahra@gmail.com</li>
                    </ul>
                    <h5>Socials</h5>
                    <ul>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Dribble</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Medium</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Github 1</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Github 2</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Contact;