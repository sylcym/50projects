const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, ind) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[ind].value = ''
      setTimeout(() => codes[ind + 1].focus(), 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[ind - 1].focus(), 10)
    }
  })
})