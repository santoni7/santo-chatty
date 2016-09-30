            $(document).ready(function(){

                var nick = '';
                console.log('hello');
                nick = prompt("Please enter your name", "Harry Potter");
                var socket = io();
                socket.json.emit('auth', {nick: nick});
                $('form').submit(function(){
                    var msg = $('#m').val()
                    socket.json.emit('chat message',{nick: nick, msg: msg});
                    $('#messages').append($('<li>').addClass('own').text(nick + ": " + msg));
                    $('#m').val('');
                    return false;
                });
                socket.on('chat message', function(data){
                    $('#messages').append($('<li>').text(data.nick + ": " + data.msg));
                    document.body.scrollTop = document.body.scrollHeight;
                })
            });