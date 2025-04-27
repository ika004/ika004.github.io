fetch("https://code.jquery.com/jquery-3.6.1.min.js")
.then(r=>r.text())
.then(t=>eval(t))
.then(() => {
    $(function() {
        $("#header").load("./header.html");
    });
});