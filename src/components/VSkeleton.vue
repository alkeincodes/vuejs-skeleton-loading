<template>
  <div
    class="v-skeleton__container"
    :style="{ width, height, padding }"
  >
    <template v-for="(c, i) in content">
      <template v-if="c.duplicate">
        <v-skeleton-element
          v-for="d in c.duplicate"
          :key="`${d}-${i}-d`"
          :content="c"
        />
      </template>
      <template v-else>
        <v-skeleton-element
          :key="`${i}-p`"
          :content="c"
        />
      </template>
    </template>
  </div>
</template>

<script>
  import VSkeletonElement from './VSkeletonElement'
  export default {
    name: 'VSkeleton',
    components: {
      VSkeletonElement
    },
    props: {
      content: {
        type: Array,
        required: true
      },
      width: {
        type: String,
        default: 'auto'
      },
      height: {
        type: String,
        default: 'auto'
      },
      padding: {
        type: String,
        default: '8px'
      },
    }
  }
</script>

<style lang="scss">
  .skeleton-bg {
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #E4E4E4 8%, #F0F0F0 25%, #E4E4E4 53%);
    background-size: 800px 100px;
    position: relative;
  }
  .v-skeleton {
    &__type {
      &:last-child {
        margin-right: 0 !important;
      }
      &--text {
        border-radius: 32px;
      }
      &--row {
        display: flex;
      }
      &--round {
        border-radius: 50%;
      }
      &--avatar {
        border-radius: 50%;
      }
    }
  }

  .v-avatar {
    &__container {
      display: flex;
    }
    &__lines {
      flex: 1;
    }
  }

  @keyframes shimmer{
    0%{
        background-position: -500px 0;
    }
    100%{
        background-position: 500px 0;
    }
}
</style>