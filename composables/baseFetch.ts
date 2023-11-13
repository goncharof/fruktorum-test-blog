export function useBaseFetch(url: string, options = {}) {
  return $fetch(`/proxy${url}`, options)
}
