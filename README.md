# momento_js

## 0. features

* clock
* user name
* to do list
* background
* weather information

<br>
<br>

## 1. How to make 

We used divide & conquer rule. So, we divided clock, .etc js file and join files in index.html 

<br>
<br>

### 1-1. Clock

(index.html)
We want to display clock. 
So we make container for `<div class="js-clock">`
and connect with javascript file ` <script src="clock.js"></script>` .



```
<body>
<div class="js-clock">
            <h1>00:00</h1>
</div>

 <script src="clock.js"></script>
 </body>
```

<br>
<br>

(clock.js)

1. We want to initialize of getting Time. So we defined function init() and called getTime function which gives Date information.

* setInterval(function to call, time to execute (unit : milli second));

```
function init() {
    setInterval(getTime,1000);
}
```

<br>

2. We want to insert clock in document which get class name js-clock and h1 text. So, we use querySelector to get them.

```
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
```

<br>

3. we make getTime which give Date information. Each variable(const) calls a internal function in the Date to obtain a value.

* trinomial operator 
    (condition) ? (if true) : (if false)

```
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();


    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}
```

<br>
<br>

### 1-2. Saving User Name

(index.html)

We want to display submit format. So, we make container and connect with js file.

```
<body>

<form class="js-form form">
            <input type="text" placeholder="What is your name ? " />
</form>
<script src="greeting.js"></script>

</body>
```

<br>
<br>

(greeting.js)

1. We connect with container which make in index.html. So, we defined.

```
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

```

<br>

2. We want to initialize of loading name. So we defined function init() and called loadName function which gives Name information.

```
function init() {
    loadName();
}

init();
```

<br>


3. We want to get Name for local Storage. if we don't have currentUser we will askForName, else we apply the currentUser in display.

```
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        // she is not
        askForName();
    }
    else{
        // she is
        paintGreeting(currentUser);
    }
}
```

<br>


4. Define the class Name and currentUser for const variable.

```
const USER_LS = "currentUser",
    SHOWING_CN = "showing";
```

<br>

5. Defines functions that are executed according to conditions. askForName function will be called when currentUser doesn't exist, and else, paintGreeting will be called.

```
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}
```

<br>

6. We want to handleSubmit because we want to save name and apply the currentUser in display. So, define a function that contains these contents.

```
function handleSubmit(event){
    //enter눌러도 input text가 사라지지 않도록 함.
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
```
<br>

7. saveName function
We want to saveName so that refresh does not default. So we access localStorage and setItem.

```
function saveName(text){
    localStorage.setItem(USER_LS, text);
}
```

<br>
<br>

### 1-3. To Do List

(index.html)

1.  make toDo-format

```
<form class = "js-toDoForm">
            <input type="text" placeholder = "Write a to do " />
</form>
<ul class = "js-toDoList">
</ul>
```

<br>

2. connect with todo.js
```
<script src="todo.js"></script>
```

<br>

3. add meta charset because of emoji.

```
<meta charset="utf-8" />
```

<br>
<br>

(todo.js)

1. connect with html file and define toDos, toDo array.

```
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = `toDos`;

let toDos = [];
```

<br>

2. We want to initialize of loading toDos. So we defined function init() and called loadToDo function which gives toDo list information.

```
function init()
{
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
```

<br>

3. If localStorage doesn't null, show toDo list.

* JSON.parse(json item) : json->array


```
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
     // always show so we don't have to do if toDos ===null
    if(loadedToDos !== null){
       // json -> array
       const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo) {
           paintToDo(toDo.text);
       });
    }
```

<br>

4. If we submit, we prevent refresh, and paint currentValue. Last, we initialize blank space.

```
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //seems like submit
    toDoInput.value = "";
}
```

<br>


5. make painting function.
 we make list in html file. so, we use document.createElement. and deleteButton will be ❌ shape. 
 we have to define Id because we have child id when we delete. 
then, we can make list using by appendChild function. 
and push text contents and id information in toDos array.
last, we save using by saveToDos function


(cf) span seems like div tag..


```
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length+1;

    span.innerText = text;
    //father에 붙여주기 위함
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}

```

