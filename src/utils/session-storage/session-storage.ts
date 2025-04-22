/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export function loadString(key: string): string | null {
  try {
    return sessionStorage.getItem(key)
  } catch {
    return null
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveString(key: string, value: string): boolean {
  try {
    sessionStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function load(key: string): any | null {
  try {
    const item = sessionStorage.getItem(key)

    if (!item) {
      return null
    }

    return JSON.parse(item)
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function save(key: string, value: any): boolean {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export function remove(key: string): void {
  try {
    sessionStorage.removeItem(key)
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export function clear(): void {
  try {
    sessionStorage.clear()
  } catch {}
}

/**
 * Get all key names from storage.
 */
export function keys(): string[] {
  return Object.keys(sessionStorage)
}
