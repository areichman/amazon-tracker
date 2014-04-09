#!/usr/bin/env node

var req   = require('request'),
    exec  = require('child_process').exec,
    fs    = require('fs'),
    items = require('./items.json'),
    ctr   = 0;

function getItem() {
  req.get(items[ctr].url, function(err, res, body) {
    if (err) return false;
    var avail = body.search(/Ships from and sold by .*Amazon\.com/) !== -1;
    
    // only send a message on initial product availability
    if (avail && !items[ctr].instock) {
      exec('osascript imessage.scpt "' + items[ctr].name + ' in stock"');
    }
    
    items[ctr].instock = avail;
    console.log('[%s] %s %s', new Date().toISOString(), items[ctr].name, avail ? 'in stock' : 'unavailable');
    
    ctr++;
    if (ctr < items.length) {
      getItem();
    } else {
      fs.writeFile('items.json', JSON.stringify(items, null, '  '));
    }
  });
}

getItem();

setInterval(function() {
  ctr = 0;
  getItem();
}, 120000);
