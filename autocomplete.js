let suggestions = ['Um curso de calculo, volume 1, guidorizzi'];
const resultsBox = document.querySelector(".result-box");
const inputbox = document.getElementById("input-box");
inputbox.onkeyup = function (){
    let result = [];
    let input = inputbox.value;
    if (input.length){
        result = suggestions.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML = '';
    }
}
function display(result){
    const content = result.map((list)=>{
        return '<li>' + list + '</li>';
    });
    resultsBox.innerHTML = '<ul>'+ content.join('') +'</ul>';
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
