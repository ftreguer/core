export interface IWebhook {
    id?: string;
    token?: string;

    event: string;
    target: string;
    enabled: boolean;
    conditions: {
        key: string;
        value: any;
        condition: string;
    }[];
}
