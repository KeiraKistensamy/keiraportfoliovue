<template>
    <section class="container ReachMe-container" id="reachMe">
        <h1 class="reachMe">Reach Me</h1>
        <p>Feel free to connect with me for any updates or information.</p>
        <div class="container landing-container">
          <div class="row p-5 d-block d-md-flex align-items-center">
              <div class="col">
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
<div class="col row p-5 d-flex align-items-center">
    <div id="details" class="text-center w-100">
        <div class="icons col-md-6 mx-auto">
            <div >
                
                <div class="d-flex justify-content-start gap-5">
                    <img src="https://keirakistensamy.github.io/images/images/phone_icon.png" alt=" " width="30px" height="30px"><p>063 941 4716</p>

                </div>
                <div class="d-flex justify-content-between gap-5">
                    <img src="https://keirakistensamy.github.io/images/images/email_icon.png" alt=" " width="30px" height="30px"><p>Keirakist0987@gmail.com</p>

                </div>
                <div class="d-flex justify-content-between gap-4">
                    <img src="https://keirakistensamy.github.io/images/images/location icon.png" alt="" width="30px" height="30px"><p>Mitchell's Plain, Cape Town</p>

                </div>

            </div>
            <div class="icons col-md mb-5 p-5 gap-5 d-flex ">
                <a href="https://github.com/KeiraKistensamy" target="_blank"><img src="https://keirakistensamy.github.io/allimages/github icon.png" alt="GitHub" class="project-imgs img-fluid m-auto" width="40px" height="40px" loading="lazy"/></a>
                <a href="https://www.linkedin.com/in/keira-kistensamy-4722732a8/" target="_blank"><img src="https://keirakistensamy.github.io/images/images/linkedIn.png" alt="LinkedIn" class="project-imgs img-fluid m-auto" width="40px" height="40px" loading="lazy"/></a>
            </div>
        </div>
    </div>
</div>


</div>

        </div>
    </section>


  </template>
  
  <script>
  export default {
    name: 'ReachMeComp'
  }
  </script>
  


<style>
.ReachMe-container {
    padding: 40px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
    border: 4px solid #0f2e7e;
    border-radius: 2rem;
    background-color: #8b8fde;
}

.reachMe {

    color: #333;
    text-align: center;
    margin-bottom: 10px;
    font-family: "Playfair Display", italic;
    font-size: 48px;
    text-shadow: 2px 2px 5px #0f2e7e;
}

.ReachMe-container p {
    text-align: center;
    color: black;
    /* margin-bottom: 20px; */
    font-size: 20px;

}


.formal {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.formal .form-group {
    margin-bottom: 20px;
}



.formal .form-group input,
.formal .form-group textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #9f94d3;
}

.formal .form-group textarea {
    resize: none;
}

.formal .btn {
    padding: 10px 20px;
    border-radius: 5px;
}

#details {
    text-align: center;
}

.icons {
    margin-bottom: 20px;
}

.icons p {
    font-size: 20px;
}

.icons img {
    margin: 10px;
    transition: transform 0.2s ease;
}

.icons img:hover {
    transform: scale(1.1);
}

#details p {
    margin: 10px 0;
    color: #333;
}

.col-md-6.mx-auto {
    display: flex;
    flex-direction: column;
    align-items: center;
}



</style>
