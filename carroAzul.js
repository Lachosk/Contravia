class carroAzul {
    constructor(x,y,ancho,alto){
        this.x = x;
        this.y = y;
        this.ancho = 100;
        this.alto = 70;
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
    fill(0);
    rectMode(CENTER);
    rect(this.x,this.y,this.ancho,this.alto);
    //Ventana
    fill(207,255,253);
    rect(this.x+35,this.y,20,60);
    //Frente
    fill(61,90,128);
    rect(this.x-15,this.y,60,60);  
}
mover(){
    this.x += 4;
			if (this.x>800) {
				this.x=0;
			}	
            
        }
getX(){
    return this.x;
}
getY(){
    return this.y;
}
setY(y){
    this.y = y;
}

}