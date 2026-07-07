/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'smart-gallery/dist/smart-gallery.esm.min.js' {
  export default class SmartGallery {
    constructor(container: Element | string, options?: Record<string, any>);
    addItems(items: Array<Record<string, any>>): void;
    render(): void;
    destroy(): void;
  }
}
