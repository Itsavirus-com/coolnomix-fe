import { z } from 'zod'

import { ControlledButtonProps } from '@/components/button/button.types'
import { detailsBrandSchema } from '@/details_forms/_components/step-one-form/step-one-form.schema'
import {
  detailsAcSchema,
  peakLoadTarifSchema
} from '@/details_forms/_components/step-two-form/step-two-form.schema'
import { acPhaseTwoSchema } from '@/details_forms/review/_components/phase-two-form/phase-two-form.schema'
import { fileSchema } from '@/utils/schema'

export type ButtonGroupType = [ControlledButtonProps | null, ControlledButtonProps]

export type UserType = 'super-admin' | 'admin' | 'technician' | 'client-group' | 'client-branch'

export type AcEquipmentType = 'air-conditioning' | 'refrigeration'

export type FileType = z.infer<ReturnType<typeof fileSchema>>
export type FileWithPreview = File & {
  preview: string
  formattedSize: string
}

export type DetailsBrandType = z.infer<ReturnType<typeof detailsBrandSchema>>
export type DetailsAcType = z.infer<ReturnType<typeof detailsAcSchema>>
export type PeakLoadTarifType = z.infer<ReturnType<typeof peakLoadTarifSchema>>
export type AcPhaseTwoType = z.infer<ReturnType<typeof acPhaseTwoSchema>>
