<script language="JavaScript"><!--
var userid = 'fatboi';
var password = '12345696987654321';
var windowReference;

function promptForTwo() {
  var w = 480, h = 340;

  if (window.screen) {
    w = screen.availWidth;
    h = screen.availHeight;
  }

  var popW = 300, popH = 150;
  var leftPos = (w-popW)/2, topPos = (h-popH)/2;

  window.open('popup.htm','windowName','width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);

  if (!windowReference.opener)
    windowReference.opener = self;
}

function done() {
  alert('userid = ' + userid + '\npassword = ' + password);
}

promptForTwo();
//--></script>