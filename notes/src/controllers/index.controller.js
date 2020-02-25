const IndexCtrl = {};

IndexCtrl.renderIndex = (req, res) => {
    res.render('index');
}

IndexCtrl.renderAbout = (req, res) => {
    res.render('about');
}

module.exports = IndexCtrl;