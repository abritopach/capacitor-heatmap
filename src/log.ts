import type { IHeatmapLog } from './models/models';

/**
 * Description [Class to handle logs.]
 *
 * @author abrito
 * @version 0.0.1
*/
export class Log implements IHeatmapLog {

    logEnabled = false;

    constructor(logEnabled = false) {
        this.logEnabled = logEnabled;
    }

    /**
     * Description [This method emit log message to console.]
     *
     * @author abrito
     * @version 0.0.1
     *
     * @method
     * @name log
     * @param {string} msg - Message to show.
     * @param {any[]} suportingDetails - Other info to show.
     * @returns {Void}.
    */
    public log(msg: string, ...suportingDetails: any[]): void {
        this.emitLogMessage("log", msg, suportingDetails);
    }

    /**
     * Description [This method emit debug message to console.]
     *
     * @author abrito
     * @version 0.0.1
     *
     * @method
     * @name debug
     * @param {string} msg - Message to show.
     * @param {any[]} suportingDetails - Other info to show.
     * @returns {Void}.
    */
    public debug(msg: string, ...suportingDetails: any[]): void {
        this.emitLogMessage("debug", msg, suportingDetails);
    }

    /**
     * Description [This method emit warn message to console.]
     *
     * @author abrito
     * @version 0.0.1
     *
     * @method
     * @name warn
     * @param {string} msg - Message to show.
     * @param {any[]} suportingDetails - Other info to show.
     * @returns {Void}.
    */
    public warn(msg: string, ...suportingDetails: any[]): void {
        this.emitLogMessage("warn", msg, suportingDetails);
    }

    /**
     * Description [This method emit error message to console.]
     *
     * @author abrito
     * @version 0.0.1
     *
     * @method
     * @name error
     * @param {string} msg - Message to show.
     * @param {any[]} suportingDetails - Other info to show.
     * @returns {Void}.
    */
    public error(msg: string, ...suportingDetails: any[]): void {
        this.emitLogMessage("error", msg, suportingDetails);
    }

    /**
     * Description [This method emit info message to console.]
     *
     * @author abrito
     * @version 0.0.1
     *
     * @method
     * @name info
     * @param {string} msg - Message to show.
     * @param {any[]} suportingDetails - Other info to show.
     * @returns {Void}.
    */
    public info(msg: string, ...suportingDetails: any[]): void {
        this.emitLogMessage("info", msg, suportingDetails);
    }

    /**
     * Description [This method call console by type message.]
     *
     * @author abrito
     * @version 0.0.1
     *
     * @method
     * @name emitLogMessage
     * @param {enum} msgType - Type of message.
     * @param {string} msg - Message.
     * @param {any[]} suportingDetails - Other info to show.
     * @returns {Void}.
    */
    private emitLogMessage(msgType: "log" | "debug" | "warn" | "error" | "info", msg: string, suportingDetails: any[]) {
        if (this.logEnabled) {
            suportingDetails.length > 0 ? console[msgType]("[Capacitor Heatmap Plugin Web]: " + msg, suportingDetails)
            : console[msgType]("[Capacitor Heatmap Plugin Web]: " + msg);
        }
    }

}