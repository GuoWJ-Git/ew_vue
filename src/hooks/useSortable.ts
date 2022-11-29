import { Options } from 'sortablejs';
import { Ref } from 'vue';
import { nextTick, unref } from 'vue';

/**
 * drag and drop
 * @param el drag and drop container
 * @param options options
 */
export function useSortable(el: HTMLElement | Ref<HTMLElement>, options?: Options) {
  async function initSortable() {
    return new Promise((resolve) => {
      nextTick(async () => {
        if (!el) return;
        const Sortable = (await import('sortablejs')).default;
        Sortable.create(unref(el), {
          animation: 150,
          delay: 400,
          delayOnTouchOnly: true,
          ...options,
        });
        resolve(Sortable);
      });
    });
  }

  return { initSortable };
}
