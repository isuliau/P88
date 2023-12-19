var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define dos variables: 'color' y 'width_of_line' y asígnales los valores.
    color = "Black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {

        //Inicio de actividad adicional

        //Finaliza actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        mouseEvent = "mousedown";
    }

    //Crea la función de detección de evento addEventListener()para mouseup(). 
    function my_mouseup (e)
    {
    mouseEvent = "mouseup"
    }
    addEventListener("mouseup", my_mouseup);

    

    //Crea la función de detección de evento addEventListener()para mouseleave(). 
 
    canvas.addEventListener("mouseleave", my_mouseleave);   

    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    
    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        if (mouseEvent == "my_mousedown")
            {
                ctx.beginPath();
                ctx.strokeStyle = color
                ctx.lineWidth = width_of_line
            }
        //If yes call "beginPath()".
        
        // Assign values to strokeStyle and lineWidth of canvas "ctx".


        //print the current x and y coordinate.
        console.log("Ultima posicion de las coordenadas = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        //Call moveTo() with parameters last_position_of_x  and last_position_of_y.
   

        // The drawing begins from these points.
        

        //print the current x and y coordinate.
        console.log("Posicion actual de las coordenadas = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;       
        }



//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
