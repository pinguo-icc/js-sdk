import { IBridge } from "./bridge";
export interface IBlurrrBridge extends IBridge {
    doScanWithKeyWord(callback: Function, keyword: string, page?: string): Promise<any>;
    doScanWithQRInfo(callback: Function, QRInfo: string, page?: string): Promise<any>;
    saveResource(type: string, id: string): Promise<any>;
    applyResource(type: string, id: string): Promise<any>;
    doLocalCache(url: string[], key: string): Promise<any>;
    setStatusBarStyle(style: string): Promise<any>;
    showSalesPage(): Promise<any>;
    registerNotify(): Promise<any>;
    doShare(text: string): Promise<any>;
    showHomeTabBar(): void;
    hideHomeTabBar(): void;
}