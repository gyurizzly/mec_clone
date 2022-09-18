const header = document.querySelector('header')
 const Header = () => {
    const headerContent = `
    <header>
    <div class="adsBar">
        <div class="adsBarContent">
            <a href="#">LAST CHANCE DEALS</a>
        </div>
    </div>
    <div class="headerContent">
        <a href="#">
            <img src="https://www.mec.ca/images/mec-logo.svg" alt="" class="logo">
        </a>
        <div class="formContainer">
            <div class="inputWrapper">
                <input type="text" placeholder="I'm looking for">
                <span class="material-symbols-outlined i-search">
                    search
                </span>
            </div>
            <div class="setStore">
                My store:<br /> <a href="#">Set my store</a>
            </div>
            <div class="listContainer">
                <div class="listBox">
                    <span>New gear</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
                <div class="listBox">
                    <span>Activities</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
                <div class="listBox">
                    <span>Women</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
                <div class="listBox">
                    <span>Men</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
                <div class="listBox">
                    <span>Kids</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
                <div class="listBox">
                    <span>Brands</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
                <div class="listBox">
                    <span>Deals</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
                <div class="listBox">
                    <span>About us</span>
                    <span class="material-symbols-outlined arrow-bottom">
                        expand_more
                    </span>
                </div>
            </div>
        </div>
        <div class="accontContainer">
            <div class="iconBox">
                <span class="material-symbols-outlined">
                    person
                </span>
                <span>Account</span>
                <span class="material-symbols-outlined arrow-bottom">
                    expand_more
                </span>
            </div>
            <div class="iconBox">
                <span class="material-symbols-outlined">
                    help
                </span>
                <span>Account</span>
                <span class="material-symbols-outlined arrow-bottom">
                    expand_more
                </span>
            </div>
            <div class="iconBox">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
                <span>Account</span>
            </div>
        </div>
    </div>
</header>
    `
    return headerContent
}
header.innerHTML = Header()
