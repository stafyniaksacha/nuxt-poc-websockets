import type { WebSocketServer } from "ws";

export interface WssState {
  wss?: WebSocketServer;
  url?: string;
}

export const state: WssState = {}