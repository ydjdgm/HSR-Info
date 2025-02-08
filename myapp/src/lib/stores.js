import { writable } from 'svelte/store';

export const isOpen = writable(true); // 기본값: true (Navbar가 열려있는 상태)