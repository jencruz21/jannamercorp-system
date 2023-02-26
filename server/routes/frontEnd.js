const express = require('express')
const route = express.Router()


const services = require("../services/render")




/**
 *  @description Root Route
 *  @method GET /
 */

route.get("/",services.homeRoutes)
route.get("/about",services.about)
route.get("/contact",services.contact)
route.get("/feature",services.feature)
route.get("/gallery",services.gallery)
route.get("/products",services.product)
route.get("/company-view",services.companyView)
route.get("/team",services.team)
route.get("/testimonial",services.testimonial)







module.exports= route