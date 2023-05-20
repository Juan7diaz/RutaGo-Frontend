
export const truncateText = (text) => {
  const LENGTH_MAX = 50
  if (text.length > LENGTH_MAX) {
    return text.slice(0, LENGTH_MAX) + '...'
  }
  return text
}
