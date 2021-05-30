import React from 'react'
import { SocialButtons } from '@components/SocialButtons'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'Template/Socail Buttons',
  component: SocialButtons,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta



const Template: Story = args => <SocialButtons {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
