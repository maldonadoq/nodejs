const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World from Node JS');
})

module.exports = router;