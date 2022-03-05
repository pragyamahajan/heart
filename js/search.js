$(document).ready(function(){
    $("#filter").keyup(function(){


        var filter = $(this).val(), count=0;


        $("nav ul li.search").each(function(){


            if ($(this).text().search(new RegExp (filter, "i")) <0){
                $(this).fadeOut();

                
            } else {
                $(this).show();
                count++;
            }
    });


    let result;
    $("#filter-count").text("Number of results = "+count);
    if (count ==0){
        document.getElementById("cond").innerHTML = `No disease found`;

    } else{ `<p></p>`}
}
);

});

// modal 

var btn = document.querySelectorAll("button.modalbutton");

var modals = document.querySelectorAll(".modal");

var spans = document.getElementsByClassName("close");
 
for (var i = 0; i < spans.length; i++){
    spans[i].onclick = function(){
        for(var index in modals){
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

window.onclick = function(event){
    if (event.target.classList.contains('modal')
    ){
        for(var index in modals){
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
    }
    }