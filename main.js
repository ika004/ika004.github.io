fetch("jquery-3.7.0.js")
.then(r=>r.text())
.then(t=>eval(t))
.then(() => {
    $(function() {
        $("#header").load("./header.html");
    });
});