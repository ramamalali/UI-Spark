

function menuToggle(element) {
      let dropdown = document.querySelector('.dropdown'); 
        let jobsIcon = document.getElementById('jobsIcon');
  
  if (dropdown.style.display == "flex") {
          dropdown.style.display = "none";
           jobsIcon.classList.remove('selected');
           jobsIcon.classList.add('unselected');
      } else {
          dropdown.style.display = "flex";
          jobsIcon.classList.remove('unselected');
          jobsIcon.classList.add('selected');
      }  
     
       if(element.style.fontWeight === 'bold'){
        element.style.fontWeight = 'normal' ;
    }else{
        element.style.fontWeight = 'bold' ;
       
    }



  } 
function toggleArrow(item){
   let items = document.querySelectorAll('.item');
   let selectedItem = item ;
   for(let i = 0 ; i<items.length ; i++ ){
    let currentItem = items[i];
    if(currentItem !==  selectedItem){
        currentItem.classList.remove('selected');
        currentItem.classList.add('unselected');

    }}
   if(selectedItem.classList.contains('selected')){
    selectedItem.classList.remove('selected');
    selectedItem.classList.add('unselected');
   }else{
    selectedItem.classList.remove('unselected');
    selectedItem.classList.add('selected');
   }
  } 



let header = document.getElementsByClassName('dropdown');
let color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function () {
        let corrent = document.getElementsByClassName('active');
        for (let j = 0; j < corrent.length; j++) {
            corrent[j].classList.remove('active')
        }
        color[i].classList.add('active')
    });
}




const carousel = document.querySelector('.carousel');
 firstImg =  carousel.querySelectorAll('img')[0];
 arrowIcons = document.querySelectorAll('.wrapper img');

const carouselButtom = document.querySelector('.carouselButtom');
 firstImg =  carouselButtom.querySelectorAll('img')[0];
 wrapperButtomicon = document.querySelectorAll('.wrapperButtom img');

let isDragStart = false , prevPageX , prevScrollLeft ;
let firstImgWidth = firstImg.clientWidth + 14;

const showHideIcon =() =>{
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth ;
    arrowIcons[0].style.display =  carousel.scrollLeft == 0 ? 'none' : 'block';
    arrowIcons[1].style.display =  carousel.scrollLeft == scrollWidth ? 'none' : 'block';
    wrapperButtomicon[0].style.display =  carouselButtom.scrollLeft == 0 ? 'none' : 'block';
    wrapperButtomicon[1].style.display =  carouselButtom.scrollLeft == scrollWidth ? 'none' : 'block';
}
arrowIcons.forEach(icon => {
   icon.addEventListener('click' , () =>{
    carousel.scrollLeft +=icon.id == 'prev' ? - firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcon(),60);
   }); 
});
wrapperButtomicon.forEach(icon => {
   icon.addEventListener('click' , () =>{
    carouselButtom.scrollLeft +=icon.id == 'prevButtom' ? - firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcon(),60);
   }); 
});
const DragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft ; 
}
 const dragging = (e) =>{
    if(! isDragStart) return;
    e.preventdefault();
    carousel.classList.add('dragging');
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft =  prevScrollLeft - positionDiff;
    showHideIcon();
 }
 const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove('dragging');
 }
carousel.addEventListener('mousedown' , DragStart);
carousel.addEventListener('mousemove' , dragging);
carousel.addEventListener('mouseup' , dragStop);
