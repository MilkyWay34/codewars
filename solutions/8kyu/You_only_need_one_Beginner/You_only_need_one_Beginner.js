function check(a, x) {
  return a.some(
    (current) => {
      return current === x
    }
  )
}