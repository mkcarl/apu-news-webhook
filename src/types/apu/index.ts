export type StudentNews = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: false;
    };
    excerpt: {
        rendered: string;
        protected: false;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: false;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    tags: any[];
    'post-meta-fields': {
        _vc_post_settings: string[];
        _edit_lock: string[];
        _edit_last: string[];
        _thumbnail_id: string[];
        slide_template: string[];
    };
    featured_image_src: string;
    _links: {
        self: [
            {
                href: string;
            }
        ];
        collection: [
            {
                href: string;
            }
        ];
        about: [
            {
                href: string;
            }
        ];
        author: [
            {
                embeddable: true;
                href: string;
            }
        ];
        replies: [
            {
                embeddable: true;
                href: string;
            }
        ];
        'version-history': [
            {
                count: number;
                href: string;
            }
        ];
        'predecessor-version': [
            {
                id: number;
                href: string;
            }
        ];
        'wp:featuredmedia': [
            {
                embeddable: true;
                href: string;
            }
        ];
        'wp:attachment': [
            {
                href: string;
            }
        ];
        'wp:term': [
            {
                taxonomy: string;
                embeddable: true;
                href: string;
            },
            {
                taxonomy: string;
                embeddable: true;
                href: string;
            }
        ];
        curies: [
            {
                name: string;
                href: string;
                templated: true;
            }
        ];
    };
};
