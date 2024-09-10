const btnEl=document.getElementById('btn');
const dobEl=document.getElementById('dob');

function calculateAge(){
    const resultEl=document.getElementById('result');
    const birthdayValue=dobEl.value;
    // console.log(birthdayValue)
    if(birthdayValue===''){
        alert("Please enter your birthday");
    }
    else{
        const age=getAge(birthdayValue);

        resultEl.innerText=`Your age is ${age} ${age>1?"years":"year"} old`
    }
}

function getAge(birthdayValue){
    const currentDate=new Date();
    const birthdayDate=new Date(birthdayValue);
    // console.log(birthdayDate.getFullYear());
    let age= currentDate.getFullYear()-birthdayDate.getFullYear();
    // console.log(age);
    const month=currentDate.getMonth()-birthdayDate.getMonth();

    if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate())) {
        age--;
    }
    return age;


}

btnEl.addEventListener('click',calculateAge);