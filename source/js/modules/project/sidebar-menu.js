const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');

function initSideBar() {
  menuToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar--open')) {
      sidebar.classList.remove('sidebar--open');
    } else {
      sidebar.classList.add('sidebar--open');
    }
  });
}


export {initSideBar};
