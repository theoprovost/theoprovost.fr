window.onload = function () {
    /*-- Prevents default link behaviour --*/
    window.addEventListener('click', function (ev) {
        const url = ev.target.href.endsWith('/');
        const links = ev.target.href.startsWith(['mailto:']) || ev.target.href.startsWith(['tel:']);

        if (links) return;

        const path = ev.target.href.substring(ev.target.href.lastIndexOf("/") + 1);
        if (!url || path === 'cv_theoprovost.pdf') {
            if (path === 'cv_theoprovost.pdf') {
                // to trigger default download
                return;
            }

            ev.preventDefault();
            if (path === '#') {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            } else {
                const target = document.querySelector(path);
                if (target) {
                    target.scrollIntoView(true);
                } else {
                    window.location.href = window.location.origin + path;
                };
            };
        };
    });
    /*-- Prevents default link behaviour end --*/

    const path = window.location.pathname || '/';
    const current = document.querySelector(`[data-pathname="${path}"]`);
    current.classList.add('active');
};

/*-- off canvas menu start--*/
let openNav = document.getElementById("open-sidenav");
let closeNav = document.getElementById("close-sidenav");
let sideNav = document.getElementById("sidenav");
let sideNavWrap = document.getElementById("sidenav-wrap");
openNav.addEventListener("click", function (event) {
    openSidenavFunc(event, sideNav, sideNavWrap);
});
closeNav.addEventListener("click", function (event) {
    closeSidenavFunc(event, sideNav, sideNavWrap);
});
function openSidenavFunc(event, sideNav, sideNavWrap) {
    event.preventDefault();
    sideNav.style.left = "0";
    sideNavWrap.classList.add('sidenav-active');
}
function closeSidenavFunc(event, sideNav, sideNavWrap) {
    event.preventDefault();
    let sideNavClosePos = "-" + sideNav.offsetWidth + "px";
    sideNav.style.left = sideNavClosePos;
    sideNavWrap.classList.remove('sidenav-active');
}
/*-- off canvas menu end--*/


/*-- Sticky Menu Start--*/
let primaryNavbar = document.querySelector('#primary-navbar');
let navChangePoint = 100;
function stickyNav() {
    if (window.scrollY >= navChangePoint) {
        primaryNavbar.classList.add('shadow-sm');
    } else {
        primaryNavbar.classList.remove('shadow-sm');
    }
}
window.addEventListener('scroll', stickyNav);
/*-- Sticky Menu End--*/

/*-- tech slider start --*/
document.addEventListener('DOMContentLoaded', function () {
    if (typeof Splide !== 'undefined') {
        if (window.location.pathname == '/mystack/') {
            const splides = document.querySelectorAll('.splide');
            splides.forEach(splide => {
                new Splide(`#${splide.id}`, {
                    type: 'loop',
                    arrows: true,
                    pagination: false,
                    focus: 0,
                    perMove: 1,
                    interval: '1800',
                    gap: '5rem',
                    padding: {
                        left: '2rem',
                        right: '1rem',
                    },
                    perPage: 8,
                    breakpoints: {
                        992: {
                            perPage: 4,
                            padding: {
                                left: '0',
                                right: '4rem',
                            },
                        },
                        640: {
                            perPage: 2,
                            arrows: false,
                            padding: {
                                left: '1rem',
                                right: '2rem',
                            },
                        },
                    }
                }).mount();
            })

        } else {
            new Splide('.splide', {
                type: 'loop',
                arrows: false,
                pagination: false,
                focus: 0,
                perMove: 1,
                keyboard: true,
                autoplay: true,
                interval: '1800',
                gap: '1rem',
                padding: {
                    left: '4rem',
                    right: '4rem',
                },
                perPage: 3,
                breakpoints: {
                    992: {
                        perPage: 2,
                        padding: {
                            left: '2rem',
                            right: '2rem',
                        },
                    },
                    640: {
                        perPage: 1,
                        padding: {
                            left: '1rem',
                            right: '1rem',
                        },
                    },
                }
            }).mount();
        }
    };
});
/*-- tech slider end --*/
