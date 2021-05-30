import React from 'react'
import { Store } from '../components/Store/Store'


export const decorators = [
  (Story) => (
    <Store>
      <Story />
    </Store>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}