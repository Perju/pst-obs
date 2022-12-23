import { TransformData } from './transform-data.model'

export interface Source {
  visible: boolean
  name: string
  transform: TransformData
}
