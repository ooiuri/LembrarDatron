let titulo, clickX, clickY,cnv;
var value = 0;
function preload(){
    bits8 = loadFont('fonts/8-BIT WONDER.TTF')
}
function setup() {
     cnv = createCanvas(window.innerWidth, window.innerHeight*.75);
    cnv.style('display', 'block');
    cnv.parent('sketch-holder');
    titulo = loadImage('assets/cade_o_kit_bixo.png');
    nataln = loadImage('assets/natal normal.png');
    natalninv = loadImage('assets/natal normal invertido.png');
    natalp = loadImage('assets/natal piscando.png');
    natalinv = loadImage('assets/natal piscando invertido.png');
    enviarEmail = loadImage('assets/enviar email.png');
}


function draw() {
    background(49,51,53);
    wave();
    textos();
}

function textos(){
    imageMode(CENTER);
    titulosizex = height*.0002;
    image(titulo,width/2,height*.3,titulo.width*titulosizex, titulo.height*titulosizex);
    textFont(bits8);
    textAlign(CENTER);
    fill(255);
    stroke(30,31,33);
    strokeWeight(5);
    posX = map(mouseX, 0, width, -150, 150)
    text(`Ajude o nosso amigo Natal a 
lembrar do kit bixo`, width/2+posX,mouseY*0.15 + height*.66);
    

    imageMode(CENTER);
    rot = map(mouseX, 0, width, -0.707,.707);
    translate(width/2, height/2);
    rotate(rot);
    if(value === 0){
        if(rot < 0)
        image(nataln,0,0);
        else
        image(natalninv,0,0);
    }
    else{
        if(rot < 0)
        image(natalp,0,0);
        else
        image(natalinv,0,0);
    }
    /*
    rotate(-rot);
    imageMode(CENTER);
    titulosizex = height*.0002*enviarEmail.width;
    titulosizey = height*.0002*enviarEmail.height;   
    if(clickX > width/2 - titulosizex*0.5 && clickX < width/2 + titulosizex*0.5 && clickY > height*.9 - titulosizey/2 && clickY < height*.9 + titulosizey/2){
        
        //print("ok");
        
    }
    else{
        
        //print(clickX);
    }
    image(enviarEmail,0,height*.4,titulosizex, titulosizey);
    
    //<a class="btn btn-info btn-lg" href="#" role="button">Click this button for some truth</a>
    */
}

let yoff = 0.0;
function wave(){
    fill(30,31,33);
    noStroke();
    beginShape();
    
    let xoff = 0; // Option #1: 2D Noise
    // let xoff = yoff; // Option #2: 1D Noise
  
    // Iterate over horizontal pixels
    for (let x = 0; x <= width; x += 10) {
      // Calculate a y value according to noise, map to
  
      // Option #1: 2D Noise
      let y = map(noise(xoff, yoff), 0, 1, height/2, mouseY*0.2 + height/2);
  
      // Option #2: 1D Noise
       //let y = map(noise(xoff), 0, 1, 200,300);
  
      // Set the vertex
      vertex(x, y);
      // Increment x dimension for noise
      xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

}

function mousePressed() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
    clickX = mouseX;
    clickY = mouseY;
}

function windowResized() {
    
  resizeCanvas(windowWidth, windowHeight*.75);
    //centerCanvas();
  }

  function centerCanvas() {
    var xx = (windowWidth - width) / 2;
    var yy = (windowHeight*.75 - height) / 2;
    cnv.position(xx, yy);
  }
  
  function sendMail() {
    var name = document.getElementById("nomeform").value;
   // var email = document.getElementById("emailform").value;
    var message = `olá amigo, quando vai chegar o kit-bixo?
    `
    //var message = $('#0 textarea').val();
    window.location.href = 'mailto:gabrielpeixoto436@gmail.com?subject=[KIT BIXO] - ' + name  + '&body=' + message + name;
    print(name);
};
/*
<script>
function sendMail()
{
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("selectList").value;
    document.location.href = "mailto:chrisgreg23@googlemail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}
</script>
*/