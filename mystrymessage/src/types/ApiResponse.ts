import { Message } from "@/model/user";
 
export interface ApiRespose {
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean
    messages?: Array<Message>
}