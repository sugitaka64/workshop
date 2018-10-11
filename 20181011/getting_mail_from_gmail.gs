function getting_mail_from_gmail() {
  // get mail data
  var threads = GmailApp.search('is:unread "メール送信テスト"', 0, 10);

  // create ss object
  var ss = SpreadsheetApp.getActive().getSheetByName('メール');
  var row = ss.getLastRow() + 1;

  // repeat processing
  var i, j;
  var message, messages;
  var body, date;
  for (i in threads) {
    messages = threads[i].getMessages();
    for (j in messages){
      message = messages[j];
      body = message.getBody();
      date = message.getDate();

      // write
      ss.getRange(row, 1).setValue(date);
      ss.getRange(row, 2).setValue(body);

      // already-read
      message.markRead();

      row++;
    }
  }
}
