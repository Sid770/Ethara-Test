import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Static routes - prerender
  {
    path: 'login',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'signup',
    renderMode: RenderMode.Prerender
  },
  // Dynamic routes with parameters - use SSR instead of prerender
  {
    path: 'dashboard',
    renderMode: RenderMode.SSR
  },
  {
    path: 'projects',
    renderMode: RenderMode.SSR
  },
  {
    path: 'tasks',
    renderMode: RenderMode.SSR
  },
  {
    path: 'tasks/:projectId',
    renderMode: RenderMode.SSR
  },
  // Catch-all fallback
  {
    path: '**',
    renderMode: RenderMode.SSR
  }
];
