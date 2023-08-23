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
  }
  onload();
  clickToGenerateExcuse.addEventListener("click", onload);
}
