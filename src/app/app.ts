import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { inject as injectAnalytics } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="min-h-screen">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class App {
  private platformId = inject(PLATFORM_ID);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    if (!isPlatformBrowser(this.platformId)) return;

    // Initialize Vercel Analytics
    injectAnalytics();

    // Redirect to login if not authenticated
    if (!this.authService.isAuthenticated() && !this.isAuthPage()) {
      this.router.navigate(['/login']);
    }
  }

  private isAuthPage(): boolean {
    const currentUrl = window.location.pathname;
    return currentUrl.includes('/login') || currentUrl.includes('/signup');
  }
}
