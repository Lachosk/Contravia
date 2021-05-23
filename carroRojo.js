class carroRojo {
    constructor(x,y,ancho,alto,velocidad){
        this.x = x;
        this.y = y;
        this.ancho = 100;
        this.alto = 70;
        this.velocidad = (Math.random()*(3-1)+2);
    }
pintar(){
    noStroke();
    //Ruedas
    fill(50);
    rect(this.x+30,this.y-35,30,20);
    rect(this.x-30,this.y-35,30,20);
    rect(this.x+30,this.y+35,30,20);
    rect(this.x-30,this.y+35,30,20);
    //Cuerpo de carro
    fill(236,87,50);
    rectMode(CENTER);
    rect(this.x,this.y,this.ancho,this.alto);
    //Ventana
    fill(207,255,253);
    rect(this.x-35,this.y,20,60);
    //Frente
    fill(255,166,44,90);
    rect(this.x+15,this.y,60,60);  
}
mover(){
    this.x -= this.velocidad;
		
    if (this.x<0) {
        this.x=810;
    }	
}
getX(){
    return this.x;
}
getY(){
    return this.y;
}

}