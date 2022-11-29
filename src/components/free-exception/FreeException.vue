<template>
  <div class="oops">
    <div class="error-text">
      <img :src="dynamicIcon" />
      <span>{{ title }}</span>
      <p>{{ description }}</p>
      <a v-if="showBtn" class="back" @click="onClick">
        {{ btnActionText }}
      </a>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import svg_403 from '@/assets/error-svg/403.svg';
import svg_404 from '@/assets/error-svg/404.svg';
import svg_500 from '@/assets/error-svg/500.svg';
import { ExceptionEnum } from '@/enums/exceptionEnum';
import { useI18n } from '@/hooks/web/useI18n';

export default defineComponent({
  name: 'FreeException',

  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    btnAction: {
      type: String,
      default: 'back',
    },
  },

  setup(props) {
    const { t } = useI18n();
    const router = useRouter();
    const btnActionText = computed(() =>
      props.btnAction === 'back' ? t('system.exception.back') : t('system.exception.refresh')
    );

    const back = () => {
      if (window.history.length > 2) {
        router.go(-1);
      } else {
        router.push('/');
      }
    };

    const refresh = () => {
      router.push('/login');
    };

    const onClick = () => {
      if (props.btnAction === 'back') {
        return back();
      }
      if (props.btnAction === 'refresh') {
        return refresh();
      }
    };

    const dynamicIcon = computed(() => {
      if (props.icon?.includes(String(ExceptionEnum.PAGE_NOT_ACCESS))) return svg_403;
      if (props.icon?.includes(String(ExceptionEnum.PAGE_NOT_FOUND))) return svg_404;
      if (props.icon?.includes(String(ExceptionEnum.INTERNAL_SERVER_ERROR))) return svg_500;
      return svg_404;
    });
    return {
      onClick,
      dynamicIcon,
      btnActionText,
    };
  },
});
</script>

<style scoped lang="scss">
.oops {
  position: relative;
  z-index: 100;
  display: inline-grid;
  width: 100%;
  height: 100%;
  margin: 0;
}

.error-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -15vh;
  font-size: 40px;
  color: var(--navbarColor);

  img {
    width: 550px;
  }

  span {
    position: relative;
    font-size: 36px;
    font-weight: 700;
  }

  p {
    margin: 20px 0 10px 0;
    font-size: 16px;
    font-weight: 400;
    color: var(--navbarColor);
  }

  .back {
    padding: 0.6em 2em;
    margin: 20px auto 0;
    font-size: 16px;
    color: var(--navbarColor);
    text-decoration: none;
    cursor: pointer;
    border-radius: 500px;
    box-shadow: 0 10px 50px 4px rgba(0, 0, 0, 0.1), inset 0 16px 0 0 var(--sidebarColor);
    transition: all 300ms ease;

    &:hover {
      color: var(--systemThemeColor);
      box-shadow: 0 35px 90px 4px rgba(0, 0, 0, 0.3), inset 0 0 0 2px var(--systemThemeColor);
    }
  }
}
</style>
