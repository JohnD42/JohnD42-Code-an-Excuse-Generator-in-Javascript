/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload;
{
  function onload() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = [" ate", " peed on", " crushed", " broke"];
    let what = [" my homework", " the keys", " the car"];
    let when = [
      " before the class.",
      " right on time.",
      " when I finished.",
      " during my lunch.",
      " while I was praying."
    ];

    function randoGen() {
      let randoNum = Math.random();
      let randoNum2 = randoNum * 4;
      let randoNum3 = Math.floor(randoNum2);
      return randoNum3;
    }

    let excuse = [];

    excuse.push(who[randoGen()]);
    excuse.push(action[randoGen()]);
    excuse.push(what[randoGen()]);
    excuse.push(when[randoGen()]);

    let excuseString = excuse.join("");

    document.getElementById("excuse").innerHTML = excuseString;
  }
  onload();
  clickToGenerateExcuse.addEventListener("click", onload);
}
