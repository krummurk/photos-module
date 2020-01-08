# Open Restaurant Photos Module

Welcome to the photos module for Open Restaurant! The photos module presents the user with an image gallery for a given restaurant. The photos module enables full-screen modal viewing of each gallery photo with responsive sizing, associated photo details, and intuitive navigation of gallery photos. 

The "restaurant_id" is determined by the 1-8 digit number included at the end of the url. When the gallery page component mounts, the restuarant_id is sent in a GET request to an Express server that queries a MongoDB database for image urls of photos stored on Amazon Web Services. 

The photos module uses the following front-end technologies:

React
Javascript
HTML5
CSS3 (Grid, media query)

Back-end technologies:

Node.js
Express
MongoDB
AWS


## Related Projects

  - https://github.com/krummurk/customer-reviews
  - https://github.com/krummurk/textDetails_module
  - https://github.com/krummurk/reservations-module
  - https://github.com/krummurk/photos-module
7
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

User views image gallery and can click individual photos to enter a full-screen modal view. When in modal view, a user can view the photo and its associated details (date posted, user that posted it, button to flag image as inappropriate), a close/exit button ("X"), and navigation buttons ("<", ">").

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.15.1
- Mongoose 5.5.9

## Development

### Installing Dependencies

From within the root directory:

Terminal tab 1:
  npm install
  npm install styled-components --save-dev
  npm run react-dev
Terminal tab 2:
  node ./server/index.js (in new tab)
Terminal tab 3:
  mongod --config /usr/local/etc/mongod.conf
  mongo
Terminal tab 4:
  node ./db/seed.js
Open browser at: http://localhost:3002/