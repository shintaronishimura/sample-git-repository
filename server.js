// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// ミドルウェアの設定
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// ダミーデータ
const posts = [
  { id: 1, title: '投稿1' },
  { id: 2, title: '投稿2' },
  { id: 3, title: '投稿3' },
];

// 投稿一覧の表示
app.get('/', (req, res) => {
  res.render('posts', { posts });
});

// サーバーの起動
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// 新しい投稿の作成
app.post('/posts', (req, res) => {
    const { title } = req.body;
    const newPost = { id: posts.length + 1, title };
    posts.push(newPost);
    res.redirect('/');
  });