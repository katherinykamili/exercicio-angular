import type { Meta, StoryObj } from '@storybook/angular';
import { GlassPanel } from './glass-panel';

const meta: Meta<GlassPanel> = {
  title: 'UI/Glass Panel', component: GlassPanel, tags: ['autodocs'],
  args: { padding: 'spacious', interactive: false },
  argTypes: { padding: { control: 'inline-radio', options: ['compact', 'regular', 'spacious'] } },
  render: (args) => ({ props: args, template: `<div style="width:min(620px,80vw)"><ui-glass-panel [padding]="padding" [interactive]="interactive"><p style="font-size:12px;text-transform:uppercase;letter-spacing:.12em">Editorial system</p><h2 style="font-size:48px;line-height:.9;letter-spacing:-.07em;margin:50px 0 16px">Stories with<br><strong>ambience.</strong></h2><p style="max-width:380px;line-height:1.6">Painel translúcido para conteúdos de destaque e composições fotográficas.</p></ui-glass-panel></div>` }),
};
export default meta;
type Story = StoryObj<GlassPanel>;
export const Spacious: Story = {};
export const Interactive: Story = { args: { interactive: true } };
