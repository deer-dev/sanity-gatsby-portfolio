export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '62262b448c6d8800678c1485',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-imbvoudf',
                  apiId: '7297ab6c-e0fa-43f1-985f-e4c048f27290'
                },
                {
                  buildHookId: '62262b4460db0200ae69e8b2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uspdk1du',
                  apiId: 'ec1297ef-aecc-4e14-b886-07a972a939f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/deer-dev/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uspdk1du.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
