const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerHTML
    .split('')
    .map((el, ind) => `<span style="transition-delay:${ind * 50}ms">${el}</span>`)
    .join('')

})