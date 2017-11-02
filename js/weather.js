window.onload = function () {
    today();
    getWeather();
};

function today() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var names_month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var info_month = document.getElementsByClassName('info__month')[0];
    var info__day = document.getElementsByClassName('info__day')[0];

    info__day.textContent = day;
    info_month.textContent = names_month[month];
}

function getWeather() {
    var temp_div = document.getElementsByClassName('info__degree')[0];
    var city_div = document.getElementsByClassName('info__city')[0];
    var desc_div = document.getElementsByClassName('info__weather')[0];
    var link, city;
    var xhr = new XMLHttpRequest();

    city = 'London';

    city_div.innerHTML = city;

    link = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=bb74b05295dc8292c50a84bdb9b21964';



    xhr.open('GET', link, true);

    xhr.onload = function () {
        if (this.status == 200) {
            objects = JSON.parse(this.responseText);
            var numb = +objects.main.temp;

            temp_div.innerHTML = Math.round(numb - 273) + '<span>&deg</span>';

            desc_div.innerHTML = objects.weather.description;


        } else {
            alert('Its Errors');

        }
    }
    xhr.send();


}
