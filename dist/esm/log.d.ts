import { IHeatmapLog } from './models/models';
export declare class Log implements IHeatmapLog {
    logEnabled: boolean;
    constructor(logEnabled?: boolean);
    log(msg: string, ...suportingDetails: any[]): void;
    debug(msg: string, ...suportingDetails: any[]): void;
    warn(msg: string, ...suportingDetails: any[]): void;
    error(msg: string, ...suportingDetails: any[]): void;
    info(msg: string, ...suportingDetails: any[]): void;
    private emitLogMessage;
}
