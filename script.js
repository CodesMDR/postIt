const userInput = document.querySelector(".user-input");
const newPosts = document.querySelector(".new-posts");
const submitBtn = document.querySelector(".submit");
const backTop = document.querySelector(".backtop");

//Time
let date = new Date();
let mins = date.getSeconds();
let hours = date.getMinutes();
let secs = date.getSeconds();

//Create a post function
const enterData = () => {
  let message = document.createElement("p");
  if (userInput.value === "") {
    return false;
  } else {
    newPosts.classList.remove("hide");
    newPosts.innerHTML = `
      <div class="posts-info">
        <p>Posted by MauriceDR - ${hours}h : ${mins}m ago</p>
      </div>
      <div class="posts">
      ${userInput.value}
      </div>
      <div class="posts-details">
        <div class="comments">
          <i class="fa-solid fa-comment"></i>
          <p>0 Comments</p>
        </div>
        <p>Awards</p>
        <p>Share</p>
        <p>Save</p>
      </div>
    </div>`;
    userInput.value = "";
    enterData().append(newPosts);
  }
};

//Back top function
backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Submit button
submitBtn.addEventListener("click", () => {
  enterData();
});
