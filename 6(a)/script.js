function loadData() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.txt', true); // Change 'data.txt' to the path of your TXT file
    
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('output').innerText = this.responseText;
        } else {
            document.getElementById('output').innerText = 'Failed to load data';
        }
    };
    
    xhr.onerror = function() {
        document.getElementById('output').innerText = 'Request error';
    };
    
    xhr.send();
}
