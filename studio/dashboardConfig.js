export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '603027e402ba892bb92f27a2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uqateo24',
                  apiId: 'cbde02d5-1a8d-4e74-8192-47ee77c25434'
                },
                {
                  buildHookId: '603027e4e88b4e2fc73bf8b3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-horcx2ya',
                  apiId: '2d9f288c-3415-4ad8-8adf-a2c5e9ad264e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Nico2d/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-horcx2ya.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
