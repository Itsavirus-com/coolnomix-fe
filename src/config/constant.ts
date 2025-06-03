export const acceptedFileImage = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/webp': ['.webp']
}

export const acceptedFileExcelAndPdf = {
  'application/pdf': ['.pdf'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
}

export const QNA_FORM_STORAGE_KEY = 'QNA_FORM'

export const SESSION_COOKIE = {
  name: 'session',
  maxAge: 60 * 60 * 24 * 7, // 7 days
  value: 'authenticated',
  unauthenticatedValue: 'unauthenticated'
}
