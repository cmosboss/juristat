/**
 * Created by Taylor on 7/11/2017.
 */
// Init express instance
const express = require('express');

const app = express();

// Setup api router and start
const apiRouter = require('./src/API/router.js');

app.use('/api', apiRouter);

// Start app listening on port
app.listen(3001);

// Setup sqlite3 database for querying, this is a simple data store and most of this code would not be around in a production setting. This also only runs on first run.
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('test.db');
// This is a simple check to make sure we only do this once at the first startup, again this would all be replaced with a proper DB later on.
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='articles'", function (err, result) {
  if (result === undefined) {
    console.log('Setting up DB');
    db.serialize(function () {
      db.run('CREATE TABLE articles (id int, url TEXT, headline TEXT, image TEXT)');
      const stmt = db.prepare("INSERT INTO articles VALUES (?, ?, ?, ?)");
      stmt.run('1', 'http://www.abajournal.com/news/article/california_supreme_court_asserts_its_authority_to_determine_passing_bar_exa', 'California Supreme Court asserts its authority to determine passing bar exam grade', 'http://www.abajournal.com/images/main_images/barexam.jpg');
      stmt.run('2', 'http://www.zdnet.com/article/apple-opening-china-data-center-to-comply-with-new-law/', 'Apple opens China data center to comply with new law', 'http://zdnet4.cbsistatic.com/hub/i/r/2017/03/28/a02d17c6-fe1e-4b7d-9266-9ec83ba8e5fc/resize/770xauto/31ae54a8740147032eff904718e0401e/icloud-100708260-large.jpg');
      stmt.run('3', 'https://www.usnews.com/news/technology/articles/2017-07-10/austria-pursues-police-access-to-messaging-data-with-new-law', 'Austria Drafts Law to Let Police Access Messaging Data', 'https://www.usnews.com/dims4/USNEWS/62e1ced/2147483647/thumbnail/970x647/quality/85/?url=%2Fcmsmedia%2F82%2F738b0e15e0058e382b138a668b52c2%2Ftag%3Areuters.com%2C2017%3Anewsml_LYNXMPED691CH%3A12017-07-10T155227Z_1_LYNXMPED691CH_RTROPTP_3_HIKEMESSENGER-PAYMENTS.JPG');
      stmt.run('4', 'https://techcrunch.com/2017/07/12/donotpay-launches-1000-new-bots-to-help-you-with-your-legal-problems/', 'DoNotPay launches 1,000 new bots to help you with your legal problems', 'https://tctechcrunch2011.files.wordpress.com/2017/07/donotpay-ios.jpg?w=1028');
      stmt.run('5', 'http://www.businessinsider.com/net-neutrality-explainer-internet-protest-fcc-ajit-pai-2017-7', "Reddit, Netflix, Google, and dozens of other tech companies are protesting Trump's FCC today — here's why", 'http://static3.businessinsider.com/image/591db62b34911b1a008b4946-1599/gettyimages-679314964.jpg');
      stmt.finalize();
    });
    db.close();
  }
});