<br>


6. make saveToDos for save ToDo information.

*JSON.stringify(array) : array->JSON

```
function saveToDos() {
    // array->json
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
```


<br>


7. make deleteToDo(event) function.
define btn which is event target button.
define li which is btn parentNode . this will give Id.
and delete 'li' toDoList in html file.
define new ToDos(cleanToDos) which remained in list.
update toDos for cleanToDos.
last, save new ToDos.

```
function deleteToDo(event){
    // console.log(event.target.parentNode);
    // delete child element mdn
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //string -> int
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}
```


<br>
<br>


### 1-4. image background

(index.html)
connect html file with js file.

```
<script src="bg.js"></script>
```

<br>
<br>

(images folder)
put images in images folder which want to use as background.

<br>
<br>


(bg.js)
1. define body which is connected with html file and define IMG_NUMBER which means image numbers.

```
const body = document.querySelector("body");

const IMG_NUMBER = 6;
```

<br>

2. We want to initialize of painting background. So we defined function init() and called paintImage function which paints background.

```
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
```

<br>

3. Define genRandom() function which makes random number.

* Math.random() : generate random number
* Math.ceil() : raising decimal point
* Math.floor() : decimal point lowering


```
function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}
```

<br>


4. Define paintImage function which prepends body of your background image

```
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
   
}
```

<br>

5. Define handleImageLoad function.

```
function handleImgLoad() {
    console.log("finished loading");
}
```

<br>
<br>


(index.css)
define keyframes fadeIn and gives animation in bgImage class.

```
@keyframes fadeIn{
  from{
    opacity : 0;
  }
  to{
    opacity: 1;
  }
}

.bgImage{
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height: 100%;
  z-index: -1;
  animation : fadeIn .5s linear;
}
```

<br>
<br>


### 1-5. weather by one geolocation (two API)
 
(index.html)
1. Add weather container.

```
 <spanc class="js-weather"></spanc>
```

<br>

2. Connect with weather.js

```
<script src="weather.js"></script>
```
<br>
<br>

(weather.js)
1. connect .js-weather (using class) and define API_KEY and COORDS.

```
const weather = document.querySelector(".js-weather");

const API_KEY = "8159d8674829d03f2989f98d696a8099";
const COORDS = 'coords';
```

<br>

2. We want to initialize of getting coord information. So we defined function init() and called loadCoords() function which gives Coord information.

```
function init() {
    loadCoords();
}

init();
```

<br>


3. define loadCoords which get by localStorage.
if we don't have loadedCoords information we will call askForCoords function for getting Coordinate information, else we will get weather use this coord information

```
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        //get weather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
```

<br>


4. Define askForCoords to get Current Position. We will use navigator.

```
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
```

<br>


5. Define handleGeoSuccess and handleGeoError. If handleGeoSuccess operates, we will define coordsObj to get coordinate information and save Coords and call getWeather function.

```
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // 자동으로 key값이 같게 저장됨
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}
```

<br>

6. Define saveCoords function, which saved string type.

```
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
```

<br>

7. Define getWeather function, which get temperature and place info. 

* fetch().then : To proceed after the fetch has been completed.

```
function getWeather(lat, lng){
    // fetch . then -> fetch가 다 된 후 진행되도록 하기 위함
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerHTML = `${temperature} @ ${place}`;
        })

}
```

<br>
<br>
<br>

## 2. How to use

### Register account

```
1. Write your name in input box.
2. Press the enter button
```

<br>
<br>

### Delete account 

```
1. Press right click with the mouse.
2. Click the inspect button (검사버튼)
3. Click the application menu.
4. Click local Storage.
5. Click clear All button.
6. account will delete!
```


<br>
<br>


### Add ToDo list

```
1. add text in text box(Write a to do).
2. Click Enter button in your keyboard.
3. Added!
```

<br>
<br>


### Delete ToDo List


```
1. Put the cursor over the button which is next to the list you want to delete.
2. Click X button.
3. Deleted!
```

<br>
<br>


#### reference 
nico teacher : 
https://github.com/nomadcoders/js-basics