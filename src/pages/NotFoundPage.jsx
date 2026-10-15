import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { AlertTriangle } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <SeoHead
        title="404 - Page Not Found | Pavan Septic Tank Cleaning"
        description="The page you are looking for does not exist. Return to Pavan Septic Tank Cleaning Visakhapatnam."
        canonicalPath="/404"
        noIndex={true}
      />
      <div style={{ background: '#fef3c7', color: '#d97706', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <AlertTriangle size={32} />
      </div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.75rem' }}>404 - Page Not Found</h1>
      <p style={{ color: '#64748b', maxWidth: '420px', marginBottom: '1.5rem' }}>
        The requested URL was not found on our server. If you need drainage and septic cleaning in Visakhapatnam, please visit our homepage.
      </p>
      <Link
        to="/"
        style={{ background: '#0284c7', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}
      >
        Back to Home
      </Link>
    </div>
  );
}
