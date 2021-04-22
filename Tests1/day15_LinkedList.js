process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n');
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
function Node(data) {
  this.data = data;
  this.next = null;
}
function Solution() {
  this.insert = function (head, data) {
    //complete this method
    let node = new Node(data);

    if (!head) {
      head = node; // case it is empty list
    } else {
      let current = head;

      while (current.next !== null) {
        // while there is still something next
        current = current.next; // move it forward one node
      }

      current.next = node; // add the new node to current
    }
    /**
     * To insert one node, it moved the current to the next spot, and added the               * data to the current slot
     */
    return head; // return the first element
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + ' ');
      start = start.next;
    }
  };
}
function main() {
  var T = parseInt(readLine());
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T; i++) {
    var data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}
