class Nut {


  constructor (position, speed, radius, color) {
    this.position = position;
    this.speed = speed;
    this.radius = radius;
    this.color = color;
  }

  // draws a circle with correct position, color and radius
  draw () {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0, 2 * Math.PI
    );
    context.fillStyle = this.color;
    context.fill();

  }

  // move circle  and reverse direction if circle collides with border
  move () {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    console.log(this.position);
    if(
      this.position.x + this.radius > canvas.width ||
      this.position.x - this.radius < 0
    )
    this.speed.x *= -1;

    if(
      this.position.y + this.radius > canvas.height ||
      this.position.y - this.radius < 0
    )
    this.speed.y *= -1;

 // These make the entire canvas stop moving, as they try to reverse constantly
    if(
      this.position.x + this.radius < this.position.x ||
      this.position.x - this.radius > 200
    )
      this.speed.x *= -1;

      if(
        this.position.y + this.radius < this.position.y ||
        this.position.y - this.radius > 200
      )
      this.speed.y *= -1;

  }

}

/*
function ballCollision() {
    for (let i=0; i<objArray.length-1; i++) {
        for (let j=i+1; j<objArray.length; j++) {
            let ob1 = objArray[i]
            let ob2 = objArray[j]
            let dist = distance(ob1, ob2)

            if (dist < ob1.radius + ob2.radius) {
                let theta1 = ob1.angle();
                let theta2 = ob2.angle();
                let phi = Math.atan2(ob2.y - ob1.y, ob2.x - ob1.x);
                let m1 = ob1.mass;
                let m2 = ob2.mass;
                let v1 = ob1.speed();
                let v2 = ob2.speed();

                let dx1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2m2v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.cos(phi) + v1*Math.sin(theta1-phi) * Math.cos(phi+Math.PI/2);
                let dy1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2m2v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.sin(phi) + v1*Math.sin(theta1-phi) * Math.sin(phi+Math.PI/2);
                let dx2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2m1v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.cos(phi) + v2*Math.sin(theta2-phi) * Math.cos(phi+Math.PI/2);
                let dy2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2m1v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.sin(phi) + v2*Math.sin(theta2-phi) * Math.sin(phi+Math.PI/2);

                ob1.dx = dx1F;
                ob1.dy = dy1F;
                ob2.dx = dx2F;
                ob2.dy = dy2F;

                staticCollision(ob1, ob2)
                */
