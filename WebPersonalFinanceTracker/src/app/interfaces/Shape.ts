import { IConnectionPoint } from './ConnectionPoint';

export interface IShape {
  id: number;
  type: 'rectangle' | 'circle';
  x: number;
  y: number;
  width: number;
  height: number;
  connectionPoints: IConnectionPoint[];
}
