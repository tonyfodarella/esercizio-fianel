const cercaLavori = (queryLocation, queryTitolo) => {
    let risultati = {
      result: [], // corretto nome
      count: 0,
    }
  
    for (let i = 0; i < jobs.length; i++) {
      const lavoro = jobs[i]
      let locationLavoroCorrente = lavoro.location.toLowerCase()
      let titleLavoroCorrente = lavoro.title.toLowerCase()
      let queryTitoloMin = queryTitolo.toLowerCase()
      let queryLocationMin = queryLocation.toLowerCase()
  
      if (
        locationLavoroCorrente.includes(queryLocationMin) &&
        titleLavoroCorrente.includes(queryTitoloMin)
      ) {
        // cloniamo e rimuoviamo eventuali campi inutili
        const lavoroPulito = { ...lavoro }
        delete lavoroPulito.description
        delete lavoroPulito.requirements
        delete lavoroPulito.benefits
        delete lavoroPulito.company_profile
  
        risultati.result.push(lavoroPulito)
        risultati.count++
      }
    }
    return risultati
  }
  
  const ricercaOnClick = () => {
    let titleValue = document.querySelector("input#title").value
    let locValue = document.querySelector("input#location").value
    let ul = document.querySelector("ul")
  
    ul.innerHTML = "" // pulisci i risultati precedenti
  
    const res = cercaLavori(locValue, titleValue)
    console.log(res)
  
    for (let i = 0; i < res.result.length; i++) {
      const lavoro = res.result[i]
      ul.innerHTML += `<li>${lavoro.title} @ ${lavoro.location}</li>`
    }
  
    // Puoi anche mostrare il numero dei risultati trovati, se vuoi
    if (res.count === 0) {
      ul.innerHTML = "<li>Nessun risultato trovato</li>"
    }
  }
  