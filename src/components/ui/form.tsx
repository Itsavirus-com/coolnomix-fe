import type { ComponentProps, ReactNode } from 'react'

import { FormProvider as Provider, useFormContext } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { cn } from '@/libs/utils'

import type * as LabelPrimitive from '@radix-ui/react-label'
import type {
  FieldError,
  FieldErrorsImpl,
  Merge,
  SubmitHandler,
  UseFormReturn
} from 'react-hook-form'

type FormProviderProps<FormState> = {
  name?: string
  methods: UseFormReturn<FormState, any>
  onSubmit: SubmitHandler<FormState>
  children: ReactNode
}

const FormProvider = <FormState extends Record<string, any>>(
  props: FormProviderProps<FormState>
) => {
  const {
    name,
    methods,
    methods: { handleSubmit },
    onSubmit,
    children
  } = props

  return (
    <Provider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} data-test-id={name} className='space-y-3.5'>
        {children}
      </form>
    </Provider>
  )
}

function FormItem({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='form-item' className={cn('grid gap-1.5', className)} {...props} />
}

function FormLabel({
  className,
  name,
  id,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root> & { name: string; id: string }) {
  const { formState } = useFormContext()
  const error = formState.errors[name]

  return (
    <Label
      data-slot='form-label'
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive text-smAlt mb-1.5 gap-1', className)}
      htmlFor={id}
      {...props}
    />
  )
}

function FormMessage({ name, className, ...props }: ComponentProps<'span'> & { name: string }) {
  const { formState } = useFormContext()
  const error = formState.errors[name]

  const getErrorMessage = (error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>): any => {
    if (!error) {
      return ''
    }

    if (error.message) {
      return error.message
    }

    if (typeof error === 'object') {
      return Object.values(error)
        .map((err) => err?.message)
        .filter(Boolean)
        .join(', ')
    }

    return ''
  }

  const body = error ? getErrorMessage(error) : props.children

  return (
    <span data-slot='form-message' className={cn('text-destructive text-sm', className)} {...props}>
      {body}
    </span>
  )
}

export { FormItem, FormLabel, FormMessage, FormProvider }
