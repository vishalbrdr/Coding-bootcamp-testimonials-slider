document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("content-1").innerHTML = `<div class="content">
      “ I’ve been interested in coding for a while but never taken the jump,
      until now. I couldn’t recommend this course enough. I’m now in the job
      of my dreams and so excited about the future. ”
      <div class="name" id="name" >
        Tanya Sinclair 
        <span class="job">UX
         Engineer</span></div>
    </div>
    <img src="images/image-tanya.jpg" alt="image-tanya"/>`
  })
  document.getElementById("btn-1").addEventListener("click", function(){
    document.getElementById("content-1").innerHTML = `<div class="content">
      “ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”

  <div class="name" >John Tarkpor<span class="job">Junior Front-end Developer</span></div>
    </div>
    <img src="images/image-john.jpg" alt="image-john" />`
  })