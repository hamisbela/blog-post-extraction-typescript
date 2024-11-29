import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { createBlogList } from './components/BlogList'
import { getValidPosts } from './types/BlogPost'
import { initRouter } from './router'
import blogPosts from './data/blog/posts.json'

const validPosts = getValidPosts(blogPosts);

// Initialize router
initRouter(validPosts);

// Render function for home page
function renderHomePage() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      ${createBlogList(validPosts)}
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `;

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
}

// Initial render
renderHomePage();

// Listen for home page render events
window.addEventListener('render-home', renderHomePage);