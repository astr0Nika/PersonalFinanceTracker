import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ConnectionPoint {
  x: number;
  y: number;
  id: number;
}

interface Shape {
  id: number;
  type: 'rectangle' | 'circle';
  x: number;
  y: number;
  width: number;
  height: number;
  connectionPoints: ConnectionPoint[];
}

@Component({
  selector: 'app-shape-builder',
  imports: [CommonModule],
  templateUrl: './shape-builder.html',
  styleUrl: './shape-builder.css',
})
export class ShapeBuilder {
  shapes: Shape[] = [];
  draggingShape: Shape | null = null;
  idCounter = 0;

  offsetX = 0;
  offsetY = 0;

  addShape(type: 'rectangle' | 'circle') {
    const width = 80;
    const height = 60;
    const newShape: Shape = {
      id: this.idCounter++,
      type,
      x: 50,
      y: 50,
      width,
      height,
      connectionPoints: [
        { x: width / 2, y: 0, id: this.idCounter++ },
        { x: width / 2, y: height, id: this.idCounter++ },
      ],
    };
    this.shapes.push(newShape);
  }

  onMouseDown(event: MouseEvent, shape: Shape) {
    this.draggingShape = shape;
    this.offsetX = event.offsetX - shape.x;
    this.offsetY = event.offsetY - shape.y;
  }

  onMouseMove(event: MouseEvent) {
    if (this.draggingShape) {
      this.draggingShape.x = event.offsetX - this.offsetX;
      this.draggingShape.y = event.offsetY - this.offsetY;
    }
  }

  onMouseUp() {
    this.draggingShape = null;
  }
}
