/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once

import Button from '@/components/button.vue'

storiesOf('Button', module)
  .add('Default', () => ({
    components: { Button },
    template: '<Button>Test</Button>'
  }))
