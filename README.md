# Amazon Tracker
Monitor the in-stock status of a product from Amazon.com and send yourself an iMessage
when it becomes available.

## Setup
Assuming Node.js is already installed, just run `npm install` to download the project dependencies.

Next, add the list of products you want to track to `items.json`.  It should look something like this:

```
[
  {"name": "Xbox One", "url": "http://www.amazon.com/Xbox-One-Standard-Edition/dp/B00CMQTVUA"},
  {"name": "Kindle Paperwhite": "url": "http://www.amazon.com/dp/B00AWH595M"}
]
```

(Note that while the app is running, this list will get modified to set the "instock" 
status of each item. This helps prevent constant messages from being sent if an item 
becomes available.)

Next, modify the `imessage.scpt` file to include your iCloud credentials. Both the phone number
and email portion can be for the same account or separate accounts if you happend to have
more than one.

Last, to start the app, just run `node amazon.js`. This will run the app in the foreground,
checking Amazon every two minutes. If you prefer to run this as a cron task or something,
just comment out the setInterval block at the end of the script.

Happy shopping!

## License
amazon-tracker is free software, and may be redistributed under the MIT-LICENSE.

## FAQ

**Q: Why did you make this app?**  
A: I was trying to buy some Frozen dolls for my daughter and they were sold out everywhere.

**Q: Why didn't you just register at one of those product tracker sites and have them send you and email or text when it was available?**  
A: I think those sites are sketchy and don't trust them.

**Q: Frozen, huh? Does that "Let It Go" song play in your head all day long too?**  
A: Yes. Yes it does. If you find a way to make it stop, please let me know.
