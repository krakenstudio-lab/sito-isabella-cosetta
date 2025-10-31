import type { IncomingMessage, ServerResponse } from "http";
import { createApp } from "../server/app";

const app = createApp();

export default function handler(req: IncomingMessage, res: ServerResponse) {
  return app(req as any, res as any);
}
