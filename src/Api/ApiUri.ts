export class ApiUri {
    private static readonly localhostBase: string = "http://localhost:9003";
    private static readonly apiBase: string = ApiUri.localhostBase + "/API/";

    public static readonly getItemsUri: string = ApiUri.apiBase + "items";
    public static readonly postItemUri: string = ApiUri.apiBase + "item";

    static deleteItemUri(itemId: string) {
        return ApiUri.apiBase + "item/" + itemId;
    }
    static updateItemUri(itemId: string) {
        return ApiUri.apiBase + "item/" + itemId;
    }
}
