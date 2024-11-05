const form = document.querySelector('form')
form.addEventListener('submit',function (e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');
  if(height===''||height<0||isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  }
  else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
      results.innerHTML= `<span>${bmi}</span> <br> under weight = less than 18,6`
    }
    else if (bmi>=18.6 && bmi<=24.9){
      results.innerHTML= `<span>${bmi}</span> <br>normal range = 18,6 and 24.9`
    }
    else {
      results.innerHTML= `<span>${bmi}</span> <br> over weight = greater than 18,6`
    }
  }
});