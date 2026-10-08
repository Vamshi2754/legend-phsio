"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { locationData } from "@/data/locations";
import { clinicLocations } from "@/data/clinicLocations";
import Footer from "@/components/Footer";

const SingleClinicMap = dynamic(() => import("@/components/SingleClinicMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-2xl bg-gray-100 animate-pulse border border-gray-200 flex items-center justify-center"
      style={{ height: "clamp(320px, 45vw, 480px)" }}
    >
      <p className="text-gray-400 text-sm font-medium">Loading map...</p>
    </div>
  ),
});