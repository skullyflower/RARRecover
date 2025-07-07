import { useEffect } from 'react'

const useKeyCapture = (key: string, callback: () => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === key) {
      callback()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}
export default useKeyCapture
