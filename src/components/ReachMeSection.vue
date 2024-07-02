<template>
    <section class="container ReachMe-container" id="reachMe">
        <h1 class="reachMe">Reach Me</h1>
      <div class="messages d-flex flex-column justify-content-center align-items-center">
      <div class="col-md-6 messages d-flex flex-column justify-content-center align-items-center">
        <form action="https://formspree.io/f/mbjnblwp" method="POST" class="formal">
          <div class="form-group">
            <input type="text" name="Firstname" placeholder="Enter your first name" autocomplete="off" required/>
          </div>
          <div class="form-group">
            <input type="text" name="lastname" placeholder="Enter your last name" autocomplete="off" required/>
          </div>
          <div class="form-group">
            <input type="text" name="Email" placeholder="Enter your Email Address" autocomplete="off" required/>
          </div>
          <div class="input form-group">
            <textarea rows="5" cols="60" name="message" placeholder="Enter text" autocomplete="off" required></textarea>
          </div>
          <div class="form-group d-flex justify-content-around">
            <button class="btn btn-success" type="submit">Send Message</button>
            <button class="btn btn-success" type="reset">Clear</button>
          </div>
        </form>
      </div>

      <div class="icons col-md-6">
      <div class="icons col-md m-5 d-flex justify-content-center">
          <a href="https://github.com/KeiraKistensamy" target="_blank"><img src="https://keirakistensamy.github.io/allimages/github icon.png" alt="GitHub" class="project-imgs img-fluid m-auto" width="40px" height="40px" loading="lazy"/></a>
          <a href="https://www.linkedin.com/in/keira-kistensamy-4722732a8/" target="_blank"><img src="https://keirakistensamy.github.io/images/images/linkedIn.png" alt="LinkedIn" class="project-imgs img-fluid m-auto" width="40px" height="40px" loading="lazy"/></a>
        </div>
          <div>
            <img src="https://keirakistensamy.github.io/images/images/location icon.png" alt=" " width="40px" height="40px"><p>Mitchell's Plain, Cape Town</p>
            <img src="https://keirakistensamy.github.io/images/images/phone_icon.png" alt=" " width="40px" height="40px"><p>063 941 4716</p>
            <img src="https://keirakistensamy.github.io/images/images/email_icon.png" alt=" " width="40px" height="40px"><p>Keirakist0987@gmail.com</p>
      <div class="icons col-md">
        <a href="https://github.com/KeiraKistensamy" target="_blank"><img src="https://keirakistensamy.github.io/allimages/github icon.png" alt="GitHub" class="project-imgs img-fluid m-auto" loading="lazy"/></a>
        <a href="https://github.com/KeiraKistensamy" target="_blank"><img src="https://keirakistensamy.github.io/allimages/github icon.png" alt="GitHub" class="project-imgs img-fluid m-auto" loading="lazy"/></a>
        <a href="https://github.com/KeiraKistensamy" target="_blank"><img src="https://keirakistensamy.github.io/allimages/github icon.png" alt="GitHub" class="project-imgs img-fluid m-auto" loading="lazy"/></a>

      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ReachMe'
  }
  </script>
  
<style scoped>

.ReachMe-container {
  margin-top: 40px;
  border: 4px solid #0f2e7e;
  border-radius: 2rem;
  background-color: #8b8fde;
}
.reachMe {
  font-family: "Playfair Display", italic;
  font-size: 48px;
  text-shadow: 2px 2px 5px #0f2e7e;
}

input{
    border: 1px solid rgb(0, 0, 0);
    padding: 10px;
    border-radius: .5rem;
    width: 500px;
    margin: 10px;
}

.btn {
    /* margin: 5px; */
    border: 1px solid black;
}

textarea{
    border: 1px solid rgb(0, 0, 0);
    padding: 10px;
    border-radius: .5rem;
    width: 500px;
    margin: 10px;
}

</style>
  