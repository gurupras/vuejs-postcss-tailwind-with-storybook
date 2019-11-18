/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import '@/style/tailwind.css'

import Alert from '@/components/alert.vue'

storiesOf('Alert', module)
  .add('with text', () => ({
    components: { Alert },
    template: '<Alert text="Test alert" :show-close="true"/>'
  }))
