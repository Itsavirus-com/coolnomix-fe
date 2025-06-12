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
export const DUMMY_REPORT_DETAIL_ID = '123e4567-e89b-12d3-a456-426614174000'

export const ROLE_OPTIONS = {
  admin: 'administrator',
  client_group: 'client_group',
  client_branch: 'client_branch',
  internal_technician: 'internal_technician'
}
