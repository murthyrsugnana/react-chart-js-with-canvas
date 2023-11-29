export function createDiagonalPattern(color = "rgb(52, 125,162)") {
    let shape = document.createElement("canvas");
    shape.width = 10;
    shape.height = 10;
    // shape.style.border = "10px solid rgb(52, 125,162)";
    let c = shape.getContext("2d");
    c.strokeStyle = color;
    c.beginPath();
    c.lineWidth = 1;
    c.moveTo(10, 0);
    c.lineTo(0, 10);
    c.stroke();
    // c.beginPath();
    // c.moveTo(10, 0);
    // c.lineTo(0, 10);
    // c.stroke();
    return c.createPattern(shape, "repeat");
  }
  
  // export function createDiagonalPattern(color = "rgb(52, 125,162)") {
  //   let shape = document.createElement("canvas");
  //   shape.width = 10;
  //   shape.height = 10;
  //   let c = shape.getContext("2d");
  //   c.strokeStyle = color;
  //   c.beginPath();
  //   c.moveTo(2, 0);
  //   c.lineTo(10, 8);
  //   c.stroke();
  //   c.beginPath();
  //   c.moveTo(0, 8);
  //   c.lineTo(2, 10);
  //   c.stroke();
  //   return c.createPattern(shape, "repeat");
  // }
  