# Mortar

Mortar is a simple, themeable static site generator bent towards blogs. It doesn't make bold assumptions about what the user wants or burden them with complex configurations and deployment requirements. Simply put, it doesn't try to outsmart the user. Mortar takes content, renders Markdown templates, and spits out a complete static website ready to be served by any web server.

## Getting Started

1. Clone the repository:

```sh
git clone git@github.com:tylerreckart/mortar.git
```

2. Install the dependencies:

```sh
npm install
```

3. Build the base theme:

```sh
npm run build
```

The static output will be put into a `build` directory at the base of the repository. For local development, pointing a virtual host such as [Vagrant](https://www.vagrantup.com/) to the build directory will ensure all of the paths work correctly. When deploying to a server, all you have to do is point the server's configuration to serve from the build folder and you're set.

### Configuration

All configuration for site-wide variables should be done in the `mortar-config.js` file.

The a configuration using the default theme may look like this:
```
{
  outdir: path.join(__dirname, "/build"),
  theme: "mortar",
  siteConfig: {
    url: "https://mortar.blog.test",
    name: "mortar.blog",
    icon: "https://emojis.slackmojis.com/emojis/images/1558099591/5711/ahhhhhhhhh.gif?1558099591",
    intro: "Hello, World",
  },
  seoConfig: {
    title: "My Mortar Blog",
    author: "An anonymous corporation",
    description: "A blog built with Mortar",
  },
};
```

The default theme additionally accepts two conditional configurations in the shape of the `socialConfig` and `integrations` properties. These can be used to add social media accounts as well as integrate with third party services like Google Analytics.

```
{
  ...
  socialConfig: {
    twitter: "",
  },
  integrations: {
    gaTrackingId: "",
  },
}
```

### Themes

Mortar currently comes bundled with a single theme, `Mortar`. This is a static, dark-mode aware blogging theme with a simple layout optimized for responsiveness and SEO. The HTML markup for the theme and pages is generated through [Pug](https://github.com/pugjs/pug) templates. Pug (formerly Jade) is a high-performance templating engine built especially for working with node apps. The syntax, heavily influenced by [Haml](https://haml.info/), is simple and only takes a few minutes to pick up.

The following is the pug template for the default theme's homepage:
```pug
include mixins/time.pug
doctype html
html(lang="en")
  head
    if seoConfig.title
      title=seoConfig.title
    else
      title=""
    if seoConfig.description
      meta(name="description", content=seoConfig.description)
    else
      meta(name="description", content="")
    include template-parts/head.pug
  body
    main.content
      include template-parts/nav.pug
      include template-parts/intro.pug
      each post in posts
        article
          div.article--header
            a(href=post.path) #[h2=post.attributes.title]
            +time(post.attributes.date)
          div.article--content
            | !{post.body}
      include template-parts/footer.pug
```

## License

See the [LICENSE](https://github.com/tylerreckart/mortar/blob/master/LICENSE) file.
