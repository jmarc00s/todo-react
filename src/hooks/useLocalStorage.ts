export const useLocalStorage = (
  key: string
): [() => string, (value: string) => void] => {
  const getItem = (): string => {
    return window.localStorage.getItem(key) ?? "";
  };

  const setItem = (value: string) => {
    window.localStorage.setItem(key, value);
  };

  return [getItem, setItem];
};
