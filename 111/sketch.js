let fishX;       // 鱼头位置
let fishSpeed;   // 游动速度
let mouthOpen;   // 嘴巴是否张开
let eatTimer;    // 吃三角的计时
let currentIndex; // 当前被吃掉的三角形序号

function setup() {
  createCanvas(600, 400);
  noStroke();
  fishX = 70;
  fishSpeed = 1.2;
  mouthOpen = false;
  eatTimer = 0;
  currentIndex = -1;
}

function draw() {
  background(180, 220, 230);

  // 1. 画固定不动的三角形鱼身
  for (let i = 0; i < 10; i++) {
    let x = 180 + i * 35;   // 三角形原地固定排列
    let y = 200;
    let size = 70 - i * 3;

    // 还没被吃掉的三角才显示
    if (i > currentIndex) {
      fill(255, 150 + i * 8, 50);
      triangle(
        x, y - size / 2,
        x + 30, y,
        x, y + size / 2
      );
    }
  }

  // 2. 画固定的鱼鳞（可选装饰）
  for (let i = 0; i < 8; i++) {
    let x = 200 + i * 40;
    let y = 200;
    if (i > currentIndex) {
      fill(255, 255, 255, 80 - i * 8);
      ellipse(x, y, 22, 22);
    }
  }

  // 3. 鱼头向前移动
  fishX += fishSpeed;

  // 4. 检测鱼头是否接近下一个三角形
  let nextTriangleX = 180 + (currentIndex + 1) * 35;

  if (fishX + 25 >= nextTriangleX) {
    // 到达三角形位置，张开嘴吃一口
    mouthOpen = true;
    eatTimer++;

    // 吃一段时间后，吃掉当前三角，嘴巴合上
    if (eatTimer > 20) {
      currentIndex++;
      mouthOpen = false;
      eatTimer = 0;

      // 全部吃完后，鱼头继续游出画面并重置
      if (currentIndex >= 10) {
        fishSpeed = 2; // 吃完后加速游走
      }
    }
  } else {
    mouthOpen = false;
  }

  // 5. 画鱼头
  fill(255, 140, 60);
  ellipse(fishX, 200, 50, 60);

  // 6. 画嘴巴：张开时变成大椭圆，闭合时是一条线
  if (mouthOpen) {
    fill(80, 40, 20);
    ellipse(fishX + 25, 210, 20, 25);
  } else {
    fill(255, 120, 60);
    rect(fishX + 20, 208, 15, 4);
  }

  // 7. 眼睛
  fill(255);
  ellipse(fishX + 10, 185, 18, 18);
  fill(0);
  ellipse(fishX + 12, 185, 10, 10);

  // 8. 画鱼尾（鱼头在移动，所以鱼尾跟着鱼头走）
  fill(255, 120, 60);
  rect(fishX - 45, 170, 40, 10);
  rect(fishX - 45, 220, 40, 10);

  // 9. 全部吃完后重置动画
  if (fishX > width + 100) {
    fishX = 70;
    currentIndex = -1;
    fishSpeed = 1.2;
    eatTimer = 0;
  }

  // 10. 气泡装饰
  for (let i = 0; i < 6; i++) {
    let bubbleX = 80 + i * 70;
    let bubbleY = (frameCount * -0.8 + i * 60) % height;
    fill(255, 255, 255, 150);
    ellipse(bubbleX, bubbleY, 10 + i * 2, 10 + i * 2);
  }
}