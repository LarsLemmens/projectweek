[
	{
	  "description": "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM",
	  "id": 1,
	  "price": 2399,
	  "quantity": 10,
	  "thumbnail_url": "https://macbookpics.s3.eu-de.cloud-object-storage.appdomain.cloud/img1.jpeg",
	  "title": "macbook Retina 13.3' ME662 (2013)"
	},
	{
	  "description": "Macbook Pro 13.3' Retina MF841LL/A Model 2015 Option Ram Care 12/2016",
	  "id": 2,
	  "price": 1199,
	  "quantity": 15,
	  "thumbnail_url": "https://macbookpics.s3.eu-de.cloud-object-storage.appdomain.cloud/img2.jpeg",
	  "title": "Macbook Pro 13.3' Retina MF841LL/A"
	},
	{
	  "description": "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM",
	  "id": 3,
	  "price": 1800,
	  "quantity": 1,
	  "thumbnail_url": "https://macbookpics.s3.eu-de.cloud-object-storage.appdomain.cloud/img3.jpeg",
	  "title": "Macbook Pro 15.4' Retina MC975LL/A Model 2012"
	}
  ]

Vue.use(Vuex)

const url = "http://localhost:8000/products";
const headers = { Accept: "application/json" };