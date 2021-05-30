import LandingPage from 'pages'
import React from 'react'
import { PostsProps } from 'types/Blog'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'Template/Landing Page',
  component: LandingPage,
} as Meta

const Template: Story<PostsProps> = args => <LandingPage {...args} />

export const pageTitle = Template.bind({})
pageTitle.args = {
  pageTitle: 'Easy blog template using next, chakra & ts.',
}

export const pageDescription = Template.bind({})
pageDescription .args = {
  pageDescription: 'Get started blogging with this cheap, modern & effective mix from the react ecosystem. Easy blog template using next, chakra & ts.',
}

export const posts = Template.bind({})
posts.args = [{
  slug: 'post1-slug',
},
{
  slug: 'post2-slug',
}]
