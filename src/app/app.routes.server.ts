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
  // Dynamic routes with parameters - use App Shell instead of prerender
  {
    path: 'dashboard',
    renderMode: RenderMode.AppShell
  },
  {
    path: 'projects',
    renderMode: RenderMode.AppShell
  },
  {
    path: 'tasks',
    renderMode: RenderMode.AppShell
  },
  {
    path: 'tasks/:projectId',
    renderMode: RenderMode.AppShell
  },
  // Catch-all fallback
  {
    path: '**',
    renderMode: RenderMode.AppShell
  }
];
