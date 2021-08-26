
//variables
let weatherData ;
const apiKey = '22bb81cab88660d4e60ff8f76d23779e';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

//html Element references
const $title = $('#title')
  const $temp = $('#temp')
  const $index = $('#index')
  const $desc = $('#desc')
  const $input = $('input[type="text')


//Functions
function handleGetData(event){
    event.preventDefault()
    $.ajax(baseUrl + `q=${$input.val()}&appid=` + apiKey + '&units=imperial')
    .then(function(data){
        console.log('Data ', data);
        weatherData = data
        render()
    }, function(error){
        console.log('Error ', error);
    })
} 

//Render specific bits of data to appear on the screen
//Googled how to type in a degrees symbol in javascript = \u00B0
function render(){
    $title.text('Weather For: ' + weatherData.name)
        $temp.text('Temperature: ' + weatherData.main.temp + '\u00B0' + 'F')
        $index.text('Feels Like: ' + weatherData.main.feels_like + '\u00B0' + 'F')
        $desc.text('Current Forecast: ' + weatherData.weather[0].description)
    }

    //event listener for the input/submit form
    $('form').on('submit', handleGetData)



