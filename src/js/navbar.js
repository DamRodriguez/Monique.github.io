document.addEventListener('DOMContentLoaded', function () {
    const navbarElement = document.getElementById('navbar');
  
    if (navbarElement) {
      navbarElement.innerHTML = `
        <div class="navbar bg-opacity-90 navFondo fixed top-0 left-0 w-full z-50">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle hover:bg-opacity-20 hover:bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-lg dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-50 fondoDropdown">
                <li><a class="menu-item hover:bg-opacity-20 hover:bg-black">Inicio</a></li>
                <li><a class="menu-item hover:bg-opacity-20 hover:bg-black">Productos</a></li>
                <li><a class="menu-item hover:bg-opacity-20 hover:bg-black">Información</a></li>
              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <a class="btn btn-ghost font-serif hover:bg-transparent">
              <img class="filter invert brightness-0 w-40" src="/public/assets/images/monique-logo.png" alt="Logo-de-Monique">
            </a>
          </div>
          <div class="navbar-end">
            <button class="btn btn-ghost btn-circle hover:bg-opacity-20 hover:bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button class="btn btn-ghost btn-circle hover:bg-opacity-20 hover:bg-black">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      `;
    }
  });
  