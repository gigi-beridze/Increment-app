let countEl = document.getElementById('count-el');
let saveCount = document.getElementById('save-count');
let hidDiv = document.getElementById('hid-div');
let hisA = document.getElementById('hisA-div');
let count = 0;

function increment(){
    count++;
    document.getElementById('count-el').innerText = count;
}
function opens(){
    let X = true;
    if(X==true){
        document.getElementById('his-div').style.display = "none";
        document.getElementById('hisA-div').style.display = "block";
        document.getElementById('hid-div').style.display = "block";
    }
}
function openA(){
    let x = true;
    if(x==true){
        document.getElementById('his-div').style.display = "block";
        document.getElementById('hisA-div').style.display = "none";
        document.getElementById('hid-div').style.display = "none";
    }
}
function save(){
    let countStr = count + ",";
    if(count==0){
        alert("Click Increment Button")
    }else{
        if(countEl==count){
            alert("=")
        }else{
            if(saveCount>2){
                alert("Finish! Restarting..");
            }else{
                document.getElementById('save-count').innerHTML += countStr;
                console.log(count)
                document.getElementById('count-el').textContent = 0;
                count=0;
            }
        }
    }
}