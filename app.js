window.onload = function () {

    var d = document,
        message = d.querySelector('#message'),
        btnSend = d.querySelector('#send'),
        btnStop = d.querySelector('#stop'),
        status = d.querySelector('#status');


    btnSend.onclick = function () {
        socket.send(message.value);
        console.log(message.value);
    };

    btnStop.onclick = function () {
        socket.close();
    };

    var socket = new WebSocket("ws://echo.websocket.org");



    socket.onopen = function (e) {
        console.log(e);
        console.log('Зєднання встановлено');
        status.innerHTML = 'Зєднання встановлено';
    };

    socket.onclose = function (e) {
        console.log(e);
        console.log('Зєднання закрито');
        status.innerText = 'Зєднання закрито';
        var code = e.code,
            reason = e.reason,
            wasClean = e.wasClean;
        if (wasClean)
            status.innerText = 'Зєднання закрито правильно';
        else
            status.innerText = 'Зєднання закрито не правильно';


    };

    socket.onmessage = function (e) {
        console.log(e);
        status.innerText = e.data;
    }
};
