import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type FormError = FieldError | Merge<FieldError, FieldErrorsImpl<any>>
type NestedError = FormError | Record<string, FormError> | FormError[]

export function getNestedError(
  errors: Record<string, NestedError | FormError>,
  path: string[],
  index?: number
): FormError | undefined {
  if (!path.length) return undefined

  const [first, ...rest] = path
  const error = errors[first]

  if (!error) return undefined
  if (!rest.length) return error as FormError

  if (index !== undefined) {
    const arrayError = error as FormError[]
    const arrayItem = arrayError[index]

    if (arrayItem && typeof arrayItem === 'object') {
      return (arrayItem as Record<string, FormError>)[rest[1]]
    }

    return undefined
  }

  // Loop through the rest of the path and return the error
  return getNestedError(error as Record<string, NestedError>, rest)
}

export function getErrorMessage(error: FormError | undefined) {
  if (!error) return ''

  if (error.message) {
    return error.message as string
  }

  if (typeof error === 'object') {
    return Object.values(error)
      .map((err) => err?.message)
      .filter(Boolean)
      .join(', ')
  }

  return ''
}
