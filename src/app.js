/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload;
{
  let currentClass = "dog";
  function onload() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    const randoGen = upperBound => {
      let randoNum = Math.random() * upperBound;
      randoNum = Math.floor(randoNum);
      return randoNum;
    };

    let excuseArray = [
      who[randoGen(who.length)],
      action[randoGen(action.length)],
      what[randoGen(what.length)],
      when[randoGen(when.length)]
    ];

    let excuseString = excuseArray.join(" ");

    document.getElementById("excuse").innerHTML = excuseString;
    if (excuseString.includes("dog")) {
      document.getElementById("bg-img").classList.remove(currentClass);
      document.getElementById("bg-img").classList.add("dog");
      currentClass = "dog";
      document.getElementById("excuse").innerHTML = excuseString;
    }

    if (excuseString.includes("bird")) {
      document.getElementById("bg-img").classList.remove(currentClass);
      document.getElementById("bg-img").classList.add("bird");
      currentClass = "bird";
      document.getElementById("excuse").innerHTML = excuseString;
    }

    if (excuseString.includes("turtle")) {
      document.getElementById("bg-img").classList.remove(currentClass);
      document.getElementById("bg-img").classList.add("turtle");
      currentClass = "turtle";
      document.getElementById("excuse").innerHTML = excuseString;
    }

    if (excuseString.includes("grandma")) {
      document.getElementById("bg-img").classList.remove(currentClass);
      document.getElementById("bg-img").classList.add("grandma");
      currentClass = "grandma";
      document.getElementById("excuse").innerHTML = excuseString;
    }
  }
  clickToGenerateExcuse.addEventListener("click", onload);
}
