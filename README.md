# Scrollinity

Add effect of infinite scroll on the page. Good replacement for traditional pagination.

## Installation

Add this line to your application's Gemfile:

    gem 'scrollinity'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install scrollinity

## Usage

You have to require the scrollinity js file in your application.js manifest:

```javascript
//= require scrollinity
```

On the page where you want to use the infinite scroll, you have to define some required variables. To do that, you have to set the data attributes to the element. Here is an example of such a page:

```
<div data-scrollinity-loading-pic="1" style="display: none">Loading...</div>

<div data-scrollinity-data-container="load_here" data-scrollinity-bottom-px-limit="50" data-scrollinity-path="/path/to/get/new/data"> 

<div id="load_here"></div>
```

`data-scrollinity-loading-pic` - define the element that should appear when user is waiting for the server response. Normally that would be an image with a spinning wheel. 

`data-scrollinity-data-container` - define the id of the element to which the response from the server will be appended. In the example above, we load coming data to the div with an id "load_here".

`data-scrollinity-bottom-px-limit` - define the distance to the bottom of the page in pixels when should we start to load new data.

`data-scrollinity-path` - path to remote that will recieve an ajax call and return some data that will be appended.


## Sample Application

You can find a sample application written on Rails 4 to demonstrate how the gem can be used: https://github.com/HeeL/scrollinity_sample_app
