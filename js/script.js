
const fila = document.querySelectorAll('.fila')

const opts = e => {

    e.preventDefault()

    let span = document.createElement('span')
    span.innerHTML = `
    <ul>
        <li class="li"> <i class="fas fa-info "></i> Ver más</li>
        <li class="li"> <i class="fas fa-edit "></i> Editar</li>
        <li class="li"> <i class="fas fa-trash "></i> Eliminar</li>
    </ul>
    `
    span.id = 'options'
    const menu = document.querySelector("#options")

    if (menu) document.body.removeChild(menu)

    document.body.appendChild(span)
    span.classList.add('options')
    span.style.top = `${e.pageY}px`
    span.style.left = `${e.pageX}px`
}

fila.forEach(fila => {
    fila.addEventListener('contextmenu', e => {
        opts(e)
        console.log('hola');


        if (fila.classList.contains('changeColor')) {
            fila.classList.remove('changeColor')
        } else {
            fila.classList.add('changeColor')
        }
    })
});

addEventListener('click', e => {

    let menu = document.querySelector("#options")
    let rows = document.querySelectorAll('.fila')

    rows.forEach(row => {
        if (e.target.className != 'fila') {
            row.classList.remove('changeColor')
        }
    })

    if (menu && e.target.className != 'li') {
        document.body.removeChild(menu)
    }

})
