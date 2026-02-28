import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

interface DocLink {
  title: string;
  path: string;
}

interface DocSection {
  title: string;
  path: string;
  links?: DocLink[];
}

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit, OnDestroy {
  sections: DocSection[] = [
    {
      title: 'Getting Started',
      path: '/docs',
      links: [
        { title: 'Browser Compatibility', path: '/docs/getting_started/browser_compatibility' }
      ]
    },
    {
      title: 'Services',
      path: '/docs/services',
      links: [
        { title: 'Programmatic Access to AnnoQ', path: '/docs/services/api' }
      ]
    },
    {
      title: 'Tutorials',
      path: '/docs/tutorials',
      links: [
        { title: 'Interactive Query UI', path: '/docs/tutorials/ui-query' },
        { title: 'Using AnnoQR (R Package)', path: '/docs/tutorials/r-package' },
        { title: 'Using annoq-py (Python Library)', path: '/docs/tutorials/annoq-py' }
      ]
    }
  ];

  content = '';
  currentPath = '/docs';
  loading = false;

  private routeSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.loadCurrentDoc());

    this.loadCurrentDoc();
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  onContentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a');

    if (!anchor) {
      return;
    }

    const href = anchor.getAttribute('href');

    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
      return;
    }

    event.preventDefault();
    this.router.navigateByUrl(href);
  }

  isActive(path: string): boolean {
    return this.currentPath === path;
  }

  private loadCurrentDoc(): void {
    this.currentPath = this.router.url.split('?')[0].split('#')[0];
    const docUrl = this.resolveAssetPath(this.currentPath);

    this.loading = true;
    this.http.get(docUrl, { responseType: 'text' }).subscribe({
      next: markdown => {
        this.content = this.normalizeMarkdown(markdown);
        this.loading = false;
      },
      error: () => {
        this.content = '# Documentation page not found\n\nThe requested page is unavailable.';
        this.loading = false;
      }
    });
  }

  private resolveAssetPath(path: string): string {
    if (path === '/docs' || path === '/docs/') {
      return 'assets/docs/index.md';
    }

    const suffix = path.replace(/^\/docs\/?/, '');
    const parts = suffix.split('/').filter(Boolean);

    if (parts.length === 1) {
      return `assets/docs/docs/${parts[0]}/index.md`;
    }

    return `assets/docs/docs/${parts.join('/')}.md`;
  }

  private normalizeMarkdown(markdown: string): string {
    let normalized = markdown.trimStart();

    normalized = normalized.replace(/^---\s*[\r\n]+[\s\S]*?[\r\n]+---\s*[\r\n]*/m, '');
    normalized = normalized.replace(/^(?:-{3,}|\*{3,})\s*[\r\n]+/, '');

    return normalized;
  }
}
