const express = require('express');
const router = express.Router();

const db = require('../database');

router.get('/add', (req, res) => {
  res.render('links/add');
});

router.post('/add', async (req, res) => {
  const { title, url, description } = req.body;
  const newlink = {
    title,
    url,
    description
  };

  await db.query('insert into links set ?', [newlink]);
  req.flash('success', 'Link saved succesfully');
  res.redirect('/links');
});

router.get('/', async (req, res) => {
  const links = await db.query('select *from links');
  res.render('links/list', {links})
});

router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;

  await db.query('delete from links where id=?', [id]);
  req.flash('success', 'Link deleted succesfully');
  res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const links = await db.query('select * from links where id = ?', [id]);
  res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  const newlink = {
    title,
    url,
    description
  };

  await db.query('update links set ? where id = ?', [newlink, id]);
  req.flash('success', 'Link edited succesfully');
  res.redirect('/links');
});

module.exports = router;