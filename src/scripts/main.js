document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sort').addEventListener('submit', function(evento){
        evento.preventDefault()
        let numMax = document.getElementById('noMax').value
        numMax =parseInt(numMax)

        let numRdm = Math.random() * numMax
        numRdm = Math.floor(numRdm + 1)

        document.getElementById('resultado-valor').innerText = numRdm
        document.querySelector('.resultado').style.display='block'
    })
})