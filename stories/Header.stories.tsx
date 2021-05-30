import React from 'react'
import { Header } from '@components/Layout/Header/Header'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'Template/Header',
  component: Header,
} as Meta

const Template: Story = args => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
