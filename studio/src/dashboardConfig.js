export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7faa458c9368014692f7d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3i7tze3a',
                  apiId: '485a2e17-fe31-4de5-9619-c534daac7aec'
                },
                {
                  buildHookId: '5f7faa45c47cbe008abd1da3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jbweoysj',
                  apiId: 'f65096c4-22d8-4eaf-a108-1bd17092b165'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sgrvl/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jbweoysj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
