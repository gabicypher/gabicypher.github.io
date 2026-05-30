// div class "illustrations" inserts <div class="card"> <img src="images[i]"> <p>dateslist[i]</p> </div>
for (let i = 0; i < dateslist.length; i++) {
    document.querySelector('.illustrations').innerHTML += '<div class="card">' + '<img src="' + images[i] + '">' + '<p>' + dateslist[i] + '</p>' + '</div>';
}

document.querySelector('.footer').innerHTML += '<p>&copy; 2023-2026 Gabi Seifert. Website made entirely from scratch with HTML, CSS, and a dash of Javascript.</p>';