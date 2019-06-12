import { store } from '@things-factory/shell'
import exporting from './reducers/export'

export default function bootstrap() {
  store.addReducers({
    exporting
  })
}
