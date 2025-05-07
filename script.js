
document.addEventListener('DOMContentLoaded', () => {
  // --- کد منو ---
  const navBtn = document.querySelector('.nav__btn');
  const navMenu = document.querySelector('.nav-menu');
  const cover = document.querySelector('.cover');
  const navBtnLine = document.querySelector('.nav__btn-line');
  const navLogoSvg = document.querySelector('.app-logo__svg');
  const navLogoTitle = document.querySelector('.nav-logo__title');
  const askedContents = document.querySelectorAll ('.asked__content')
  // const askedDiscriptions = document.querySelectorAll('.asked__discription')
  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav__btn--open');
    navMenu.classList.toggle('nav-menu--open');
    cover.classList.toggle('cover--show');
    navBtnLine.classList.toggle('nav__btn-line--show');
    navLogoSvg.classList.toggle('app-logo__svg--show');
    navLogoTitle.classList.toggle('nav-logo__title--show');
  });

  // --- کد تب‌ها ---
  const featuresLinks = document.querySelectorAll('.features__link');
  const items = document.querySelectorAll('.features .row.align__item > .col-lg-6');

  // بررسی تعداد آیتم‌ها
  if (items.length !== 6) {
    console.error('تعداد آیتم‌های col-lg-6 باید ۶ تا باشد! الان:', items.length);
    return;
  }

  function hideAll() {
    items.forEach(item => item.style.display = 'none');
  }

  function showGroup(index) {
    items[index * 2].style.display = 'block';
    items[index * 2 + 1].style.display = 'block';
  }

  // حالت پیش‌فرض: نمایش گروه اول
  hideAll();
  showGroup(0);

  // فعال کردن تب اول
  featuresLinks.forEach(link => link.classList.remove('features__link--active'));
  featuresLinks[0].classList.add('features__link--active');

  // مدیریت کلیک روی تب‌ها
  featuresLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      featuresLinks.forEach(l => l.classList.remove('features__link--active'));
      link.classList.add('features__link--active');

      hideAll();
      showGroup(index);
    });
  });
  // const askedContents = document.querySelectorAll('.asked__content');

askedContents.forEach(askedContent => {
  askedContent.addEventListener('click', function () {
    const thisDescription = askedContent.querySelector('.asked__discription');
    const svgIcon = askedContent.querySelector('svg');
    
    const isOpen = thisDescription.style.display === 'block';

    document.querySelectorAll('.asked__discription').forEach(desc => {
      desc.style.display = 'none';
    });
    document.querySelectorAll('.asked__content svg').forEach(svg => {
      svg.classList.remove('rotated');
    });

    if (!isOpen) {
      thisDescription.style.display = 'block';
      svgIcon.classList.add('rotated');
    }
  });
});

document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    errorMessage.style.display = 'block';
    emailInput.style.border = '2px solid hsl(0, 94%, 66%)';
  } else {
    errorMessage.style.display = 'none';
    emailInput.style.border = 'none';
    alert("Thanks for subscribing!");
    emailInput.value = '';
  }
});

});


  