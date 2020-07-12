const loadNavbar = () => {
    document.getElementById("insertedNavbar").innerHTML =    `   <nav class="navigation">
    <div class="vertical-center">
        <ul class="link-list">
            <li><a href="index.html">Zum Grundstück</a></li>
            <li><a href="latest.html">Neueste Geschichten</a></li>
        </ul> 
    </div>
</nav>`;
}
loadNavbar();
