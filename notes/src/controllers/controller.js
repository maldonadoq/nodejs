const Controller = {};

Controller.renderIndex = (req, res) => {
    res.render('index');
}

Controller.renderAbout = (req, res) => {
    res.render('about');
}

module.exports = Controller;