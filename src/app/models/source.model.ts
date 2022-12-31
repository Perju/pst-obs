import { TransformData } from './transform-data.model'

export interface Source {
  sceneItemEnabled: boolean
  sourceName: string
  sceneItemTransform: TransformData
}
