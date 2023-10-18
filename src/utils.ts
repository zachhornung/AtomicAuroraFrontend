export const getFormattedDateTime = (dateString: string) => {
  const date = new Date(dateString)
  return `${date.toDateString()} ${date.toLocaleTimeString()}`
}
