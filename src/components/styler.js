export default {
  methods: {
    getStyles(c) {
      let style = {
        height: c.height ? c.height : '8px',
        width: c.width ? c.width : '100%',
        marginTop: c.marginTop ? c.marginTop : '0',
        marginBottom: c.marginBottom ? c.marginBottom : '8px',
        marginRight: c.marginRight ? c.marginRight : '8px',
        marginLeft: c.marginLeft ? c.marginLeft : '8px',
      }

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
  }
}