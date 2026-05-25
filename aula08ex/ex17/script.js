function tabuada() {
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    }  else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            tab.value = `tab${c}`
        }
    }
}

