import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

type UseUrlParamsOptions = {
  paramName: string
  defaultValue?: string
  replaceHistory?: boolean
}

type UseUrlParamsReturn = {
  currentValue: string
  updateParam: (value: string) => void
  resetToDefault: () => void
}

export function useUrlParams({
  paramName,
  defaultValue = '',
  replaceHistory = false
}: UseUrlParamsOptions): UseUrlParamsReturn {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const paramValue = searchParams.get(paramName) || defaultValue
  const [currentValue, setCurrentValue] = useState(paramValue)

  const updateParam = useCallback(
    (value: string) => {
      setCurrentValue(value)

      const params = new URLSearchParams(searchParams)
      if (value === defaultValue) {
        params.delete(paramName)
      } else {
        params.set(paramName, value)
      }

      const newUrl = pathname + (params.toString() ? '?' + params.toString() : '')

      if (replaceHistory) {
        window.history.replaceState({}, '', newUrl)
      } else {
        window.history.pushState({}, '', newUrl)
      }
    },
    [pathname, searchParams, paramName, defaultValue, replaceHistory]
  )

  const resetToDefault = useCallback(() => {
    updateParam(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    setCurrentValue(paramValue)
  }, [paramValue])

  return {
    currentValue,
    updateParam,
    resetToDefault
  }
}

export function useTabParams(defaultTab = '') {
  return useUrlParams({
    paramName: 'tab',
    defaultValue: defaultTab,
    replaceHistory: true
  })
}

export function useStepParams(defaultStep = '') {
  return useUrlParams({
    paramName: 'step',
    defaultValue: defaultStep,
    replaceHistory: true
  })
}
