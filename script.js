const SignInBtn= document.getElementById("sign-in");
const modal= document.getElementById("modal");
const overlay= document.getElementById("overlay");
const CloseBtn1= document.getElementById("CloseSign-In");
const hidesignup= document.getElementById("FullName").hidden=true;
const lightmode= document.getElementById("Lightmode");

lightmode.addEventListener("click",switchmode);
   function switchmode() {
    if (document.body.getAttribute("data-theme") === "light") 
    {
        document.body.setAttribute("data-theme", "dark");
    }
    else {
      document.body.setAttribute("data-theme", "light");
    }
  }

  

SignInBtn.addEventListener("click",SigninFormReveal);

    function SigninFormReveal() {
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
    }

CloseBtn1.addEventListener("click",closeSignin);
 function closeSignin() {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
        }   

const signbtntoggle = document.querySelectorAll('.signup-in');
const highlight = document.querySelector('.toggle-highlight-1');
const signinformhide = document.querySelectorAll('#FullName, #email, #confirmPassword');

signbtntoggle.forEach((btnX, index) => { /*eelemt being effected then for which btn with which index as in list*/

  btnX.addEventListener('click', () => { /*activates listening for click in each btnx*/

    highlight.classList.toggle('highlight-right', index === 1);
     /*ele being class addd, what is being changed which is class list here, toggle as in turn on off highlight right as a class this depeends on index being one or not*/
/*when btn clicked index=0 > false = rmoveees indeex=1 true truee=adds*/
    
if (index === 1) { // Check if the clicked button is the "Sign In" button (index 1)
  signinformhide.forEach(element => {
    element.classList.add("hidden2");
  });
} else {
  signinformhide.forEach(element => {
    element.classList.remove("hidden2");
  });
}
  });
});  /* after )comes ;*/        