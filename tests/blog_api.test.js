const { test, after, beforeEach } = require('node:test');
const mongoose = require('mongoose');
const supertest = require('supertest');
const assert = require('node:assert');
const app = require('../app');
const api = supertest(app);

const Blog = require('../models/blog');

const initialBlogs = [
  {
    title: 'HTML is easy',
    author: 'DMC',
    url: 'asdf.com',
    likes: 8
  },
  {
    title: 'testing is not easy',
    author: 'DMC',
    url: 'asdf.com',
    likes: 100
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})
  console.log('blogs deleteed');
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
  console.log('before each ends here');
})

test('there are two notes', async() => {
    console.log('test1');
    const response = await api.get('/api/blogs')
    console.log('response', response);
    assert.strictEqual(response.body.length, 2)
})

after(async () => {
  console.log('Closing MongoDB connection...');
  await mongoose.connection.close();
  console.log('Closed MongoDB connection.');
});
