function view_video(element)
{
    video=document.querySelector(".video").firstElementChild;
    video.src="https://www.youtube.com/embed/"+element.dataset.uri;
    document.querySelector(".name_lecturer").scrollIntoView({behavior: "smooth"});
}
function go_top() {
    document.body.scrollTop =0;
    document.documentElement.scrollTop =0;
  }
  function scroll_check() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

