<template>
  <div>
    <div
      v-if="content.type != 'avatar'"
      class="v-skeleton__type"
      :class="{
        [`v-skeleton__type--${content.type}`]: true,
        ['skeleton-bg']: content.type !== 'row'
      }"
      :style="getStyles(content)"
    >
      <template v-if="content.type == 'row'">
        <div
          v-for="(child, i) in content.children"
          :key="`${i}-c`"
          class="skeleton-bg v-skeleton__type"
          :class="`v-skeleton__type--${child.type}`"
          :style="getStyles(child)"
        />
      </template>
    </div>
    <div
      v-if="content.type == 'avatar'"
      class="v-avatar__container"
      :style="{
        ['align-items']: content.vAlignment ? (content.vAlignment != 'center' ? `flex-${content.vAlignment}` : 'center') : 'center'
      }"
    >
      <div
        class="v-skeleton__type"
        :class="{
          [`v-skeleton__type--${content.type}`]: true,
          ['skeleton-bg']: content.type !== 'row'
        }"
        :style="getStyles(content)"
      />
      <div class="v-avatar__lines">
        <div
          v-for="(l, i) in content.lines"
          :key="`line-${i}`"
          class="v-skeleton__type skeleton-bg"
          :class="{
            [`v-skeleton__type--${l.type}`]: true
          }"
          :style="lineStyle(l)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VSkeletonElement',
    props: {
      content: Object
    },
    methods: {
      getStyles(c) {
        let style = {
          height: c.height ? c.height : '8px',
          width: c.width ? c.width : '100%',
          marginTop: c.marginTop ? c.marginTop : '0',
          marginBottom: c.marginBottom ? c.marginBottom : '8px',
          marginRight: c.marginRight ? c.marginRight : '8px',
          marginLeft: c.marginLeft ? c.marginLeft : '0',
        }

        if(!c.type) {
          throw new SyntaxError("'type' is undefined.")
        } else {
          switch(c.type) {
            case 'block':
              return style
            case 'text':
              return style
            case 'row':
              style.height = c.height ? c.height : 'auto',
              style.alignItems = c.alignItems ? (c.alignItems != 'center' ? `flex-${c.alignItems}` : 'center') : 'center'
              style.justifyContent = c.justifyContent ? c.justifyContent : 'initial'
              return style
            case 'round':
              style.height = c.size ? c.size : '50px'
              style.width = c.size ? c.size : '50px'
              return style
            case 'avatar':
              style.height = c.size ? c.size : '50px'
              style.width = c.size ? c.size : '50px'
              return style
          }
        }
      },
      lineStyle(c) {
        let style = {
          height: c.height ? c.height : '8px',
          width: c.width ? c.width : '100%',
          marginTop: c.marginTop ? c.marginTop : '0',
          marginBottom: c.marginBottom ? c.marginBottom : '8px',
          marginRight: c.marginRight ? c.marginRight : '8px',
          marginLeft: c.marginLeft ? c.marginLeft : '0',
        }

        switch(c.type) {
          case 'block':
            return style
          case 'text':
            return style
        }
      },
    }
  }
</script>