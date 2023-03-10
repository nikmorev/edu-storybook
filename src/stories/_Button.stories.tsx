import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components'


export default {
    title: 'Example/My Button',
    component: Button,
    argTypes: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>


export const Primary = Template.bind({text: 'SimpleButton'})