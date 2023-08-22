document.addEventListener('DOMContentLoaded', function () {
    const chatOutput = document.getElementById('chat-output');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const message = messageInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = message;
            chatOutput.appendChild(messageElement);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
