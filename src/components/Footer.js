import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div class="ftr">
    <footer className="footer">
  <div class="footer--linkwrapper">
<div class="footer--linkgroup">
<div class="footer--title" color="#94A4BA"><p>Main</p></div>
<a href="/">Home</a>
<a href="/blog/">Blog</a>
<a href="/about/">About</a>
<a href="/contact/">Contact</a>
</div>
<div class="footer--linkgroup">
<div class="footer--title" color="#94A4BA"><p>Categories</p></div>
<a href="/post-categories/news/">News</a>
<a href="/post-categories/growing/">Growing</a>
<a href="/post-categories/cbd/">CBD</a>
<a href="/post-categories/health/">Health</a>
<a href="/post-categories/products/">Products</a>
</div>
<div class="footer--linkgroup">
<div class="footer--title" color="#94A4BA"><p>Help</p></div>
<a href="/impressum/">Impressum</a>
<a href="/advertise/">Advertise</a>
<a href="/terms/">Terms</a>
<a href="/privacy/">Privacy</a>
</div>
<div class="footer--linkgroup">
<div class="footer--title" color="#94A4BA"><p class="doba">Information</p></div>
<img class="footer--img" src="/images/footer-logo.png"></img>
<p class="doba">Weed's Home Is Where The Weed Is At! Feel free to contact us via E-Mail.</p>
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
