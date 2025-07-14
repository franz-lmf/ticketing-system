import { nanoid } from "nanoid";

export const generateRandomId = () =>
  typeof globalThis.crypto !== "undefined" &&
  typeof globalThis.crypto.randomUUID === "function"
    ? globalThis.crypto.randomUUID()
    : nanoid();
