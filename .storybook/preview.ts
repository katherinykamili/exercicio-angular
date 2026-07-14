import type { Preview } from '@storybook/angular';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Tema dos componentes',
      defaultValue: 'warm',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'warm', title: 'Warm editorial' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (story, context) => {
      document.documentElement.dataset['theme'] = context.globals['theme'] === 'dark' ? 'dark' : 'light';
      return story();
    },
  ],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: { disable: true },
    a11y: { test: 'todo' },
  },
};

export default preview;
