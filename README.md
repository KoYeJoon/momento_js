# momento_js

## 1. How to make 

We used divide & conquer rule. So, we divided clock, .etc js file and join files in index.html 

<br>
<br>

### 1-1. Clock

1. We want to initialize of Time. So we defined function init() and called getTime function which gives Date information.

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

### 1-2. User Name


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


<br>
<br>


#### reference 
nico teacher : 
https://github.com/nomadcoders/js-basics