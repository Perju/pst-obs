import { Source } from './source.model'

export interface Scene {
  sceneName: string
  sceneIndex: number
  sources?: Source[]
}
