import BlogPage from 'pages'
import React from 'react'
import { PostsProps } from 'types/Blog'
import { Meta, Story } from '@storybook/react'
import * as LandingPageStories from './LandingPage.stories'


export default {
  title: 'Template/Blog',
  component: BlogPage,
} as Meta

const Template: Story<PostsProps> = args => <BlogPage {...args} />

export const pageTitle = Template.bind({})
pageTitle.args = {
  ...LandingPageStories.pageTitle.args,
}

export const pageDescription = Template.bind({})
pageDescription .args = {
  ...LandingPageStories.pageDescription.args,
}

export const posts = Template.bind({})
posts.args = {
  ...LandingPageStories.posts.args,
}
