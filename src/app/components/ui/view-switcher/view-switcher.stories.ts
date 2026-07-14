import type { Meta, StoryObj } from '@storybook/angular';
import { ViewSwitcher } from './view-switcher';

const meta: Meta<ViewSwitcher> = {
  title: 'UI/View Switcher', component: ViewSwitcher, tags: ['autodocs'],
  args: { value: 'grid', label: 'Visualização', disabled: false },
  argTypes: { value: { control: 'inline-radio', options: ['grid', 'list'] }, valueChange: { action: 'valueChange' } },
};
export default meta;
type Story = StoryObj<ViewSwitcher>;
export const Grid: Story = {};
export const List: Story = { args: { value: 'list' } };
