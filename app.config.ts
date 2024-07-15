
export default defineAppConfig({
    url: 'https://minimalist.bloggrify.com/',

    logo: '/images/logo.png',

    theme: 'minimalist',

    // dark_mode_selector_hide: true,

    // If you only have one author, you can set the author here
    // It will be used as the default author for all posts AND as the general logo/description/socials for the website
    name: 'John Doe',
    avatar: '/images/profile-john.jpg',
    description:
        'I\'m a professional web developer with a passion for writing about technology and the web.',

    pagination: {
        per_page: 5,
    },


    socials: {
        twitter: 'https://twitter.com',
        mastodon: 'https://piaille.fr',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',

        // possible values : 'facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype'
        // see https://github.com/stefanobartoletti/nuxt-social-share
        sharing_networks: ['facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype']
    },

    newsletter: {
        enabled: true,
        form_action: 'YOUR_NEWSLETTER_FORM_ACTION',
        provider: 'demo'
    },

    analytics: {
        provider: 'pirsch',
        pirsch: {
            code: 'UMgcWhIpdgfYXWLqLmCesiKf6vpSZBfv'
        }
    },

    comments: {
        enabled: true,
        hyvor_talk: {
            website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: true,

    // if you have multiple authors, you can set them here
    authors: [
        {
            default: true,
            username: 'john-doe',
            name: 'John Doe',
            description:
                'I\'m a professional web developer with a passion for writing about technology and the web.',
            avatar: '/images/profile-john.jpg',
            socials: {
                twitter: 'https://twitter.com',
                twitter_username: 'username',
                mastodon: 'https://piaille.fr',
                youtube: 'https://youtube.com',
                linkedin: 'https://linkedin.com',
                facebook: 'https://facebook.com',
                instagram: 'https://instagram.com',
                github: 'https://github.com',
            },
        },
    ],

    menu: [
        { name: 'Documentation', path: '/about' },
        { name: 'Archives', path: '/archives' },
    ],

    robots: [
        {
            UserAgent: '*',
            Disallow: ['/'],
        },
    ],

    donations: {
        buy_me_a_coffee: 'hlassiege',
    },

    portfolio: [
        {
            name: 'Bloggrify',
            description: 'A static and open source blog generator. Used for this blog.',
            url: 'https://bloggrify.com',
            image: 'https://bloggrify.com/images/logo.svg',
            status: 'active',
        },
        {
            name: 'Bloggrify - Epoxia',
            description: 'A premium theme for Bloggrify.',
            url: 'https://epoxia.bloggrify.com',
            image: '/android-chrome-192x192.png',
            status: 'active',
        },
        {
            name: 'Discontinued',
            description: 'Example of a discontinued project.',
            image: '/android-chrome-192x192.png',
            url: 'https://eventuallycoding.com',
            status: 'discontinued',
        },
        {
            name: 'Eventuallymaking',
            description: 'A blog using epoxia theme. In english.',
            image: '/android-chrome-192x192.png',
            url: 'https://eventuallymaking.io',
            status: 'active',
        },
    ],
})
