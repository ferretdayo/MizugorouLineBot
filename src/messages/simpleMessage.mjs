export default (message) => {
  return {
    type: "text",
    text: message,
    wrap: true,
  }
}