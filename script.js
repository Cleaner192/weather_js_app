

 document.querySelector('#btn').addEventListener('click', () => {
    let data = document.querySelector('.inputcity').value;
    // document.querySelector('.out-1').innerHTML = data;

    console.log('Помучился я знатно, но оно теперь работает!')


    let apiKey = "5aea438ce1f87bb7f761bfe216aceb01";
    let city = data;
    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;
    
    
    
    axios.get(url).then(res => {
        
        console.log(res.data);
     })
    
    axios.get(url).then(res => {
        
        document.querySelector('.city').innerHTML = res.data.name
        
        document.querySelector('.temp').innerHTML = res.data.main.temp
        
        document.querySelector('.humidity').innerHTML = res.data.main.humidity
        
        document.querySelector('.wind').innerHTML = res.data.wind.speed
     });

})





