# vuejs-skeleton-loading

The most flexible skeleton loading for VueJS

### See it in action

<img src="https://media.giphy.com/media/QIG2nvRYZ4XGL27nGd/giphy.gif" width="550" />

## Install package

```
npm install @alkeincodes/vuejs-skeleton-loading --save
```

### Register the component globally ES6

```js
import VSkeleton from '@alkeincodes/vuejs-skeleton-loading';
import '@alkeincodes/vuejs-skeleton-loading/dist/app.css';

Vue.use(VSkeleton);
```

### CDN

Include the source file.

```html
<!-- use the latest release -->
<script src="https://unpkg.com/@alkeincodes/vuejs-skeleton-loading@latest"></script>
```

### Usage

```js
<v-skeleton
  :content="loader"
  width="500px"
  height="300px"
  padding="16px"
/>

...

data() {
  return {
    loader: [
      {
        type: 'avatar',
        vAlignment: 'start',
        lines: [
          {
            type: 'block',
            width: '100px'
          },
          {
            type: 'block',
            width: '200px'
          },
        ]
      },
      {
        type: 'block',
        width: '500px'
      },
      {
        type: 'block',
        width: '280px'
      },
      {
        type: 'block',
        width: '130px'
      },
      {
        type: 'row',
        marginTop: '32px',
        children: [
          {
            type: 'text',
            height: '16px',
          },
          {
            type: 'text',
            height: '16px',
          },
          {
            type: 'text',
            height: '16px',
          },
        ]
      }
    ]
  }
}
```

### Props

| Prop    | Type   | Description                                      | Default | Required |
| ------- | ------ | ------------------------------------------------ | ------- | -------- |
| content | Object | the data object prop for your data while loading |         | true     |
| width   | String | main container width                             | auto    | Optional |
| height  | String | main container height                            | auto    | Optional |
| padding | String | main container padding                           | 16px    |          |

## Block Types

`block` | `text` | `round` | `avatar` | `row`
