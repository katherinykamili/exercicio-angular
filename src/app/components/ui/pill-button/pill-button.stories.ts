import type { Meta, StoryObj } from '@storybook/angular';
import { PillButton } from './pill-button';

const meta: Meta<PillButton> = {
  title: 'UI/Pill Button', component: PillButton, tags: ['autodocs'],
  args: { variant: 'translucent', disabled: false },
  argTypes: { variant: { control: 'inline-radio', options: ['translucent', 'outline'] }, activated: { action: 'activated' } },
  render: (args) => ({ props: args, template: `<ui-pill-button [variant]="variant" [disabled]="disabled" (activated)="activated($event)">Explorar projeto <span aria-hidden="true">↗</span></ui-pill-button>` }),
};
export default meta;
type Story = StoryObj<PillButton>;
export const Translucent: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Disabled: Story = { args: { disabled: true } };
