---
title: "Space Search"
repo: "https://github.com/jacobg1/space-search"
app: "https://jacobg1.github.io/space-search"
order: 3
iconName: space
---

One of my older projects. A search UI that pulls photos from NASA's image API. Users input search terms into the search bar and results are displayed below. Includes two different views, grid and list.

When the user inputs a serch term and hits Go, the front end makes a call to the back end which then makes a call to NASA's image API. Results are returned the backend, procesed and sent to the front end where they are then displayed.

The front end is built in [vue](https://vuejs.org/) with HTML, CSS and JavaScript. The back end is built in [express](https://expressjs.com/), a Node based JavaScript framework. Check out the [Github repo](https://github.com/jacobg1/NasaSearch) for the back end.
