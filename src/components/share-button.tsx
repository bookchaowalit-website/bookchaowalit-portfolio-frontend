"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

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
      aria-label={copied ? "Link copied to clipboard" : `Share ${title}`}
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-foreground" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share
        </>
      )}
    </Button>
  );
}
