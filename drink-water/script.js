const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const remained = document.querySelector('#remained');
const percentage = document.querySelector('#percentage');


updateBigCup()

smallCups.forEach((cup, ind) => {
  cup.addEventListener('click', () => highlightCups(ind))

})

function highlightCups(ind) {
  if (ind === 7 && smallCups[ind].classList.contains("full")) ind--;
  else if (smallCups[ind].classList.contains('full') && !smallCups[ind].nextElementSibling.classList.contains('full')) {
    ind--
  }
  smallCups.forEach((cup, index) => {
    if (index <= ind) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}