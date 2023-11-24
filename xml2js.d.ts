declare namespace xml2js {
    export function parseString(xml: string, options: any, callback: (err: any, result: any) => void): void;
    export function parseString(xml: string, callback: (err: any, result: any) => void): void;
    export function parseString(xml: string, options?: any): Promise<any>;
    export function Builder(options?: any): any;
}

export = xml2js;