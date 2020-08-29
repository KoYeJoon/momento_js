# momento_js

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

<br>
<br>


### 1-4. image background


<br>
<br>


### 1-5. weather by one geolocation (two API)
 
<br>
<br>
<br>

## 2. How to use

// 계정 등록

// 계정 삭제
<br>
<br>


#### reference 
nico teacher : 
https://github.com/nomadcoders/js-basics