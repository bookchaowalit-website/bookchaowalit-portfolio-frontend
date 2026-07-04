"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Share2, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const t = useTranslations('common');

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
    const shareData = {
      title,
      url: shareUrl,
    };

    try {
      // Try native Web Share API first (mobile browsers)
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      // Fallback to clipboard
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Final fallback - manual copy
      try {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        console.error('Failed to share');
      }
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className="gap-2"
      aria-label={copied ? t('linkCopied') : t('shareWith', { title })}
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-foreground" />
          {t('copied')}
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          {t('share')}
        </>
      )}
    </Button>
  );
}
