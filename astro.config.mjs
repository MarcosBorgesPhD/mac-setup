import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://marcosborgesphd.github.io',
    base: '/mac-setup',
    integrations: [
        starlight({
            title: 'Mac Dev Setup',
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/marcosborgesphd/mac-setup',
                },
                {
                    icon: 'youtube',
                    label: 'YouTube',
                    href: 'https://www.youtube.com/@MarcosBorgesPhD',
                },
                {
                    icon: 'linkedin',
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/marcosborgesphd',
                },
            ],
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Getting Started', slug: 'index'},
                        { label: 'About Marcos Borges', slug: 'about/marcos-borges' },
                    ],
                },
                {
                    label: 'Guides',
                    items: [
                        { label: 'First Steps', slug: 'guides/first-steps' },
                        { label: 'Git Setup', slug: 'guides/git-setup' },
                        { label: 'Terminal Setup', slug: 'guides/terminal-setup' },
                        { label: 'Code Editor Setup', slug: 'guides/code-editor-setup' },
                        { label: 'Python Setup', slug: 'guides/python-setup' },
                        { label: 'LaTeX Setup', slug: 'guides/latex-setup' },
                    ],
                }
            ],
        }),
    ],
});
