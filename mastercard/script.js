let mastercard_f = document.getElementById('mastercard_front');
let mastercard_b = document.getElementById('mastercard_back');
mastercard_b.addEventListener('click', () => {
    mastercard_f.style.zIndex = "1"
    // mastercard_f.style.transform = "translateX(40px) translateY(-20px)"
    mastercard_b.style.zIndex = "2"
    // mastercard_b.style.transform = "translateX(-40px) translateY(20px)"
})
mastercard_f.addEventListener('click', () => {
    mastercard_f.style.zIndex = "2"
    // mastercard_f.style.transform = "translateX(-40px) translateY(20px)"
    mastercard_b.style.zIndex = "1"
    // mastercard_b.style.transform = "translateX(40px) translateY(-20px)"
})