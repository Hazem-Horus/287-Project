class providerheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        `
        <nav class = "menu">
            <label class = "logo">ULicense</label>
            <ul class="nav-menu">
                <li class="nav-menu-tab"><a href = "provider.home.html">Home</a></li>
                <li class="nav-menu-tab"><a href = "provider.clients.html">My clients</a></li>
                <li class="nav-menu-tab"><a href = "provider.products.html">My products</a></li>
                <li class="nav-menu-tab"><a href = "LoginTwo.html">Logout</a></li>
            </ul>
        </nav>`
        ;
    }
}
customElements.define("provider-header", providerheader);