import type { FC } from 'react'

import { lookup } from 'country-data-list'
import React, { useEffect, useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import Icon from '@/components/icon/Icon'
import Text from '@/components/text/Text'
import { Country, CountryDropdown } from '@/components/ui/country-dropdown'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { PhoneInput } from '@/components/ui/phone-input'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/libs/utils'

import type { ControlledPhoneInputProps } from './phone-input.types'

const ControlledPhoneInput: FC<ControlledPhoneInputProps> = ({
  name,
  label,
  placeholder,
  labelClassname,
  required,
  hint,
  index,
  disabled,
  defaultCountry = 'ID',
  phoneNumberName,
  ...rest
}) => {
  const { control, setValue, watch } = useFormContext()

  const { field: countryField } = useController({
    name,
    control,
    defaultValue: defaultCountry
  })

  const { field: phoneField } = useController({
    name: phoneNumberName,
    control,
    defaultValue: ''
  })

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(() => {
    const initialValue = countryField.value || defaultCountry
    return (
      lookup.countries({ alpha3: initialValue })[0] ||
      lookup.countries({ alpha2: initialValue })[0] ||
      null
    )
  })

  const handleCountryChange = (country: Country) => {
    countryField.onChange(country.alpha3)
    setSelectedCountry(country)
    setValue(phoneNumberName, country.countryCallingCodes[0])
  }

  const handlePhoneCountryChange = (countryData?: Country) => {
    if (!countryData || countryData.alpha3 === selectedCountry?.alpha3) return
    setValue(name, countryData.alpha3, { shouldValidate: true })
    setSelectedCountry(countryData)
  }

  // Initialize default country and phone number
  useEffect(() => {
    if (!defaultCountry || phoneField.value) return

    const countryData = lookup.countries({ alpha2: defaultCountry.toUpperCase() })[0]
    if (!countryData?.countryCallingCodes[0]) return

    setValue(phoneNumberName, countryData.countryCallingCodes[0])
    if (!countryField.value) {
      setValue(name, countryData.alpha3)
    }
    setSelectedCountry(countryData)
  }, [defaultCountry, phoneNumberName, name])

  // Watch for country changes
  const watchedCountry = watch(name)
  useEffect(() => {
    if (!watchedCountry) {
      if (!defaultCountry) setSelectedCountry(null)
      return
    }

    const countryData =
      lookup.countries({ alpha3: watchedCountry })[0] ||
      lookup.countries({ alpha2: watchedCountry })[0]

    if (countryData?.alpha2 !== selectedCountry?.alpha2) {
      setSelectedCountry(countryData)
    }
  }, [watchedCountry, selectedCountry?.alpha2, defaultCountry])

  return (
    <FormItem {...rest}>
      <FormLabel name={name} id={name} className={labelClassname}>
        {label}
        {hint && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon icon='icon-hint' />
            </TooltipTrigger>
            <TooltipContent>
              <Text tag='span' className='text-grey-darkest'>
                {hint}
              </Text>
            </TooltipContent>
          </Tooltip>
        )}
        {required && <span className='text-destructive'>*</span>}
      </FormLabel>
      <div className={cn('relative flex w-full items-center')}>
        <CountryDropdown
          slim
          disabled={disabled}
          className={cn('rounded-r-none border-r-0 focus-within:z-10')}
          onChange={handleCountryChange}
          defaultValue={selectedCountry?.alpha3 || defaultCountry}
        />
        <PhoneInput
          name={phoneField.name}
          value={phoneField.value}
          onChange={phoneField.onChange}
          onBlur={phoneField.onBlur}
          disabled={disabled}
          className={cn('flex-auto rounded-l-none border-l-0')}
          placeholder={placeholder}
          defaultCountry={selectedCountry?.alpha2}
          onCountryChange={handlePhoneCountryChange}
        />
      </div>
      <FormMessage index={index} name={phoneNumberName} />
    </FormItem>
  )
}

export default ControlledPhoneInput
