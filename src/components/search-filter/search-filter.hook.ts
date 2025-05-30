import { useForm } from 'react-hook-form'

export const useSearchFilter = () => {
  const methods = useForm({
    defaultValues: {
      search: '',
      date: {
        from: new Date(),
        to: new Date()
      }
    }
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return { methods, onSubmit }
}
