import { TransformData } from './transform-data.model'

export interface Source {
  sceneItemEnables: boolean
  sourceName: string
  sceneItemTransform: TransformData
}
