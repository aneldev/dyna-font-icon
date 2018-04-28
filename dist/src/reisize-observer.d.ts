export interface IResizeObserverConfig {
    className: string;
    onResize: (element: Element, top: number, left: number, width: number, height: number) => void;
}
export declare class UtilResizeObserver {
    private config;
    private resizeObserver;
    constructor(config: IResizeObserverConfig);
    dispose(): void;
}
