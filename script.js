
document.addEventListener('DOMContentLoaded', function () {
    const rightSection = document.querySelector('.right-section');
    const sections = rightSection.querySelectorAll('div[id]');
    const navItems = document.querySelectorAll('.main');

    rightSection.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (rightSection.scrollTop >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        const link = item.querySelector('a');
        const targetId = link?.getAttribute('href')?.slice(1);

        if (targetId === current) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });
  });

document.querySelectorAll('.main a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetID);
    if (target) {
      document.querySelector('.right-section').scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

function scrollToTop() {
    const container = document.querySelector('.right-section');
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const navItems = document.querySelectorAll('.main');
    navItems.forEach(item => item.classList.remove('active'));
  }
