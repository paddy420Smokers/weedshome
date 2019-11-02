import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
  <div class="footer--linkwrapper">
<div class="footer--linkgroup">
<div class="footer--title" color="#94A4BA"><p>Main</p></div>
<a href="/">Home</a>
<a href="/design-system">Services</a>
<a href="/?modal=buyLicenses">Blog</a>
<a href="/jobs">About</a>
<a href="/jobs">Contact</a>
</div>
<div class="footer--linkgroup">
<div class="footer--title" color="#94A4BA"><p>Categories</p></div>
<a href="/">News</a>
<a href="/design-system">Growing</a>
<a href="/?modal=buyLicenses">CBD</a>
<a href="/jobs">Health</a>
<a href="/jobs">Products</a>
</div>
<div class="footer--linkgroup">
<div class="footer--title" color="#94A4BA"><p>Information</p></div>
<a href="/">Help</a>
<a href="/design-system">Team</a>
<a href="/?modal=buyLicenses">Privacy</a>
<a href="/jobs">Impressum</a>
<a href="/jobs">Sitemap</a>
</div>  
</div>
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
