// Registering component in box-component.js
AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
      
      this.data.moveY = this.data.moveY + 0.01;
  
      var pos = this.el.getAttribute("position");
  
      pos.y = this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
  // Registering component in box-component.js
AFRAME.registerComponent("camera-zoom-out", {
    schema: {
      moveZ: { type: "number", default: 1 },
    },
  
    tick: function () {
  
      this.data.moveZ = this.data.moveZ + 0.01;
  
      var pos = this.el.getAttribute("position");
  
      pos.z = this.data.moveZ;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
 // Registering component in box-component.js
AFRAME.registerComponent("fall-down", {
    schema: {
      moveY: { type: "number", default: 0 },
    },
  
    tick: function () {
       window.addEventListener("click",(e)=>{
        this.data.moveY = this.data.moveY - 0.0001;
       })
      var pos = this.el.getAttribute("position");
  
      pos.y = pos.y+this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
   