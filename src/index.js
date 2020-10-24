module.exports = (str, bracketsConfig) => {
  for (let i = 0; i < bracketsConfig.length; i++) {
    let pair = bracketsConfig[i].join('')

    if (str.includes(pair)) {
      str = str.replace(pair, '')
      i = -1
    }
  }

  return str.length === 0
}
