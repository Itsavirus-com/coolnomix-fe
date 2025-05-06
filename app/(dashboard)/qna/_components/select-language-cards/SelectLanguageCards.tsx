import { useRouter } from 'next/navigation'
import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@/components/button/Button'
import { qnaSelectEquipmentPath } from '@/config/paths/qna-path'

import { useSelectLanguage } from './select-language-cards.hook'
import { SelectLanguageCardsProps } from './select-language-cards.types'
import SelectLanguageCard from './SelectLanguageCard'

const SelectLanguageCards: FC<SelectLanguageCardsProps> = (props) => {
  const { items } = props

  const { t } = useTranslation('qna')

  const router = useRouter()

  const { selectedLanguage, handleSelectLanguage } = useSelectLanguage()

  return (
    <>
      <div className='flex w-full gap-5'>
        {items?.map((item) => (
          <SelectLanguageCard
            key={item.value}
            {...item}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleSelectLanguage}
          />
        ))}
      </div>
      <Button
        className='m-auto mt-6'
        label={t('start_qna')}
        onClick={() => router.push(qnaSelectEquipmentPath())}
        disabled={!selectedLanguage}
      />
    </>
  )
}

export default memo(SelectLanguageCards)
