export function getFromLS<Type>(key: string): Type | null {
  const string = localStorage.getItem(key);

  try {
    if (string) {
      return JSON.parse(string) as Type;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
