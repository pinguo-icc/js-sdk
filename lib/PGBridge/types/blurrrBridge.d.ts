import { IBaseBridge } from "./baseBridge";
export interface IBlurrrBridge extends IBaseBridge {
    doScanWithKeyWord(keyword: string, page?: string): Promise<any>;
    doScanWithQRInfo(QRInfo: string, page?: string): Promise<any>;
    saveResource(type: string, id: string): Promise<any>;
    applyResource(type: string, id: string): Promise<any>;
    doLocalCache(url: string[], key: string): Promise<any>;
    setStatusBarStyle(style: string): Promise<any>;
    showSalesPage(): Promise<any>;
    registerNotify(): Promise<any>;
    doShare(text: string, rect: Rect): Promise<any>;
    showHomeTabBar(): void;
    hideHomeTabBar(): void;
}
