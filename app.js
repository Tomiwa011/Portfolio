


window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_lw5g76v', 'template_mzhqsqt', this)
          .then(function() {
              console.log('SUCCESS!');
              alert('Message sent succesfully')
          }, function(error) {
              console.log('FAILED...', error);
              alert('Message failed to send')
          });
  });
}
function myFunction() {
  var element = document.getElementById("body");
  let name = document.getElementById("name");
  let name1 = document.getElementById("name1");
  let name2 = document.getElementById("name2");
  let name3 = document.getElementById("name3");
  let appCon = document.getElementById("app1");
  let appCon2 = document.getElementById("app2");
  let appCon3 = document.getElementById("app3");
  let bgIntro = document.getElementById("bg-intro");
  let foot = document.getElementById('foot')
  


  element.classList.toggle("light-mode");
  bgIntro.classList.toggle("bgl-intro");
  name.classList.toggle("light-text");
  name2.classList.toggle("light-text");
  name3.classList.toggle("light-text");
  name1.classList.toggle("light-text");
  appCon.classList.toggle("bg-light");
  appCon2.classList.toggle("bg-white");
  appCon3.classList.toggle("bg-light");
  appCon2.classList.toggle("light-text");
  


  foot.classList.toggle('ff')
  console.log("cliecked");
}

  let gitPage = document.getElementById('gitBtn')
  let gitBack = document.getElementById('git-back')
  let git = document.getElementById('git')
  let contGit = document.getElementById('cont-git')

  gitBack.addEventListener('click',()=>{
git.style.display = 'flex'
git.style.transition = '1s'
contGit.style.display = 'none'
  })
  gitPage.addEventListener('click',()=>{
    contGit.style.display =' block'
    contGit.style.transition ='1s'
    git.style.display= 'none'
  })

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// console.clear();
const list = document.querySelectorAll('.list');
const nav = document.querySelector('.navigation');
list.forEach(item => item.addEventListener('click', function(e){
	list.forEach(li => li.classList.remove('active'));
	e.currentTarget.classList.add('active');
}));