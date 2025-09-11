import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || 'Dash Dunmire - Projects';
    const tags = searchParams.get('tags')?.split(',') || [];

    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '40px',
        }}
      >
        {/* Site Name */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: '400',
            color: '#94a3b8',
            marginBottom: '20px',
            letterSpacing: '0.05em',
          }}
        >
          DASH DUNMIRE
        </div>

        {/* Project Title */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#f8fafc',
            textAlign: 'center',
            lineHeight: '1.2',
            marginBottom: '30px',
            maxWidth: '800px',
          }}
        >
          {title}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Subtitle */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: '400',
            color: '#cbd5e1',
            textAlign: 'center',
          }}
        >
          Finance Student • Technology Enthusiast
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);

    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          fontSize: '48px',
          fontWeight: '700',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        Dash Dunmire - Projects
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
