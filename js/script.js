// nav menu
const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav-menu");
hamburger.addEventListener("click",function (){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", function (){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))


  
  // slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  // more
  function showHideMore(event) {
    event.preventDefault();
  
    let odstavec = event.target.parentElement;
    let dots = odstavec.querySelector(".dots");
    let moreText = odstavec.querySelector(".more");
    let btnText = odstavec.querySelector(".myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Více";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Méně";
      moreText.style.display = "inline";
    }
  }

  // cookies lišta
  window.addEventListener('load', function () {

    var cookieconsent = initCookieConsent();
    cookieconsent.run({
        current_lang : 'en',
        page_scripts: true,
        
        autorun : true,                             
        delay : 0,
        autoclear_cookies : true,    
        
        theme_css : 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.6.1/dist/cookieconsent.css',

        gui_options: {
          consent_modal : {
              layout : 'cloud',               // box/cloud/bar 
              position : 'bottom center',     // bottom/top + left/right/center
              transition: 'slide'             // zoom/slide
          },
          settings_modal : {
              layout : 'box',                 // box/bar
              transition: 'slide',            // zoom/slide
            }
        },
        
        onAccept: function(cookies){                
        if(cookieconsent.allowedCategory('necessary')){
            var dataLayer = window.dataLayer || [];
            dataLayer.push({
            event:"CookieConsent",
            consentType:"necessary"
          });
        }
        
        
        if(cookieconsent.allowedCategory('tracking')){
            var dataLayer = window.dataLayer || [];
            dataLayer.push({
            event:"CookieConsent",
            consentType:"tracking"
          });
        }
        
        if(cookieconsent.allowedCategory('performance')){
            var dataLayer = window.dataLayer || [];
            dataLayer.push({
            event:"CookieConsent",
            consentType:"performance"
          });
        }
        
        
    },
  
        languages : {
/*            'en' : {
                consent_modal : {
                    title :  "Cookies information",
                    description :  'By clicking on "Accept all cookies", you agree to storage cookies on your device, which helps with site navigation, data usage analysis and our marketing efforts.',
                    primary_btn: {
                        text: 'Accept All Cookies',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Cookies Prefences',
                        role : 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Cookies settings',
                    save_settings_btn : "Save preferences",
                    accept_all_btn : "Accept All",
                    close_btn_label: "Close",  
                  cookie_table_headers : [
                    {col1: "Cookie" }, 
                    {col2: "Description" }, 

                ],
                    blocks : [
                        {
                            title : "We use Cookies",
                            description: 'We use cookies for analysis of our visitor data, to improve our website, show personalized content and to give you a great website experience. By using this website, you consent to this use.',
                        },{
                            title : "Technical Cookies",
                            description: 'These cookies are necessary for the Website to work, so it is not possible to disable them. They are usually set up in response to an action you take on the Website yourself, such as security settings, logging in, and filling out forms. You can set your browser to block cookies or send notifications about them. Keep in mind that some pages will not work without these files. These cookies do not store any information that can be assigned to a specific person. These cookies may be set by us or by third party providers whose services we use on the website. These cookies do not store any information that can be assigned to a specific person.',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true
                            },
                            cookie_table: [
                            {
                                col1: 'cc_cookie',
                                col2: 'Your Cookies Preferences from this dialog.'
                            }
                              ]
                        },{
                            title : "Analytical Cookies",
                            description: 'These cookies are used to improve the functioning of the Website. They allow us to recognize and track the number of visitors and track how visitors use the Website. They help us improve the way the Website works, for example, by allowing users to easily find what they are looking for. These cookies do not collect information that could identify you. Using these tools, we analyze and regularly improve the functionality of our Website. We can use the obtained statistics to improve user comfort and to make your visit to the Website more interesting for you as a user.',
                            toggle : {
                                value : 'performance',
                                enabled : true,
                                readonly: false
                            },
                            cookie_table: [
                            {
                                col1: '_ga/_ga*, _gid',
                                col2: 'Google Analytics - store and count pageviews.',
                            },
                                                        {
                                col1: '_gcl_au',
                                col2: 'Google Tag Manager - Conversion linker funcionality',
                            },
                                                        {
                                col1: 'permId, p##*, pc##*',
                                col2: 'Incomaker - store and count pageviews and conversions',
                            }
                        ]
                        },{
                            title : "Marketing Cookies",
                            description: 'They are used to monitor a user\'s website preferences for the purpose of targeting advertising, ie displaying marketing and advertising messages (even on third-party sites) that may be of interest to the website visitor, in accordance with these preferences. Marketing cookies use the tools of external companies. These marketing cookies will be used only with your consent.',
                            toggle : {
                                value : 'tracking',
                                enabled : false,
                                readonly: false
                            },
                          cookie_table: [
                            {
                                col1: '_fbp',
                                col2: 'Facebook Pixel -  display advertisements when either on Facebook or on a digital platform powered by Facebook advertising, after visiting the website.',
                            },
                        ]
                        }
                    ]
                }
            },  */
               'cs' : {
                consent_modal : {
                    title :  "Informace o cookies",
                    description :  'Kliknutím na tlačítko Souhlasím se vším se uloží technické, analytické a marketingové soubory cookie, abychom vám mohli umožnit pohodlné používání stránek, měřit funkčnost našich stránek a cílit na vás reklamu. Své preference můžete snadno upravit kliknutím na Nastavení souborů cookie.',
                    primary_btn: {
                        text: 'Souhlasím se vším',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Nastavení cookies',
                        role : 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Nastavení cookies',
                    save_settings_btn : "Uložit nastavení",
                    accept_all_btn : "Souhlasím se vším",
                    close_btn_label: "Zavřít",  
                  cookie_table_headers : [
                    {col1: "Cookie" }, 
                    {col2: "Popis" }, 

                ],
                    blocks : [
                        {
                            title : "Používáme cookies",
                            description: 'Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu. Používáním tohoto webu s tímto používáním souhlasíte.',
                        },{
                            title : "Technické cookies",
                            description: 'Tyto soubory cookie jsou nezbytné pro fungování webových stránek, není tedy možné je zakázat. Obvykle se nastavují v reakci na akci, kterou na webu sami provedete, jako je nastavení zabezpečení, přihlášení a vyplňování formulářů. Svůj prohlížeč můžete nastavit tak, aby blokoval soubory cookie nebo o nich zasílal upozornění. Mějte na paměti, že některé stránky nebudou bez těchto souborů fungovat. Tyto soubory cookie neukládají žádné informace, které lze přiřadit konkrétní osobě. Tyto soubory cookie můžeme nastavit my nebo poskytovatelé třetích stran, jejichž služby na webu využíváme. Tyto soubory cookie neukládají žádné informace, které lze přiřadit konkrétní osobě.',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true
                            },
                            cookie_table: [
                            {
                                col1: 'cc_cookie',
                                col2: 'Vaše nastavení cookies z tohoto dialogu'
                            }
                              ]
                        },{
                            title : "Analytické cookies",
                            description: 'Tyto soubory cookie se používají ke zlepšení fungování webových stránek. Umožňují nám rozpoznat a sledovat počet návštěvníků a sledovat, jak návštěvníci web používají. Pomáhají nám zlepšovat způsob, jakým webové stránky fungují, například tím, že uživatelům umožňují snadno najít to, co hledají. Tyto soubory cookie neshromažďují informace, které by vás mohly identifikovat. Pomocí těchto nástrojů analyzujeme a pravidelně zlepšujeme funkčnost našich webových stránek. Získané statistiky můžeme využít ke zlepšení uživatelského komfortu a k tomu, aby byla návštěva Webu pro vás jako uživatele zajímavější.',
                            toggle : {
                                value : 'performance',
                                enabled : false,
                                readonly: false
                            },
                            cookie_table: [
                            {
                                col1: '_ga/_ga*, _gid',
                                col2: 'Google Analytics - ukládá a počítá počet zobrazení stránek a chování webu',
                            },
                                                        {
                                col1: '_gcl_au',
                                col2: 'Google Tag Manager - propojení konverzí',
                            },
                                                        {
                                col1: 'permId, p##*, pc##*',
                                col2: 'Incomaker - ukládá a počítá zobrazení stránek a konverze',
                            }
                        ]
                        },{
                            title : "Marketingové cookies",
                            description: 'Používají se ke sledování preferencí webu uživatele za účelem cílení reklamy, tj. zobrazování marketingových a reklamních sdělení (i na stránkách třetích stran), které mohou návštěvníka webu zajímat, v souladu s těmito preferencemi. Marketingové cookies využívají nástroje externích společností. Tyto marketingové soubory cookie budou použity pouze s vaším souhlasem.',
                            toggle : {
                                value : 'tracking',
                                enabled : false,
                                readonly: false
                            },
                          cookie_table: [
                            {
                                col1: '_fbp',
                                col2: 'Facebook Pixel -  zobrazování reklam a předávání informací do Facebooku',
                            },
                        ]
                        }
                    ]
                }
            }
            
        }
    });
    
    if(!cookieconsent.validCookie('cc_cookie')){
          var dataLayer = window.dataLayer || [];
            dataLayer.push({
            event:"CookieConsent",
            consentType:"empty"
    });
    
    
    }
   }); 