/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload;
{
  function onload() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed on", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car", "my laptop"];
    let when = [
      "before the class.",
      "right on time.",
      "when I finished.",
      "during my lunch.",
      "while I was praying."
    ];

    const randoGen = maxNum => {
      let randoNum = Math.random() * maxNum;
      randoNum = Math.floor(randoNum);
      return randoNum;
    };

    let excuseArray = [
      who[randoGen(who.length - 1)],
      action[randoGen(action.length - 1)],
      what[randoGen(what.length - 1)],
      when[randoGen(when.length - 1)]
    ];

    let excuseString = excuseArray.join(" ");

    document.getElementById("excuse").innerHTML = excuseString;
  }
  onload();
  clickToGenerateExcuse.addEventListener("click", onload);
}
