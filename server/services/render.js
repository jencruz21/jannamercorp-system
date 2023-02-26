

exports.homeRoutes = (req,res)=>{
    res.render("frontEnd/index", {
        page: req.url
    })
}
exports.about = (req,res)=>{
    res.render("frontEnd/about", {
        page: req.url
    })
}
exports.contact = (req,res)=>{
    res.render("frontEnd/contact", {
        page: req.url
    })
}

exports.product = (req,res)=>{
    res.render("frontEnd/product", {
        page: req.url
    })
}

exports.companyView = (req,res)=>{
    res.render("frontEnd/company-view", {
        page: req.url
    })
}

exports.feature=(req,res)=>{
    res.render("frontEnd/feature")
}

exports.gallery= (req,res)=>{
    res.render('frontEnd/gallery')
}

exports.team = (req,res)=>{
    res.render('frontEnd/team')
}
exports.testimonial = (req,res)=>{
    res.render("frontEnd/testimonial")
}