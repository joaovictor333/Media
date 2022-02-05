function somar(){
    var B1 = window.document.getElementById('B1')
    var B2 = window.document.getElementById('B2')
    var B3 = window.document.getElementById('B3')
    var B4 = window.document.getElementById('B4') 
    var E5 = window.document.getElementById('E5')

    var B1 = Number(B1.value)
    var B2 = Number(B2.value)
    var B3 = Number(B3.value)
    var B4 = Number(B4.value)
    var E5 = Number(E5.value)

    var s = (B1 + B2 + B3 + B4 + E5) /5

    var res = window.document.getElementById('res')

    res.innerHTML = `O resultado é ${s}`
}