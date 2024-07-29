document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("please Enter new task")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `
            <div class= "task">
                <span id ="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class = "delete">remove</button>
            </div>
                
        `;

        var currnt_task = document.querySelectorAll(".delete");
        for( var i=0; i< currnt_task.length; i++){
            currnt_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}