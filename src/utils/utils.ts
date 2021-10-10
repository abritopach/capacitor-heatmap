import { HeatmapGradient } from "../models/models";

export const Utils = {

    createCanvas() {
        if (typeof document !== 'undefined') {
            return document.createElement('canvas');
        }
    },

    colorize (pixels: any, gradient: any) {
        for (let i = 0, len = pixels.length, j; i < len; i += 4) {
            j = pixels[i + 3] * 4; // Get gradient color from opacity value.
            if (j) {
                pixels[i] = gradient[j];
                pixels[i + 1] = gradient[j + 1];
                pixels[i + 2] = gradient[j + 2];
            }
        }
    },

    gradientArray(grad: HeatmapGradient) {
        // Create a 256x1 gradient that we'll use to turn a grayscale heatmap into a colored one.
        const canvas: HTMLCanvasElement = Utils.createCanvas() as HTMLCanvasElement,
            ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D,
            gradient = ctx.createLinearGradient(0, 0, 0, 256);
        canvas.width = 1;
        canvas.height = 256;
        for (var i in grad) {
            gradient.addColorStop(+i, grad[i]);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 256);
        return ctx.getImageData(0, 0, 1, 256).data;
    },

    createCircle(r: number, blur?: number) {
        blur = blur === undefined ? 15 : blur;
        // Create a grayscale blurred circle image that we'll use for drawing points.
        const circle: HTMLCanvasElement  = Utils.createCanvas() as HTMLCanvasElement ,
            ctx: CanvasRenderingContext2D = circle.getContext('2d') as CanvasRenderingContext2D,
            r2 = r + blur;

        circle.width = circle.height = r2 * 2;
        ctx.shadowOffsetX = ctx.shadowOffsetY = r2 * 2;
        ctx.shadowBlur = blur;
        ctx.shadowColor = 'black';
        ctx.beginPath();
        ctx.arc(-r2, -r2, r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        return {circle: circle, radius: r2}
    }


}