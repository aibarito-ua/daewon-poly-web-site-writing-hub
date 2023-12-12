type TProofReadingCountUpdateResponse = {
    statusCode:number;
    message: string;
    errors: any[];
    data: boolean
}
type TProofReadingCountUpdateReject = {
    "statusCode": number;
    "message": string;
    "errors": string[];
    "data": {
        "timestamp": string,
        "endpoint": string,
        [key:string]:any,
    }
}