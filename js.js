class Course {
  constructor(id, name, credit, score){
    this.id = id;
    this.name = name;
    this.credit = credit;
    this.score = score;
  }
}
let courses = [];

const table = document.querySelector(".info-table");

//*==========================================================================
//* form action & add course
//*==========================================================================

function setAction(form){
  let id = courses.length!== 0 ? courses[courses.length-1].id+1 : 1;
  let name = form.courseName.value;
  let credit = Number(form.credit.value);
  let score = Number(form.score.value);
  courses.push(new Course(id, name, credit, score));

  const content = table.appendChild(document.createElement('tr'));
  content.setAttribute("id",'tr-'+id);
  content.appendChild(document.createElement('td')).textContent =courses.length;
  content.appendChild(document.createElement('td')).textContent =name;
  content.appendChild(document.createElement('td')).textContent =credit;
  content.appendChild(document.createElement('td')).textContent =score;
  content.appendChild(document.createElement('td')).setAttribute("id", id);
  let deleteBtn= document.getElementById(id);
  deleteBtn.className = 'dlt-btn';
  deleteBtn.appendChild(document.createElement('i')).className ='fa-regular fa-trash-can i-item';
  
  document.querySelectorAll('input')[0].value = '';
  document.querySelectorAll('input')[1].value = '';
  document.querySelectorAll('input')[2].value = '';

  
}


//*==========================================================================
//* Result
//*==========================================================================
document.querySelector(".res-btn").addEventListener('click', function(){
  let res = courses.reduce( (sum, el) => sum+ (el.credit * el.score), 0 );
  
document.querySelector(".res").textContent = res/courses.reduce((sum, el) => sum + el.credit, 0);
  console.log(res)
});

//*==========================================================================
//* Delete item
//*==========================================================================
  document.querySelector(".info-table").addEventListener('click', function(event){
    let element = event.target.parentNode.parentNode.getAttribute("id");
    
    let elementId = parseInt(element.split("-")[1]);
    
    courses.splice(elementId, 1);
    
    for(let i=0; i<courses.length; i++){
      if(courses[i].id === elementId){
        courses.splice(i, 1);
        break;
      }
    }


    let item = document.getElementById(element);
    item.remove();
  });

