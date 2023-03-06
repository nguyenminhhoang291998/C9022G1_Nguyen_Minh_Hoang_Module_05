import {Shape} from "./shape";

export class Rectangle extends Shape implements IArea{

    constructor(x: number, y: number, private _width: number,private _height: number) {
        super(x, y);
    }

    area(): number {
        return this._width* this._height;
    }


    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }
}
