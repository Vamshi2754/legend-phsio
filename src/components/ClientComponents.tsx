"use client";

import dynamic from 'next/dynamic';

// Lazy load heavy components for better performance
export const FloatingContactLazy = dynamic(() => import("@/components/FloatingContact"), {
  ssr: false,
  loading: () => null,
});

export const BookingPopupLazy = dynamic(() => import("@/components/BookingPopup"), {
  ssr: false,
  loading: () => null,
});
