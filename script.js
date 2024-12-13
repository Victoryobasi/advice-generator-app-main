const idNum = document.getElementById('adviceNum');

const advice = document.getElementById('text');

const changeAdivice = document.getElementById('toggleAdvice');

const loadAdvice = async () => {
    
    try {
        const response = await fetch ('https://api.adviceslip.com/advice');
       const adviceapi = await response.json();
    
       idNum.textContent = `#${adviceapi.slip.id}`;
       advice.textContent = `"${adviceapi.slip.advice}"`;

    } catch (error) {
        console.error(error);
    }
}
loadAdvice()

document.addEventListener('DOMContentLoaded', loadAdvice());

changeAdivice.addEventListener('click', () => {
    loadAdvice();
});