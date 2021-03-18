const headerData = {
    selector: '#header_nav',
    headerMenu: [
        {
            title: 'Home.',
            link: '/',
        },
        {
            title: 'Pages.',
            link: '/',
            dropdown: [
                {
                    title: 'Service.',
                    link: './pages/service/',
                },
                {
                    title: 'About',
                    link: './about/',
                },
                {
                    title: 'Contact',
                    link: './contact/',
                },
                {
                    title: 'Pricing',
                    link: './pages/pricing/',
                },
                {
                    title: 'Case Study....',
                    link: '/',
                    dropdown: [
                        {
                            title: 'Case Default',
                            link: './pages/case-default/',
                        },
                        {
                            title: 'Case Detail',
                            link: './pages/case-detail/',
                        }
                    ]
                },
                {
                    title: 'Our Team',
                    link: './pages/our-team/',
                },
                {
                    title: 'FAQ',
                    link: './pages/faq/',
                },
                {
                    title: 'Terms of use',
                    link: './pages/terms-of-use/',
                },
                {
                    title: 'ERROR 404',
                    link: './pages/error-404/',
                }
            ]
        },
        {
            title: 'Blog.',
            link: '/',
            dropdown: [
                {
                    title: 'Blog Default',
                    link: './blog-default/',
                },
                {
                    title: 'Blog Single',
                    link: './blog-single/',
                }
            ]
        },
        {
            title: 'Portfolio.',
            link: '/',
            dropdown: [
                {
                    title: 'Portfolio Standard',
                    link: './portfolio-standard/',
                },
                {
                    title: 'Portfolio Masonry',
                    link: './portfolio-masonry/',
                }
            ]
        },
        {
            title: 'About.',
            link: './about/',
        },
        {
            title: 'Contact.',
            link: './contact/',

        }
    ]
};

export { headerData }