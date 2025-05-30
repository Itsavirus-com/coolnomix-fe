'use client'
import { lookup } from 'country-data-list'
import parsePhoneNumber from 'libphonenumber-js'
import { ChangeEvent, InputHTMLAttributes, forwardRef, useEffect, useState } from 'react'

import { cn } from '@/libs/utils'

export type CountryData = {
  alpha2: string
  alpha3: string
  countryCallingCodes: string[]
  currencies: string[]
  emoji?: string
  ioc: string
  languages: string[]
  name: string
  status: string
}

interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onCountryChange?: (data: CountryData | undefined) => void
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  defaultCountry?: string
  className?: string
  inline?: boolean
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, onCountryChange, onChange, value, placeholder, defaultCountry, ...props }, ref) => {
    const [hasInitialized, setHasInitialized] = useState(false)

    useEffect(() => {
      if (defaultCountry) {
        const newCountryData = lookup.countries({
          alpha2: defaultCountry.toLowerCase()
        })[0]

        if (!hasInitialized && newCountryData?.countryCallingCodes?.[0] && !value) {
          const syntheticEvent = {
            target: {
              value: newCountryData.countryCallingCodes[0]
            }
          } as ChangeEvent<HTMLInputElement>
          onChange?.(syntheticEvent)
          setHasInitialized(true)
        }
      }
    }, [defaultCountry, value, hasInitialized])

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value

      // Ensure the value starts with "+"
      if (!newValue.startsWith('+')) {
        // Replace "00" at the start with "+" if present
        if (newValue.startsWith('00')) {
          newValue = '+' + newValue.slice(2)
        } else {
          // Otherwise just add "+" at the start
          newValue = '+' + newValue
        }
      }

      try {
        const parsed = parsePhoneNumber(newValue)

        if (parsed && parsed.country) {
          // Update flag first
          const countryCode = parsed.country

          // Update other state
          const countryInfo = lookup.countries({ alpha2: countryCode })[0]
          onCountryChange?.(countryInfo)

          // Update input value
          const syntheticEvent = {
            ...e,
            target: {
              ...e.target,
              value: parsed.number
            }
          } as ChangeEvent<HTMLInputElement>
          onChange?.(syntheticEvent)
        } else {
          onChange?.(e)
          onCountryChange?.(undefined)
        }
      } catch (error) {
        console.error('Error parsing phone number:', error)
        onChange?.(e)
        onCountryChange?.(undefined)
      }
    }

    return (
      <input
        ref={ref}
        value={value}
        onChange={handlePhoneChange}
        placeholder={placeholder || 'Enter number'}
        type='tel'
        autoComplete='tel'
        name='phone'
        className={cn(
          'text-primary file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input text-smAlt disabled:bg-grey-lightest flex h-10 w-full min-w-0 rounded-md border bg-transparent px-4 py-2 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
        {...props}
      />
    )
  }
)

PhoneInput.displayName = 'PhoneInput'
