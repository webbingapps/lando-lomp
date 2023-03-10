# LOMP Lando Plugin

This is the _official_ [Lando](https://lando.dev) plugin for [LOMP](https://en.wikipedia.org/wiki/LOMP_%28software_bundle%29). When installed it...

* Allows users to run a `lomp` stack
* Allows users to configure `php` version from `7.4` all the way to `8.2`
* Allows users to configure `webroot`
* Allows users to configure an `openlitespeed` web server
* Allows users to configure database backend to (`mariadb`, `mysql`, or `postgres`)
* Allows users to configure `composer`
* Allows users to configure `xdebug`

Of course, once a user is running their LOMP project with Lando they can take advantage of [all the other awesome development features](https://docs.lando.dev) Lando provides.

## Basic Usage

Add a `lomp` recipe to your Landofile

```yaml
name: lomp-app
recipe: lomp
```

For more info you should check out the [docs](https://docs.lando.dev/lomp):

* [Getting Started](https://docs.lando.dev/lomp/)
* [Configuration](https://docs.lando.dev/lomp/config.html)
* [Tooling](https://docs.lando.dev/lomp/tooling.html)
* [Examples](https://github.com/lando/lomp/tree/main/examples)
* [Development](https://docs.lando.dev/lomp/development.html)

## Issues, Questions and Support

If you have a question or would like some community support we recommend you [join us on Slack](https://launchpass.com/devwithlando).

If you'd like to report a bug or submit a feature request then please [use the issue queue](https://github.com/lando/lomp/issues/new/choose) in this repo.

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/lomp/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/lomp/releases).

## Contributors

<a href="https://github.com/lando/lomp/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lando/lomp" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Other Selected Resources

* [LICENSE](https://github.com/lando/lomp/blob/main/LICENSE.md)
* [The best professional advice ever](https://www.youtube.com/watch?v=tkBVDh7my9Q)
