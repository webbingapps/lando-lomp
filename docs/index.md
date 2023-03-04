---
title: LOMP Lando Plugin
description: Use a generic LOMP stack on Lando for local development; powered by Docker and Docker Compose; learn how to config php and apache version, use postgres or mysql or mariadb, composer, xdebug and custom config files, oh and also import and export databases.
next: ./config.html
---

# LOMP

The [LOMP](https://en.wikipedia.org/wiki/LOMP_%28software_bundle%29) stack is a common infrastructure designed to run PHP applications.

Lando offers a configurable [recipe](https://docs.lando.dev/config/recipes.html) for developing [LOMP](https://en.wikipedia.org/wiki/LOMP_%28software_bundle%29) apps.

Note that this recipe is for a generic LOMP stack. Definitely check out Lando's [other recipes](https://docs.lando.dev/config/recipes.html) before you use this as there may be one designed specifically for use with your framework.

#### Features of this plugin:

* Configurable `php` version from `5.3` all the way to `8.1`
* Configurable `webroot`
* Configurable `apache` web server
* Configurable database backend (`mariadb`, `mysql`, or `postgres`)
* Configurable `composer`
* `xdebug`
