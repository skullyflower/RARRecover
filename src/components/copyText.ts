
const copyText = (text: string) => {
  const browser = navigator ?? new Navigator()
  if (text) {
    browser.clipboard?.writeText(text);
  }
}
export default copyText;

const browser = window ?? new Window()
export const getStoredObj = () => JSON.parse(browser.localStorage.getItem("rarr_log") || '{}')

export const saveText = (text: string, valueKey?: string) => {
  if (!text) return false
  const date = new Date()

  const storeKey =
    valueKey !== undefined
      ? valueKey
      : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  const storedObject = getStoredObj()
  const oldValue = storedObject[storeKey] ?? ''

  const newvalue = valueKey ? text : `${oldValue}__________________________________\n${text}`
  if (newvalue) {
    browser.localStorage.setItem("rarr_log", JSON.stringify({ ...storedObject, [storeKey]: newvalue }))
    return true
  }
  return false
}

export const getLogs = () => {
  const rarrObj = getStoredObj()
  return Object.keys(rarrObj)
}

export const getLogsContent = (logDate: string) => {
  const rarrObj = getStoredObj()
  if (rarrObj[logDate]) {
    return rarrObj[logDate]
  }
  return false
}

export const deleteLog = (logDate: string) => {
  const rarrObj = getStoredObj()
  if (rarrObj && rarrObj[logDate]) {
    //do something and return true
  }
  return false
}