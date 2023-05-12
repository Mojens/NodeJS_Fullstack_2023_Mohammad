import { writable } from "svelte/store";

export const BASE_URL = writable("http://localhost:8080");
export const myUserName = writable();
export const colorsList = writable([]);