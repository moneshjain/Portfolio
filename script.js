
// var scrollInterval = setInterval(function(){
//     window.scrollBy(0,50);
// }, 50);
// var interval = setInterval(funtion(){
//     var targetSectionCoordinates 
    
//     window.scrollBy(0,20);
// }, 50);


// for smooth scrolling

var navMenuAnchorTegs = document.querySelectorAll('.nav-menu a');
for(var i = 0 ; i< navMenuAnchorTegs.length; i++ ){
    navMenuAnchorTegs[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        console.log(targetSection);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 30);
    });
}

// skill bar

var progressBars = document.querySelectorAll('.skill-progress > div');;
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetwidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0 ;
        let interval = setInterval(function(){
            if(currentWidth > targetwidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 3);
    }
}


function checkScroll(){
    var coordinates =  skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        console.log('skills section visible')
        fillBars();
    } else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}







