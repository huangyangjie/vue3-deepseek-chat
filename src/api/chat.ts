import request from "@/utils/request";
import fetchRequest from "@/utils/request/fetch";
/** 对话列表数据 */
export interface TypeChatList {
  /** 页码 */
  page: string;
}
// 获取对话列表
export function chatList(params: TypeChatList) {
  return request({
    url: "/v1/chats/?page=1",
    method: "get",
    params,
  });
}

// 发送对话
// export function chatCompletions(stream: AbortSignal, messages: Chat.ConversationMessage[]) {
//   return request({
//     url: "/compatible-mode/v1/chat/completions",
//     method: "post",
//     signal: stream,
//     responseType: 'stream',
//     data: {
//       model: 'deepseek-r1',
//       messages: messages,
//       stream: true,
//       stream_options: {
//         include_usage: true
//       }
//     }
//   });
// }
export function chatCompletions(stream: AbortSignal ,messages: Chat.ConversationMessage[]) {
  return fetchRequest("/chat/completions", {
    method: "POST",
    body: JSON.stringify({
      model: import.meta.env.VITE_AI_MODEL,
      messages: messages,
      stream: true,
      stream_options: {
        include_usage: true,
      },
    }),
    signal: stream
  });
}
