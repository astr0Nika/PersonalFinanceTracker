import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IShape } from '../interfaces/Shape';

@Component({
  selector: 'app-shape-builder',
  imports: [CommonModule],
  templateUrl: './shape-builder.html',
  styleUrl: './shape-builder.css',
})
export class ShapeBuilder {
  shapes: IShape[] = [];
  draggingShape: IShape | null = null;
  idCounter = 0;

  offsetX = 0;
  offsetY = 0;

  constructor() {
    this.shapes = [
      {
        id: this.idCounter++,
        type: 'circle',
        x: 100,
        y: 220,
        width: 70,
        height: 70,
        connectionPoints: [
          {
            x: 10,
            y: 0,
            id: this.idCounter++,
          },
        ],
      },
      {
        id: this.idCounter++,
        type: 'rectangle',
        x: 400,
        y: 30,
        width: 20,
        height: 55,
        connectionPoints: [
          {
            x: 0,
            y: 0,
            id: this.idCounter++,
          },
        ],
      },
    ];
  }

  addShape(type: 'rectangle' | 'circle') {
    const width = 80;
    const height = type === 'circle' ? 80 : 60;
    const newShape: IShape = {
      id: this.idCounter++,
      type,
      x: 50,
      y: 50,
      width,
      height,
      connectionPoints: [
        {
          x: width / 2,
          y: type === 'circle' ? 0 : height,
          id: this.idCounter++,
        },
      ],
    };

    this.shapes.push(newShape);
  }

  shape_onMouseDown(event: MouseEvent, shape: IShape) {
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
    if (this.draggingShape !== null) {
      const movedShape: IShape = this.draggingShape;

      this.shapes.forEach((shape) => {
        if (
          shape.id !== movedShape.id &&
          this.doShapesOverlay(shape, movedShape)
        ) {
          this.alignConnectionPoint(movedShape, shape);
        }
      });
    }

    this.draggingShape = null;
  }

  doShapesOverlay(oneShape: IShape, twoShape: IShape): boolean {
    var horizontalOverlap = false;
    var verticalOverlap = false;

    if (
      (twoShape.x > oneShape.x && twoShape.x < oneShape.x + oneShape.width) ||
      (twoShape.x + twoShape.width > oneShape.x &&
        twoShape.x + twoShape.width < oneShape.x + oneShape.width)
    ) {
      horizontalOverlap = true;
    }

    if (
      (twoShape.y > oneShape.y && twoShape.y < oneShape.y + oneShape.height) ||
      (twoShape.y + twoShape.height > oneShape.y &&
        twoShape.y + twoShape.height < oneShape.y + oneShape.height)
    ) {
      verticalOverlap = true;
    }

    return horizontalOverlap && verticalOverlap;
  }

  alignConnectionPoint(moveShape: IShape, targetShape: IShape) {
    const cp1 = targetShape.connectionPoints[0];
    const cp2 = moveShape.connectionPoints[0];

    const cp1AbsX = targetShape.x + cp1.x;
    const cp1AbsY = targetShape.y + cp1.y;

    const newX = cp1AbsX - cp2.x;
    const newY = cp1AbsY - cp2.y;

    this.shapes.find((shape) => shape.id === moveShape.id)!.x = newX;
    this.shapes.find((shape) => shape.id === moveShape.id)!.y = newY;
  }
}
