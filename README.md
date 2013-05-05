Node.js Express MVC
===================

Description
-----------

This is a base structure for a node.js project, using Express, Mongoose and Jade, based on a MVC-pattern.

Installation
------------

First, your must have **nodemon** installed on your computer, you can install it with

	npm install -g nodemon

Next, clone this repository in your project folder, then launch in a Terminal (in your project folder) :

	npm install

And then, start the server using :

	npm start

Usage
-----

Normally, you don't have to edit the _app.js_

The structure is quite obvious : 

* **controllers/** : Folder containing controllers.
* **models/** : Folder containing mongoose models.
* **views/** : Folder containing Jade templates
* **public/** : Folder containing assets
* **data/** : Folder containing MongoDB stuff.
* **routes/** : Folder containing urls forwarding to controllers
* **urls.js** : Root urls to controllers.
