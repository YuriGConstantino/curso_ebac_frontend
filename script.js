const form = document.querySelector("#form")


function compararNumeros() {
    const campoA = parseFloat(document.querySelector("#input__campoA").value)
    const campoB = parseFloat(document.querySelector("#input__campoB").value) 
    const msm = document.querySelector("#menssagem")

    if (campoA < campoB) {
        msm.classList.remove("showmsm__error")
        msm.classList.add("showmsm")
        msm.textContent = "O campo B é maior que o Campo A, muito bem!"
    } else {
        msm.classList.remove("showmsm")
        msm.classList.add("showmsm__error")
        msm.textContent = "O campo B deve ser maior maior que o campo A"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    compararNumeros()
})