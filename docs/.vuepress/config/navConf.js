module.exports = [
  // { text: 'Home', link: '/' },
  // { text: 'Guide', link: '/about' },
  // { text: 'External', link: 'https://google.com' },
  // {
  //   text: 'Languages',
  //   ariaLabel: 'Language Menu',
  //   items: [
  //     { text: 'Chinese', link: '/language/chinese/' },
  //     { text: 'Japanese', link: '/language/japanese/' }
  //   ]
  // }

  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Languages',
    items: [{
      text: 'Group1',
      items: [{
        text: 'Guide',
        link: '/about'
      },
      {
        text: 'External',
        link: 'https://google.com'
      }
      ]
    },
    {
      text: '前端',
      items: [{
        text: 'css',
        link: '/css/c-aaa/'
      },
      {
        text: 'javascript',
        link: '/javascript/j-aaa/'
      }
      ]
    }
    ]
  }
]