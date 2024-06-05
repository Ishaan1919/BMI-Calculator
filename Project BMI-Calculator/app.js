const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('result');
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height} `;
        document.getElementById('height').value = '';
    }
    if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML += `Please give a valid weight ${weight}`;
        document.getElementById('weight').value = '';
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<span>${bmi} You are Under Weight</span>`
        }
        else if(bmi>24.9){
            result.innerHTML = `<span>${bmi} You are Over Weight</span>`
        }
        else{
            result.innerHTML = `<span>${bmi} You are Normal</span>`
        }
    }
})