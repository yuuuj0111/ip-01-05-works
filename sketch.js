function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(180, 220, 230); // 浅蓝色水面背景

  // 1. 鱼身主体：一排重复的三角形，逐渐改变大小和颜色
  for (let i = 0; i < 10; i++) {
    let x = 120 + i * 35;
    let y = 200;
    let size = 70 - i * 3;

    // 由浅橙到深橙渐变，形成鱼身条纹
    fill(255, 150 + i * 8, 50);

    // 三角形鱼身片段
    triangle(
      x, y - size / 2,
      x + 30, y,
      x, y + size / 2
    );
  }

  // 2. 鱼鳞：用 for 循环重复画小圆，形成秩序感
  for (let i = 0; i < 8; i++) {
    let x = 140 + i * 40;
    let y = 200;

    // 透明度逐渐变化，产生节奏
    fill(255, 255, 255, 80 - i * 8);
    ellipse(x, y, 22, 22);
  }

  // 3. 鱼尾：两个矩形组成
  fill(255, 120, 60);
  rect(455, 170, 40, 10);
  rect(455, 220, 40, 10);

  // 4. 鱼头
  fill(255, 140, 60);
  ellipse(100, 200, 50, 60);

  // 5. 眼睛
  fill(255);
  ellipse(110, 185, 18, 18);
  fill(0);
  ellipse(112, 185, 10, 10);

  // 6. 水面气泡：for 循环重复圆形
  for (let i = 0; i < 6; i++) {
    let x = 80 + i * 70;
    let y = 80 + (i % 2) * 30;

    fill(255, 255, 255, 150);
    ellipse(x, y, 10 + i * 2, 10 + i * 2);
  }

  noLoop();
}