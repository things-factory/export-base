import { store } from '@things-factory/shell'

import { UPDATE_EXTENSION } from './actions/export'
import exporting from './reducers/export'

export default function bootstrap() {
  store.addReducers({
    exporting
  })

  /* default extension JSON 을 제공함 */
  store.dispatch({
    type: UPDATE_EXTENSION,
    extensions: {
      json: {
        export: dataToJson
      }
    }
  })
}

async function dataToJson({ extension, data, name }) {
  const records = typeof data == 'function' ? await data.call() : data
  const json = JSON.stringify(records, null, 2)

  const link = document.createElement('a')

  link.setAttribute('href', encodeURI('data:application/json;charset=utf-8,' + json))
  link.setAttribute('download', `${name}.json`)

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
