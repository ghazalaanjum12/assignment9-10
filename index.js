/*
    Author: Ghazala Anjum C0905815
    Version: 1.0
    Date: 10-04-2024
*/
document.addEventListener("DOMContentLoaded", function() {
    // Get canvas and context
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');
  
    // Get buttons and slider
    const eraseButton = document.getElementById('erase');
    const newButton = document.getElementById('new');
    const blackButton = document.getElementById('black');
    const pinkButton = document.getElementById('pink');
    const blueButton = document.getElementById('blue');
    const yellowButton = document.getElementById('yellow');
    const slider = document.getElementById('slider');
    const brushSizeDisplay = document.getElementById('brushSize');
  
    // Variables for drawing
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
  
    // Event listener for starting drawing
    function startDrawing(e) {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  
    // Event listener for drawing
    function draw(e) {
      if (!isDrawing) return;
      // Set stroke style to selected color or use current stroke style
      ctx.strokeStyle = e.target.style.backgroundColor || ctx.strokeStyle;
      ctx.lineWidth = slider.value;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
  
      // Start drawing path
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
  
      // Update last position
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  
    // Event listener for stopping drawing
    function stopDrawing() {
      isDrawing = false;
    }
  
    // Event listener for clearing canvas
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    // Event listener for eraser button
    eraseButton.addEventListener('click', function() {
      // Set stroke style to white for eraser
      ctx.strokeStyle = '#fff';
    });
  
    // Event listener for new button (clear canvas)
    newButton.addEventListener('click', clearCanvas);
  
    // Event listener for black button
    blackButton.addEventListener('click', function() {
      // Set stroke style to black
      ctx.strokeStyle = '#000';
    });
  
    // Event listener for pink button
    pinkButton.addEventListener('click', function() {
      // Set stroke style to pink
      ctx.strokeStyle = '#F50057';
    });
  
    // Event listener for blue button
    blueButton.addEventListener('click', function() {
      // Set stroke style to blue
      ctx.strokeStyle = '#2979FF';
    });
  
    // Event listener for yellow button
    yellowButton.addEventListener('click', function() {
      // Set stroke style to yellow
      ctx.strokeStyle = '#FFD600';
    });
  
    // Event listener for slider (brush size)
    slider.addEventListener('input', function() {
      // Display current brush size
      brushSizeDisplay.textContent = this.value;
    });
  
    // Event listeners for drawing on canvas
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  });
  