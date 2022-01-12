export const Logs = {
    heatmaps: {
        simple: '__SimpleHeatmap__',
        google: '__GoogleMapsHeatmap__',
        leaflet: '__LeafletMapsHeatmap__',
        mapbox: '__MapboxMapsHeatmap__',
    },
    methods: {
        initialize: 'initialize',
        destroy: 'destroy',
        setData: 'setData',
        getData: 'getData',
        getValueAt: 'getValueAt',
        clearData: 'clearData',
        addPoint: 'addPoint',
        setMax: 'setMax',
        draw: 'draw',
        resize: 'resize',
        gradient: 'gradient',
        opacity: 'opacity',
        radius: 'radius',
        getDataUrl: 'getDataUrl',
    }
}

export const PixelsValue = {
    zero: "0px",
    one: "1px",
    five: "5px",
    ten: "10px",
    fifteen: "15px"
} as const;

export const ZIndex = {
    first: "1",
    max: "99999"
} as const;

export const Position = {
    absolute: "absolute",
    relative: "relative"
} as const;

export const Labels = {
    colorScale: {
        textStart: "COLD",
        textEnd: "HOT"
    }
}

export const Colors = {
    black: "#000000",
    blue: "#311B92"
}
