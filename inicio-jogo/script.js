let cont = 1

let paragraph = document.getElementsByTagName('p')[0]

paragraph.innerHTML = "Hi"

let setPhrases = [
   "HTML, CSSS and JavaScript", "Bootstrap and PrimeNG", "SpringBoot, Angular and Postgresql"
]

function* writePhrases(){
  for(index in setPhrases){
    yield setPhrases[index]
    cont++
  }
}

const iteradorwritePhrases = writePhrases()

let changeParagraph = (iteradorwritePhrases) => {

  if(cont < setPhrases.length)
     paragraph.innerHTML = iteradorwritePhrases.next().value
}

function call_changeParagraph(){
changeParagraph(iteradorwritePhrases)
}