import { IConnectionPoint } from './IConnectionPoint';

export interface IShape {
  id: number;
  type: 'rectangle' | 'circle' | 'path';
  x: number;
  y: number;
  width: number;
  height: number;
  connectionPoints: IConnectionPoint[];
}
