import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectCard } from './project-card';

const meta: Meta<ProjectCard> = {
  title: 'Components/Project Card', component: ProjectCard, tags: ['autodocs'],
  args: {
    eyebrow: 'Identidade digital', meta: '01 · 2026', title: 'Memórias que vivem na tela',
    description: 'Uma experiência editorial construída com textura, movimento e intenção.', layout: 'grid',
    imageSrc: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Livro aberto em uma mesa', linkLabel: 'Ver projeto',
  },
  argTypes: { layout: { control: 'inline-radio', options: ['grid', 'list'] }, projectOpen: { action: 'projectOpen' } },
};
export default meta;
type Story = StoryObj<ProjectCard>;
export const Grid: Story = { parameters: { layout: 'padded' } };
export const List: Story = { args: { layout: 'list' }, parameters: { layout: 'padded' } };
