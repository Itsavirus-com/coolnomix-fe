'use client'

import React from 'react'

import SuccessMessageCard from '@/components/success-message-card/SuccessMessageCard'

import { useSuccessLayout } from './success-layout.hook'

const SuccessLayout = () => {
  const { title, description, buttons, image, imageAlt } = useSuccessLayout()

  return (
    <section className='content-placement-center'>
      <SuccessMessageCard
        title={title}
        description={description}
        buttons={buttons}
        image={image}
        imageAlt={imageAlt}
      />
    </section>
  )
}

export default SuccessLayout
