
const like = document.querySelector(".like");
console.log(like);
const count = document.querySelector(".count");
console.log(count);
var add = 0;
function likes(){
  count.innerHTML = add;
  add++;
}