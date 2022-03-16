var test = require('tape')
var { similarity } = require('.')
var fs = require('fs')
test('similarity', function (t) {
  let wordcheck = similarity('شهر');
  t.ok(typeof similarity === 'function', 'should be an function')
  t.ok(typeof similarity('test') === 'undefined', 'should have 0 english words')
  t.ok(typeof wordcheck.total === 'number', 'should have total and should be numeric')
  t.ok(Array.isArray(wordcheck.words), 'should have array of words')
  t.ok(wordcheck.words.length > 0, 'should have words')
  t.ok(typeof wordcheck.bestMatch === 'object', 'should have bestmatch')
  t.ok(typeof similarity('آب') !== 'undefined', 'first chunk check')
  t.ok(typeof similarity('فرهذ') !== 'undefined', 'last chunk check')
  t.end()
})
test('data', function (t) {
  t.ok(fs.existsSync('./words.json'), 'words should exist')
  let words = JSON.parse(fs.readFileSync('./words.json').toString());
  t.ok(Object.entries(words).length > 343000, 'words should have more than 343000 words')
  t.ok(fs.existsSync('./library/map.json'), 'words map should exist')
  let map = JSON.parse(fs.readFileSync('./library/map.json').toString());
  t.ok(Object.entries(map).length > 343000, 'map should have more than 343000 entries')
  t.ok(fs.readdirSync('./library').length > 3400, 'similarity chunks should exist')
  t.end()
})