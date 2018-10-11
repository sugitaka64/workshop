function sending_test_mail_from_gss() {
  // create ss object
  var ss = SpreadsheetApp.getActive().getSheetByName('リスト');

  // names
  var names = ss.getRange(2, 1, ss.getLastRow()-1, 1).getValues();
  // mail addresses
  var mail_addresses = ss.getRange(2, 2, ss.getLastRow()-1, 1).getValues();

  // repeat processing
  var i;
  for (i in mail_addresses) {
    GmailApp.sendEmail(
      mail_addresses[i],
      'メール送信テストタイトル',
      names[i] + 'さん\n\nメール送信テスト本文',
      {
        cc: 'xxx@gmail.com'
      }
    );
  }
}
