<script lang="tsx">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'FreeRender',
  props: {
    scope: {
      type: Object,
      default: () => ({}),
    },
    render: {
      type: Function || null,
      default: null,
    },
  },

  render() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ctx = getCurrentInstance() as any;
    if (Object.keys(ctx.props?.scope).length) {
      return ctx?.props.render(ctx?.props.scope, ctx?.props) ?? null;
    }
    return null;
  },
});
</script>
