<template>
  <div class="home">
  <div class="preloader-mask">
    <div class="preloader"></div>
  </div>

  <section id="hero" class="hero-section bg bg-cover window-height light-text">
    <ul class="socials-nav" v-if="false">
      <li class="socials-nav-item"><a href="#"><span class="fa fa-twitter"></span></a></li>
      <li class="socials-nav-item"><a href="#"><span class="fa fa-facebook"></span></a></li>
      <li class="socials-nav-item"><a href="#"><span class="fa fa-github"></span></a></li>
      <li class="socials-nav-item"><a href="#"><span class="fa fa-vimeo-square"></span></a></li>
      <li class="socials-nav-item"><a href="#"><span class="fa fa-google-plus"></span></a></li>
      <li class="socials-nav-item"><a href="#"><span class="fa fa-instagram"></span></a></li>
    </ul>
    <div class="heading-block centered-block align-center">
      <div class="container">
        <img src="@/styles/img/ms-new.png" width="240px">
        <h5 class="heading-alt" style="margin-bottom: 8px;">The</h5>
        <h1 class="extra-heading">Midnight Show</h1>
        <div class="btns-container">
          <a href="#about" v-if="false" class="btn btn-md" data-modal-link="email-ticket">About Us</a>
          <a href="https://t.me/TheMidnightShow" target="_blank" class="btn btn-outline btn-md" data-modal-link="0">Contact</a>
        </div>
      </div>
    </div>
  </section>

  <header v-if="false" class="header header-black">
    <div class="header-wrapper">
      <div class="container">
        <div class="col-sm-2 col-xs-12 navigation-header">
          <a href="#" class="logo">
            <img id="logo" src="@/styles/img/ms-text-logo.png" width="160">
          </a>
          <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-controls="navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="col-sm-10 col-xs-12 navigation-container">
          <div id="navigation" class="navbar-collapse collapse">
            <ul class="navigation-list light-text">
              <li class="navigation-item"><a href="#about" class="navigation-link">About</a></li>
              <li class="navigation-item"><a href="#services" class="navigation-link">Services</a></li>
              <li class="navigation-item"><a href="#team" class="navigation-link">Team</a></li>
              <li class="navigation-item"><a href="#partners" class="navigation-link">Partners</a></li>
              <li class="navigation-item"><a href="#whitepaper" class="navigation-link">Whitepaper</a></li>
              <li class="navigation-item"><a href="#contacts" class="navigation-link">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div v-if="false">
    <section id="about" class="section bg-gray align-center">
      <div class="container">
        <h3>The Midnight Show</h3>
        <p class="text-alt">Where the community safety is in the first place!</p>
        <br />
        <br />

        <div class="tabs-wrapper tabs-horizontal">
          <ul class="nav nav-tabs">
            <li class="active"><a href="#horizontal_tab1" data-toggle="tab">
              <h6 class="heading-alt"><span class="fa fa-code"></span>General info</h6>
            </a></li>
            <li><a href="#horizontal_tab2" data-toggle="tab">
              <h6 class="heading-alt"><span class="fa fa-rocket"></span>Vision</h6>
            </a></li>
            <li><a href="#horizontal_tab3" data-toggle="tab">
              <h6 class="heading-alt"><span class="fa fa-external-link"></span>Roadmap</h6>
            </a></li>
          </ul>

          <div class="tab-content">
            <div id="horizontal_tab1" class="tab-pane fade active in">
              <div class="col-sm-5 img-column">
                <img src="@/styles/img/ms-new.png" width="240" class="img-responsive" />
              </div>
              <div class="col-sm-7 align-left">
                <p>If you have frequented the DeFi space, you must have fallen prey to a fair share of exit scams, rug-pulls and honeypots. This epidemic of scams has compelled people to accept them as a natural consequence of DeFi investing, which is far scarier than the scams themselves.</p>
                <p>We saw a growing need in the crypto space for a service that audits and approves the growing number of new projects and hence, The Midnight Show was born. Additionally, we also host several podcasts and AMAs that divert the investor's attention to lucrative projects and educate them on protecting their capital from scammers.</p>
                <p>We strive to become a force to be reckoned with in the BSC space. With our team of veteran crypto visionaries, we'll soon be a name that is both dear to the investors and feared by the scammers. So sit back, relax and enjoy the ride, as you've stumbled upon the greatest show in crypto.</p>
              </div>
            </div>

            <div id="horizontal_tab2" class="tab-pane fade">
              <div class="col-sm-7 align-right">
                <h6>Workshops</h6>
                <p>Faucibus sed pretium. Ridiculus <strong>consectetuer</strong> et. In arcu enim sit in libero scelerisque mauris sed. Nullam eleifend in varius arcu vitae feugiat magna id ut morbi consectetuer. In vivamus arcu. Id ut dui. Sed massa in. Scelerisque suscipit quisque maecenas aliquet in. Wisi mi ipsum. Elit et mauris. Duis in magni praesent <a href="#">content</a> massa.</p>
                <p>Consectetuer amet wisi felis sem <strong>tincidunt</strong>. Ultricies blandit id euismod inceptos mauris pulvinar nec nullam quisque consequat nulla eleifend elementum vivamus aliquam placerat nec. Vehicula leo praesent vitae leo mauris ullamcorper lectus sed mollis id turpis dui cras suspendisse. Porta diam <a href="#">eleifend</a>. Praesent magnis sit. Enim ligula vel justo urna.</p>
                <ul>
                  <li>Nisl cras vitae wisi odio amet.</li>
                  <li>Lacus amet vestibulum belas</li>
                  <li>Quis nunc curabitur assumenda</li>
                </ul>
              </div>

              <div class="col-sm-5 img-column">
                <img src="@/styles/img/ms.jpg" width="240" class="img-responsive" />
              </div>
            </div>

            <div id="horizontal_tab3" class="tab-pane fade">
              <div class="col-sm-5 img-column">
                <img src="@/styles/img/ms.jpg" width="240" class="img-responsive" />
              </div>
              <div class="col-sm-7 align-left">
                <h6>Sponsors apply</h6>
                <p>Faucibus sed pretium. Ridiculus <strong>consectetuer</strong> et. In arcu enim sit in libero scelerisque mauris sed. Nullam eleifend in varius arcu vitae feugiat magna id ut morbi consectetuer. In vivamus arcu. Id ut dui. Sed massa in. Scelerisque suscipit quisque maecenas aliquet in. Wisi mi ipsum. Elit et mauris. Duis in magni praesent <a href="#">content</a> massa.</p>
                <ul>
                  <li>Nisl cras vitae wisi odio amet.</li>
                  <li>Lacus amet vestibulum belas</li>
                  <li>Quis nunc curabitur assumenda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section align-center">
      <div class="container">
        <span class="icon section-icon icon-badges-votes-14"></span>
        <h3>Services</h3>
        <p class="text-alt">Choose the package that fits the best for you and your<span class="highlight"> project</span></p>
        <br/>
        <br/>

        <div class="row">
          <div class="col-sm-4">
            <div class="package-column d-flex flex-column justify-content-between">
              <div>
                <div class="package-logo">
                  <img src="@/styles/img/dyor-new.png">
                </div>
                <div class="package-detail">
                  <ul>
                    <li><span class="fa fa-check check-icon"></span>Team wallet vested</li>
                    <li><span class="fa fa-check check-icon"></span>Public Presale (no whitelist)</li>
                    <li><span class="fa fa-check check-icon"></span>Safe code. No backlist functions</li>
                    <li><span class="fa fa-check check-icon"></span>Dev team history</li>
                  </ul>
                </div>
              </div>
              <a href="#" class="btn btn-lg btn-outline-clr">Select</a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="package-column d-flex flex-column justify-content-between">
              <div>            
                <div class="package-logo">
                  <img src="@/styles/img/gold.png" width="200px">
                </div>
                <div class="package-detail">
                  <ul>
                    <li><span class="fa fa-check check-icon"></span>Team wallet vested</li>
                    <li><span class="fa fa-check check-icon"></span>Public Presale (no whitelist)</li>
                    <li><span class="fa fa-check check-icon"></span>Safe code</li>
                    <li><span class="fa fa-check check-icon"></span>No backlist functions</li>
                    <li><span class="fa fa-check check-icon"></span>Dev team fully doxxed to core team</li>
                  </ul>
                </div>
              </div>
              <a href="#" class="btn btn-lg btn-outline-clr">Select</a>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="package-column special-column d-flex flex-column justify-content-between">
              <div>
                <span class="sale-label uppercase">Best!</span>
                <div class="package-logo">
                  <img src="@/styles/img/diamond.png" width="200px">
                </div>
                <div class="package-detail">
                  <ul>
                    <li><span class="fa fa-check check-icon"></span>Team wallet vested</li>
                    <li><span class="fa fa-check check-icon"></span>Public Presale (no whitelist)</li>
                    <li><span class="fa fa-check check-icon"></span>Safe code</li>
                    <li><span class="fa fa-check check-icon"></span>No backlist functions</li>
                    <li><span class="fa fa-check check-icon"></span>Dev team fully doxxed to core team</li>
                    <li><span class="fa fa-check check-icon"></span>Anti Rug BSC / Rug proof</li>
                    <li><span class="fa fa-check check-icon"></span>Multi sig wallet</li>
                  </ul>
                </div>
              </div>
              <a href="#" class="btn btn-lg btn-outline-clr">Select</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="section bg-gray align-center">
      <div class="container">
        <span class="icon section-icon icon-faces-users-04"></span>
        <h3>Team</h3>
        <p class="text-alt">Meet our <span class="highlight">core team</span></p>
        <br />
        <br />

        <div class="col-sm-4">
          <div class="speaker">
            <div class="photo-wrapper rounded"><img src="@/styles/img/team/midnight.jpg" alt="MidnightCrypto" class="img-responsive"></div>
            <h3 class="name">Midnight Crypto</h3>
            <p class="text-alt"><small>CEO</small></p>
            <p class="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <ul class="speaker-socials">
              <li><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="speaker">
            <div class="photo-wrapper rounded"><img src="@/styles/img/team/savage.jpg" alt="Savage" class="img-responsive"></div>
            <h3 class="name">Savage</h3>
            <p class="text-alt"><small>COO</small></p>
            <p class="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <ul class="speaker-socials">
              <li><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="speaker">
            <div class="photo-wrapper rounded"><img src="@/styles/img/team/crypto-whale.jpg" alt="CryptoWhale" class="img-responsive"></div>
            <h3 class="name">Crypto Whale</h3>
            <p class="text-alt"><small>CFO</small></p>
            <p class="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <ul class="speaker-socials">
              <li><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="speaker">
            <div class="photo-wrapper rounded"><img src="@/styles/img/team/jamie.jpg" alt="Jamie" class="img-responsive"></div>
            <h3 class="name">Jamie</h3>
            <p class="text-alt"><small>Head of marketing</small></p>
            <p class="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <ul class="speaker-socials">
              <li><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="speaker">
            <div class="photo-wrapper rounded"><img src="@/styles/img/team/hugo.jpg" alt="Hugo" class="img-responsive"></div>
            <h3 class="name">Hugo</h3>
            <p class="text-alt"><small>CTO</small></p>
            <p class="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <ul class="speaker-socials">
              <li><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="speaker">
            <div class="photo-wrapper rounded"><img src="@/styles/img/team/savage-r.jpg" alt="John Doe" class="img-responsive"></div>
            <h3 class="name">Savage Refinisher</h3>
            <p class="text-alt"><small>CIO</small></p>
            <p class="about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <ul class="speaker-socials">
              <li><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="feedback" class="section align-center" style="padding-top: 25px;">
      <div class="container">
        <h5 class="heading-alt">TESTIMONIALS</h5>
        <p class="text-alt" style="margin-bottom: 80px;">what projects <span class="highlight">say</span></p>

        <div class="row">
          <div class="col-sm-4">
            <div class="testimonial">
              <article class="text-box">The Midnight Team has been 100% professional and honest with all of their interactions with Atomic. It's been a pleasure to work with them and multiple team members are involved everyday, getting their hands dirty, helping me in every way possible.</article>
              <div class="author-block">
                <strong class="name">The Astral</strong>
                <small class="text-alt company">Atomic Token Owner</small>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="testimonial">
              <article class="text-box">Ghost (TMS Staff member) has been awesome in moderating, really responsive, adaptive and proactive guy. Great to have around! Keep it up 💪</article>
              <div class="author-block">
                <strong class="name">Kit Aid</strong>
                <small class="text-alt company">AdaCatto - Core Team</small>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="testimonial">
              <article class="text-box">I would always reach out to them again! They are the best!</article>
              <div class="author-block">
                <strong class="name">Mike Meyers</strong>
                <small class="text-alt company">PeoplesDoge</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="partners" class="section bg-gray align-center">
      <div class="container">
        <span class="icon section-icon icon-documents-bookmarks-12"></span>
        <h3>Partners</h3>
        <p class="text-alt">groups that <span class="highlight">shares</span> the same value</p>
        <br/>
        <br/>

        <div class="sponsors">
          <div class="sponsor big"><img src="@/styles/img/team/antirug.jpg" alt=""></div>
        </div>

      </div>
    </section>

    <section id="register" class="section bg bg-cover bg light-text align-center">
      <div class="container">
        <div class="d-flex align-items-center">
          <img src="@/styles/img/ms-new.png" alt="CryptoWhale" width="120" class="img-responsive">
        </div>
        <h2>Join our family now!</h2>
        <p>Everyone is welcomed to be part of our family. Let's change the bsc space together!</p>
        <br />
        <br />

        <a href="https://t.me/TheMidnightShow" target="_blank" class="btn btn-lg btn-outline">Become a member</a>
      </div>
    </section>

    <section class="footer">
      <div class="container">

        <div class="col-md-4">
          <div class="widget about-widget">
            <h6 class="widget-head">About <span class="highlight">Midnight Show</span></h6>
            <p class="text-alt"><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</small></p>

            <img src="@/styles/img/ms-new.png" alt="logo" width="120" class="img-responsive">
          </div>
        </div>

        <div class="col-md-4 col-lg-3 col-lg-offset-1">
          <div class="widget twitter-widget">
            <h3>Location</h3>

            <ul class="list align-left">
              <li><i class="fa fa-map-marker"></i>881 7th Ave New York, NY</li>
              <li><i class="fa fa-envelope"></i>info@ventcamp.com</li>
              <li><i class="fa fa-phone"></i>(518) 457-5181 10001</li>
              <li><i class="fa fa-clock-o"></i>7:30 - 22:00</li>
            </ul>
          </div>
        </div>

        <div class="col-md-4 col-lg-3 col-lg-offset-1">
          <div class="widget instagram-widget">
            <h6 class="widget-head"><span class="fa fa-instagram"></span>Team</h6>

            <ul class="instagram-list">
              <li><img src="@/styles/img/team/midnight.jpg" alt="photo" /></li>
              <li><img src="@/styles/img/team/savage.jpg" alt="photo" /></li>
              <li><img src="@/styles/img/team/crypto-whale.jpg" alt="photo" /></li>
              <li><img src="@/styles/img/team/jamie.jpg" alt="photo" /></li>
              <li><img src="@/styles/img/team/hugo.jpg" alt="photo" /></li>
              <li><img src="@/styles/img/team/savage-r.jpg" alt="photo" /></li>
            </ul>
          </div>
        </div>

      </div>

      <div class="footer-base">
        <div class="container">

          <div class="col-md-6">
            <ul class="footer-nav">
              <li class="footer-nav-item"><a href="#">Contact</a></li>
              <li class="footer-nav-item"><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-md-6 align-right">
            <ul class="socials-nav align-right">
              <li class="socials-nav-item"><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li class="socials-nav-item"><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li class="socials-nav-item"><a href="#"><span class="fa fa-github"></span></a></li>
              <li class="socials-nav-item"><a href="#"><span class="fa fa-vimeo-square"></span></a></li>
              <li class="socials-nav-item"><a href="#"><span class="fa fa-google-plus"></span></a></li>
              <li class="socials-nav-item"><a href="#"><span class="fa fa-instagram"></span></a></li>
            </ul>

            <p class="text-alt"><small>All Rights Reserved © 2021</small></p>
          </div>

        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
