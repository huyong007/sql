var playerAction = process.argv[2];
console.log(playerAction);
if (
  playerAction != "rock" &&
  playerAction != "paper" &&
  playerAction != "scissor"
) {
  console.log("请输入rock或paperhuoscissor");
} else {
  var computerAction;
  var random = Math.random() * 3;
  if (random < 1) {
    computerAction = "rock";
    console.log("电脑出了石头");
  } else if (random > 2) {
    // computerAction =
  }
}
