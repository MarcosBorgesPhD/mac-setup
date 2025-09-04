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
                    href: 'https://github.com/marcosborgesphd/mac-setup'
                },
                {
                    icon: 'youtube',
                    label: 'YouTube',
                    href: 'https://www.youtube.com/@MarcosBorgesPhD'
                },
                {
                    icon: 'linkedin',
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/marcosborgesphd'
                }
            ],
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Getting Started', slug: 'index'},
                        { label: 'About Marcos Borges', slug: 'about/marcos-borges' }
                    ]
                }
            ],
        }),
    ],
});
