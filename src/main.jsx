import React, { useEffect, useState, useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";

// Pictures
import profileImg from './assets/img4.jpg';
import heroBgImg from './assets/img0.jpg';
import galleryImg1 from './assets/img3.jpg';
import galleryImg2 from './assets/img4.jpg';

// All Images
import img0 from './assets/img0.jpg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpeg';

import memory1 from './assets/memory1.jpg';
import memory2 from './assets/memory2.jpg';
import memory3 from './assets/memory3.jpg';
import memory4 from './assets/memory4.jpg';
import memory5 from './assets/memory5.jpg';
import memory6 from './assets/memory6.jpg';


// All Videos
import vid1 from './assets/vid1.mp4';
import vid2 from './assets/vid2.mp4';
import vid3 from './assets/vid3.mp4';
import vid4 from './assets/vid4.mp4';

const style = document.createElement("style");
style.textContent = `
  :root {
    color-scheme: dark;
    color: #fff;
    background: #10051f;
    font-family: Inter, system-ui, sans-serif;
    --accent-pink: #ffd4f1;
    --accent-orange: #e8590c;
    
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(circle at top left, rgba(223, 15, 39, 0.18), transparent 30%),
      radial-gradient(circle at 70% 10%, rgba(218, 19, 19, 0.12), transparent 18%),
      linear-gradient(180deg, #550404 0%, #240101 0%);
  }

  .app-shell {
    min-height: 100vh;
    color: #f6f0ff;
    overflow-x: hidden;
  }

  /* FLOATING NAVBAR */
  .navbar {
    position: fixed;
    top: 1.2rem; 
    left: 50%;
    transform: translateX(-50%);
    width: min(92%, 1100px); 
    padding: 0.5rem 1.5rem;
    background: rgba(16, 5, 31, 0.75);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 100px;
    z-index: 1000;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
  }

  .nav-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .brand-image {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px rgba(255, 212, 241, 0.3);
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .brand-image:hover {
    transform: scale(1.1);
    border-color: var(--accent-pink);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: rgba(246, 240, 255, 0.85);
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.06em;
    transition: color 0.28s ease;
    cursor: pointer;
  }

  .nav-links a:hover {
    color: var(--accent-pink);
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
    padding: 0.5rem;
  }

  .nav-mobile {
    display: none;
  }

  .nav-mobile.active {
    position: absolute;
    top: calc(100% + 0.8rem);
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background: rgba(16, 5, 31, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.5rem;
    padding: 1rem 0;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }

  .nav-mobile a {
    padding: 1rem 1.5rem;
    color: rgba(246, 240, 255, 0.85);
    text-decoration: none;
    font-weight: 500;
    transition: background 0.28s ease;
  }

  .nav-mobile a:hover {
    background: rgba(255, 212, 241, 0.1);
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .menu-toggle { display: flex; align-items: center; justify-content: center; }
    .navbar { padding: 0.5rem 1rem; width: 95%; }
    .brand-image { width: 38px; height: 38px; }
    .nav-mobile.active { display: flex; }
  }


  

  

/* --- HERO SECTION CONTAINER --- */
.hero {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #080808;
  overflow: hidden;
  padding: 2rem;
}

/* Cinematic Background Image */
.hero-bg-image {
  position: absolute;
  inset: 0;
  background-image: url(${heroBgImg});
  background-size: cover;
  background-position: center;
  filter: brightness(0.4) saturate(1.2);
  z-index: 0;
  animation: bgParallax 60s linear infinite;
}

@keyframes bgParallax {
  0%, 100% { background-position: 50% 50%; }
  25% { background-position: 55% 45%; }
  50% { background-position: 45% 55%; }
  75% { background-position: 50% 50%; }
}

/* Vignette to focus the center */
.hero-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.6) 100%);
  z-index: 1;
}

/* --- THE CENTRAL PANEL --- */
.hero-panel-container {
  position: relative;
  z-index: 2;
  width: min(920px, 100%);
  padding: 2rem 1.5rem;
  margin-top: 2rem;
  
  /* 1. Deep Base with slight tint */
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.05) 0%, 
    rgba(5, 5, 5, 0.85) 50%, 
    rgba(255, 255, 255, 0.02) 100%
  ),
  url(${profileImg});
  background-size: cover;
  background-position: center;
  
  /* 2. Heavy Blur & Saturation for that "Frosted" look */
  backdrop-filter: blur(30px) saturate(150%);
  -webkit-backdrop-filter: blur(30px) saturate(150%);
  
  /* 3. Smooth Edges */
  border-radius: 48px;
  
  /* 4. High-End Border: A very thin, light-catching rim */
  border: 1px solid rgba(255, 255, 255, 0.15);
  
  text-align: center;

  /* 5. Layered Shadow: Small sharp shadow + Large soft glow */
  box-shadow: 
    0 10px 30px -10px rgba(0, 0, 0, 0.5),
    0 40px 100px -20px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.2); /* Top edge 'highlight' */

  /* Entrance Animation */
  animation: panelEntrance 1.5s ease-out;
}

@keyframes panelEntrance {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Subtle Film Grain Texture */
.inner-texture {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.03;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Animated Corner Glow */
.panel-border-glow {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(255, 222, 89, 0.15) 0%, transparent 70%);
  z-index: -1;
  filter: blur(40px);
}

/* Animated Panel Glows */
.panel-glow {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 222, 89, 0.3) 0%, transparent 70%);
  filter: blur(30px);
  animation: glowFloat 8s ease-in-out infinite;
  z-index: -1;
}

.glow-1 {
  top: -50px;
  left: -50px;
  width: 150px;
  height: 150px;
}

.glow-2 {
  bottom: -50px;
  right: -50px;
  width: 120px;
  height: 120px;
  animation-delay: 4s;
}

@keyframes glowFloat {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-30px) scale(1.1);
    opacity: 0.6;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-panel-container {
    padding: 2rem 1rem;
    border-radius: 32px;
    width: 95%;
  }
}

/* --- GENERAL SECTIONS --- */
.section {
  padding: 6rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-header::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(255, 212, 241, 0.1), transparent 70%);
  border-radius: 50%;
  z-index: -1;
  animation: headerGlow 3s ease-in-out infinite alternate;
}

@keyframes headerGlow {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
}

.section-tag {
  color: var(--accent-pink);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
  position: relative;
  z-index: 1;
}

.section h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: #fff;
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
}

/* --- TYPOGRAPHY --- */
.hero-badge {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: #eee;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: #fff;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.highlight-text {
  color: #ffde59; /* Warm Gold */
  text-shadow: 0 0 30px rgba(255, 222, 89, 0.3);
  animation: glowPulse 2s ease-in-out infinite alternate;
}

@keyframes glowPulse {
  0% {
    text-shadow: 0 0 30px rgba(255, 222, 89, 0.3);
  }
  100% {
    text-shadow: 0 0 50px rgba(255, 222, 89, 0.5);
  }
}

.hero-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  max-width: 550px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

/* --- BUTTONS --- */
.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-actions button {
  padding: 1.1rem 2.8rem;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-primary {
  background: #fff;
  color: #000;
  border: none;
}

.btn-primary:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 15px 30px rgba(255, 255, 255, 0.15);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #fff;
  transform: scale(1.02);
}

/* --- EMOJI DOCK --- */
.hero-dock {
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: #151515;
  display: flex;
  gap: 2rem;
  padding: 1rem 2.5rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.dock-item {
  font-size: 1.8rem;
  transition: transform 0.3s ease;
  cursor: default;
}

.dock-item:hover {
  transform: translateY(-8px) scale(1.2);
}

/* --- FLOATING ELEMENTS --- */
.floating-elements {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
}

.float-item {
  position: absolute;
  font-size: 3rem;
  animation: floatUp 10s linear infinite;
  opacity: 1;
}

.balloon {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.star {
  top: 30%;
  right: 15%;
  animation-delay: 3s;
}

.cake {
  top: 50%;
  left: 20%;
  animation-delay: 6s;
}

.heart {
  top: 40%;
  right: 10%;
  animation-delay: 9s;
}

@keyframes floatUp {
  0% {
    transform: translateY(0px) rotate(0deg) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-120vh) rotate(360deg) scale(1.2);
    opacity: 0;
  }
}

/* --- ABOUT SECTION --- */
.about-container {
  display: flex;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.about-card {
  flex: 1;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.about-image {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  filter: brightness(0.8) saturate(1.1);
}

.about-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem 1.5rem;
  color: #fff;
  text-align: center;
}

.about-emoji {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.about-overlay h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.about-overlay p {
  margin: 0;
  opacity: 0.9;
}

.about-text {
  flex: 1;
  text-align: left;
}

.about-text .section-tag {
  color: var(--accent-pink);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.about-text h2 {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.about-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.about-features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.about-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
}

.about-feature:hover {
  background: rgba(255, 212, 241, 0.1);
}

.about-feature span:first-child {
  font-size: 1.2rem;
}

.about-feature span:last-child {
  font-weight: 500;
  color: #fff;
}

.about-text button {
  background: var(--accent-pink);
  color: #000;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.about-text button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(255, 212, 241, 0.3);
}

/* --- MODAL --- */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease-out;
}

.modal-card {
  background: linear-gradient(135deg, #fff 0%, #f9f9f9 100%);
  padding: 2.5rem;
  border-radius: 24px;
  max-width: 450px;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: scale(0.9);
  animation: modalPop 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalPop {
  to { transform: scale(1); }
}

.modal-card h3 {
  color: #000;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.modal-card p {
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.modal-card button {
  background: var(--accent-pink);
  color: #000;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-card button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(255, 212, 241, 0.4);
}

/* --- VIDEO MODAL --- */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease-out;
}

.video-modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
}

.video-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
}

.video-close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.video-modal-player {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
}

/* --- GALLERY SECTION --- */
.gallery-section-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3.5rem;
  max-width: 1400px;
  margin: 0 auto;
  perspective: 1000px;
}

.gallery-card {
  position: relative;
  border-radius: 24px;
  overflow: visible;
  cursor: pointer;
  animation: layeredCardEntrance 0.8s ease-out both;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

@keyframes layeredCardEntrance {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.85) rotateX(-15deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
  }
}

.gallery-card::before,
.gallery-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 212, 241, 0.08), rgba(100, 200, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

.gallery-card::before {
  transform: translateZ(0px) rotateY(0deg) rotateX(0deg);
}

.gallery-card::after {
  transform: translateZ(-15px) translateY(8px) rotateY(2deg) rotateX(5deg);
  opacity: 0.6;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.05), rgba(78, 205, 196, 0.05));
}

.gallery-card:hover::before {
  transform: translateZ(15px) rotateY(-8deg) rotateX(-5deg);
  box-shadow: 0 25px 60px rgba(255, 212, 241, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 212, 241, 0.5);
  background: linear-gradient(135deg, rgba(255, 212, 241, 0.15), rgba(100, 200, 255, 0.15));
}

.gallery-card:hover::after {
  transform: translateZ(-30px) translateY(16px) rotateY(4deg) rotateX(8deg);
  opacity: 0.4;
}

.gallery-card:nth-child(1) { animation-delay: 0.05s; }
.gallery-card:nth-child(2) { animation-delay: 0.1s; }
.gallery-card:nth-child(3) { animation-delay: 0.15s; }
.gallery-card:nth-child(4) { animation-delay: 0.2s; }
.gallery-card:nth-child(5) { animation-delay: 0.25s; }
.gallery-card:nth-child(6) { animation-delay: 0.3s; }
.gallery-card:nth-child(7) { animation-delay: 0.35s; }
.gallery-card:nth-child(8) { animation-delay: 0.4s; }
.gallery-card:nth-child(9) { animation-delay: 0.45s; }
.gallery-card:nth-child(10) { animation-delay: 0.5s; }
.gallery-card:nth-child(11) { animation-delay: 0.55s; }
.gallery-card:nth-child(12) { animation-delay: 0.6s; }
.gallery-card:nth-child(13) { animation-delay: 0.65s; }
.gallery-card:nth-child(14) { animation-delay: 0.7s; }
.gallery-card:nth-child(15) { animation-delay: 0.75s; }
.gallery-card:nth-child(16) { animation-delay: 0.8s; }
.gallery-card:nth-child(17) { animation-delay: 0.85s; }
.gallery-card:nth-child(18) { animation-delay: 0.9s; }

.gallery-card-content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.gallery-card:hover .gallery-card-content-wrapper {
  transform: scale(1.08) translateZ(20px);
}

.image-card {
  background: linear-gradient(135deg, rgba(255, 212, 241, 0.05), rgba(255, 222, 89, 0.05));
}

.video-card {
  background: linear-gradient(135deg, rgba(100, 200, 255, 0.05), rgba(150, 100, 255, 0.05));
}

.gallery-video-placeholder {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  opacity: 0.8;
}

.gallery-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  z-index: 10;
}

.gallery-card-content-wrapper:hover .gallery-play-button {
  transform: translate(-50%, -50%) scale(1.25);
  background: #fff;
  box-shadow: 0 20px 50px rgba(255, 212, 241, 0.4);
  border-color: rgba(255, 212, 241, 0.6);
}

.gallery-play-button span {
  font-size: 28px;
  color: #000;
  margin-left: 4px;
}

.gallery-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.gallery-card-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 1rem;
}

.gallery-card-emoji {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.gallery-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.gallery-card-type {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
  font-weight: 500;
}

.gallery-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.6s ease, filter 0.4s ease;
  border-radius: 24px;
}

.gallery-card:hover .gallery-video {
  transform: scale(1.12);
  filter: brightness(0.7);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.6s ease, filter 0.4s ease;
  border-radius: 24px;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.12);
  filter: brightness(0.8);
}

.gallery-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 212, 241, 0.1), rgba(255, 222, 89, 0.1));
  border-radius: 20px;
}

/* --- LIGHTBOX --- */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  animation: fadeIn 0.3s ease-out;
}

.lightbox-card {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: #1a1a1a;
  border-radius: 20px;
  padding: 2rem;
  color: #fff;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: modalPop 0.4s ease-out forwards;
}

/* --- MOMENTS SECTION --- */
.moments {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(255, 212, 241, 0.05), rgba(255, 222, 89, 0.05));
  position: relative;
  overflow: hidden;
}

.moments::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255, 212, 241, 0.1), transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 222, 89, 0.1), transparent 50%);
  pointer-events: none;
}

.moments-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 600px;
}

.moments-center-line {
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, rgba(255, 212, 241, 0.6), rgba(255, 222, 89, 0.6));
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(255, 212, 241, 0.3);
  z-index: 1;
}

.moments-left, .moments-right {
  position: relative;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.moments-left {
  align-items: flex-end;
  margin-right: 2rem;
}

.moments-right {
  align-items: flex-start;
  margin-left: 2rem;
}

.hanging-card {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(50px) rotate(5deg);
  animation: cardAppear 0.8s ease-out forwards;
  max-width: 300px;
}

.left-card {
  transform-origin: right center;
}

.right-card {
  transform-origin: left center;
}

@keyframes cardAppear {
  0% {
    opacity: 0;
    transform: translateY(50px) rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

.hanging-card:hover {
  transform: translateY(-10px) scale(1.05) rotate(0deg) !important;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 212, 241, 0.4);
}

.card-image {
  width: 100%;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.hanging-card:hover .card-image img {
  transform: scale(1.1);
}

.card-message {
  text-align: center;
}

.card-message p {
  color: #f6f0ff;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.card-string {
  position: absolute;
  top: -20px;
  width: 3px;
  height: 20px;
  background: linear-gradient(to bottom, rgba(255, 212, 241, 0.8), rgba(255, 222, 89, 0.8));
  border-radius: 2px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(255, 212, 241, 0.4);
}

.left-card .card-string {
  left: auto;
  right: 20px;
}

.right-card .card-string {
  left: 20px;
}

/* --- GIFTS SECTION --- */
.gifts {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05), rgba(78, 205, 196, 0.05));
  position: relative;
  overflow: hidden;
}

.gifts::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(255, 107, 157, 0.1), transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(78, 205, 196, 0.1), transparent 50%);
  pointer-events: none;
}

.gifts-carousel-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}

.gifts-carousel {
  position: relative;
  width: 320px;
  height: 400px;
  perspective: 1000px;
}

.gift-box {
  position: absolute;
  width: 280px;
  height: 350px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transform-style: preserve-3d;
}

.gift-box.active {
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
}

.gift-lid {
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  border-radius: 20px 20px 0 0;
}

.gift-box.unwrapped .gift-lid {
  transform: translateY(-50px) rotateX(-30deg);
  opacity: 0.7;
}

.gift-ribbon {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
}

.ribbon-bow {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6b9d, #ffd93d);
  border-radius: 50%;
  position: relative;
}

.ribbon-bow::before,
.ribbon-bow::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 40px;
  background: linear-gradient(45deg, #ff6b9d, #ffd93d);
  top: -10px;
  border-radius: 10px;
}

.ribbon-bow::before {
  left: -5px;
  transform: rotate(-30deg);
}

.ribbon-bow::after {
  right: -5px;
  transform: rotate(30deg);
}

.gift-emoji {
  font-size: 4rem;
  z-index: 2;
  position: relative;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.gift-content {
  padding: 2rem 1.5rem;
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.6s ease;
}

.gift-box.unwrapped .gift-content {
  transform: translateY(0);
}

.gift-content h3 {
  color: #f6f0ff;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.gift-content p {
  color: rgba(246, 240, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

.carousel-arrow {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #f6f0ff;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  margin: 0 1rem;
}

.carousel-arrow:hover {
  background: rgba(255, 212, 241, 0.2);
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.gifts-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: rgba(255, 212, 241, 0.6);
  border-color: rgba(255, 212, 241, 0.8);
  transform: scale(1.2);
}

/* --- COUNTDOWN SECTION --- */
.countdown {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.05), rgba(30, 144, 255, 0.05));
  position: relative;
  overflow: hidden;
}

.countdown::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1), transparent 70%);
  pointer-events: none;
}

.countdown-circles {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  aspect-ratio: 1;
}

.countdown-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  color: #f6f0ff;
}

.countdown-sparkle {
  font-size: 3rem;
  animation: sparkle 2s ease-in-out infinite;
  margin-bottom: 0.5rem;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 0.7; }
}

.countdown-center h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.countdown-center p {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
}

.countdown-ring {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ringAppear 0.8s ease-out forwards;
}

@keyframes ringAppear {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.ring-background {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    var(--ring-color) 0deg,
    rgba(255, 255, 255, 0.1) 0deg
  );
  opacity: 0.2;
}

.ring-progress {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    var(--ring-color) var(--angle),
    transparent var(--angle)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 8px),
    black calc(100% - 8px)
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 8px),
    black calc(100% - 8px)
  );
  animation: progressPulse 2s ease-in-out infinite;
}

@keyframes progressPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.ring-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #f6f0ff;
}

.ring-value {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.25rem;
}

.ring-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* --- MESSAGE SECTION --- */
.message {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(255, 20, 147, 0.05), rgba(138, 43, 226, 0.05));
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.message::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255, 20, 147, 0.1), transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1), transparent 50%);
  pointer-events: none;
}

.message-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.floating-particles {
  position: relative;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  overflow: hidden;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.particle-letter {
  display: inline-block;
  color: rgba(246, 240, 255, 0.8);
  font-weight: 500;
  position: relative;
  transform: translate(var(--start-x), var(--start-y));
  animation: floatIn 3s ease-out forwards;
  opacity: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

@keyframes floatIn {
  0% {
    opacity: 0;
    transform: translate(var(--start-x), var(--start-y)) scale(0.5);
  }
  50% {
    opacity: 0.7;
    transform: translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5)) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(var(--end-x), var(--end-y)) scale(1);
  }
}

.message-reveal {
  position: relative;
  perspective: 1000px;
}

.reveal-card {
  width: 350px;
  height: 250px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.reveal-card:hover {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card-front {
  background: linear-gradient(135deg, rgba(255, 212, 241, 0.1), rgba(255, 222, 89, 0.1));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-back {
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(30, 144, 255, 0.1));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: rotateY(180deg);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

.card-front h3 {
  color: #f6f0ff;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.card-front p {
  color: rgba(246, 240, 255, 0.8);
  margin: 0;
  font-size: 0.9rem;
}

.heart-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.heart-particle {
  position: absolute;
  font-size: 1.5rem;
  animation: heartFloat 4s ease-in-out infinite;
  opacity: 0.6;
}

@keyframes heartFloat {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.8;
  }
}

.message-content {
  position: relative;
  z-index: 2;
  color: #f6f0ff;
  text-align: center;
  padding: 1rem;
}

/* --- FOOTER SECTION --- */
.footer {
  position: relative;
  min-height: 500px;
  overflow: hidden;
  color: #f6f0ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${img8});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(0.3) saturate(1.2) blur(1px);
  z-index: 0;
}

.footer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(16, 5, 31, 0.9) 0%,
    rgba(138, 43, 226, 0.8) 50%,
    rgba(16, 5, 31, 0.9) 100%
  );
  backdrop-filter: blur(2px);
  z-index: 1;
}

.footer-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  text-align: center;
}

.brand-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: brandGlow 3s ease-in-out infinite alternate;
}

@keyframes brandGlow {
  0% { filter: drop-shadow(0 0 10px rgba(255, 222, 89, 0.5)); }
  100% { filter: drop-shadow(0 0 20px rgba(255, 222, 89, 0.8)); }
}

.footer-brand h2 {
  font-size: 2.5rem;
  margin: 1rem 0;
  background: linear-gradient(45deg, #ffd93d, #ff6b9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.footer-brand p {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.brand-decoration {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  animation: decorationFloat 4s ease-in-out infinite;
}

@keyframes decorationFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.nav-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #ffd93d;
  position: relative;
}

.nav-section h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #ff6b9d, #ffd93d);
  border-radius: 1px;
}

.nav-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-section li {
  margin-bottom: 0.75rem;
}

.nav-section a,
.emoji-link {
  color: rgba(246, 240, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
}

.nav-section a:hover,
.emoji-link:hover {
  color: #ffd93d;
  transform: translateX(5px);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(246, 240, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.social-link:hover {
  color: #ff6b9d;
  transform: translateX(5px);
}

.social-link span {
  font-size: 0.9rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-quote p {
  font-style: italic;
  opacity: 0.8;
  margin: 0;
  font-size: 0.95rem;
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-to-top {
  background: rgba(255, 212, 241, 0.1);
  border: 1px solid rgba(255, 212, 241, 0.3);
  color: #f6f0ff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.back-to-top:hover {
  background: rgba(255, 212, 241, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 212, 241, 0.2);
}

.footer-emojis {
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
}

.footer-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.footer-particle {
  position: absolute;
  font-size: 1.5rem;
  animation: particleFloat linear infinite;
  opacity: 0.6;
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero-panel-container {
    padding: 1.5rem 1rem;
  }
  .hero-dock {
    gap: 1rem;
    padding: 0.8rem 1.5rem;
  }
  .float-item {
    font-size: 2rem;
  }
  .about-container {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
  .about-card {
    flex: none;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .about-image {
    height: 300px;
  }
  .about-text {
    text-align: center;
    padding: 0 1rem;
  }
  .about-text h2 {
    font-size: 2rem;
  }
  .about-features {
    justify-content: center;
  }
  .gallery-section-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2.5rem;
  }
  .gallery-card {
    height: 200px;
  }
  .gallery-card::before {
    transform: translateZ(0px) rotateY(0deg) rotateX(0deg);
  }
  .gallery-card::after {
    transform: translateZ(-10px) translateY(6px) rotateY(1.5deg) rotateX(3deg);
  }
  .gallery-card:hover::before {
    transform: translateZ(10px) rotateY(-5deg) rotateX(-3deg);
  }
  .gallery-card:hover::after {
    transform: translateZ(-20px) translateY(12px) rotateY(2.5deg) rotateX(5deg);
  }
  .moments-container {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
  .moments-center-line {
    display: none;
  }
  .moments-left, .moments-right {
    width: 100%;
    margin: 0;
    align-items: center;
  }
  .hanging-card {
    max-width: 280px;
    transform: none !important;
  }
  .left-card .card-string, .right-card .card-string {
    left: 50% !important;
    right: auto !important;
  }
  .gifts-carousel-container {
    padding: 0 0.5rem;
    flex-direction: column;
    gap: 1rem;
  }
  .gifts-carousel {
    width: 100%;
    max-width: 280px;
    height: 350px;
  }
  .gift-box {
    width: 240px;
    height: 300px;
  }
  .gift-lid {
    height: 160px;
  }
  .gift-emoji {
    font-size: 3rem;
  }
  .gift-content {
    padding: 1.5rem 1rem;
  }
  .gift-content h3 {
    font-size: 1.2rem;
  }
  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    z-index: 30;
  }
  .left-arrow {
    left: 0.5rem;
  }
  .right-arrow {
    right: 0.5rem;
  }
  .gifts-indicators {
    margin-top: 1rem;
  }
  .section {
    padding: 4rem 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .section-header {
    margin-bottom: 3rem;
  }
  .section h2 {
    font-size: 2.5rem;
  }
  .countdown-circles {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 1.5rem;
    max-width: 300px;
  }
  .countdown-center {
    position: static;
    transform: none;
    margin-bottom: 2rem;
    grid-column: 1;
    grid-row: 1;
  }
  .countdown-sparkle {
    font-size: 2.5rem;
  }
  .countdown-center h3 {
    font-size: 1.3rem;
  }
  .ring-background,
  .ring-progress {
    width: 100px;
    height: 100px;
  }
  .ring-value {
    font-size: 1.8rem;
  }
  .ring-label {
    font-size: 0.75rem;
  }
  .message {
    padding: 4rem 0;
    min-height: 70vh;
  }
  .message-container {
    gap: 3rem;
    padding: 0 1rem;
  }
  .floating-particles {
    height: 150px;
    font-size: 1rem;
  }
  .reveal-card {
    width: 300px;
    height: 220px;
  }
  .card-icon {
    font-size: 2.5rem;
  }
  .card-front h3 {
    font-size: 1.3rem;
  }
  .heart-particle {
    font-size: 1.2rem;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .hero-panel-container {
    padding: 1rem 0.5rem;
    border-radius: 24px;
    width: 95%;
  }
  .hero-content h1 {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  .about-container {
    padding: 0 0.5rem;
  }
  .about-card {
    max-width: 100%;
  }
  .about-image {
    height: 250px;
  }
  .about-text {
    padding: 0 0.5rem;
  }
  .about-text h2 {
    font-size: 1.8rem;
  }
  .gifts-carousel-container {
    padding: 0 0.25rem;
  }
  .gifts-carousel {
    max-width: 240px;
    height: 300px;
  }
  .gift-box {
    width: 200px;
    height: 260px;
  }
  .gift-lid {
    height: 140px;
  }
  .gift-emoji {
    font-size: 2.5rem;
  }
  .gift-content {
    padding: 1rem 0.75rem;
  }
  .gift-content h3 {
    font-size: 1.1rem;
  }
  .carousel-arrow {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
  .left-arrow {
    left: 0.25rem;
  }
  .right-arrow {
    right: 0.25rem;
  }
  .moments-container {
    padding: 0 0.5rem;
  }
  .hanging-card {
    max-width: 240px;
  }
  .section {
    padding: 3rem 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .section-header {
    margin-bottom: 2rem;
  }
  .section h2 {
    font-size: 2rem;
  }
  .countdown-circles {
    max-width: 250px;
    gap: 1rem;
  }
  .countdown-center {
    margin-bottom: 1.5rem;
  }
  .countdown-sparkle {
    font-size: 2rem;
  }
  .countdown-center h3 {
    font-size: 1.1rem;
  }
  .ring-background,
  .ring-progress {
    width: 80px;
    height: 80px;
  }
  .ring-value {
    font-size: 1.5rem;
  }
  .ring-label {
    font-size: 0.7rem;
  }
  .message {
    padding: 3rem 0;
    min-height: 60vh;
  }
  .message-container {
    gap: 2rem;
    padding: 0 0.5rem;
  }
  .floating-particles {
    height: 120px;
    font-size: 0.9rem;
    min-height: 180px;
    padding: 1rem 0.5rem;
  }
  .reveal-card {
    width: 280px;
    height: 200px;
  }
  .card-icon {
    font-size: 2rem;
  }
  .card-front h3 {
    font-size: 1.1rem;
  }
  .heart-particle {
    font-size: 1rem;
  }
  .footer {
    min-height: 600px;
  }
  .footer-content {
    padding: 2rem 1rem;
  }
  .footer-main {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  .footer-brand {
    order: -1;
  }
  .brand-icon {
    font-size: 3rem;
  }
  .footer-brand h2 {
    font-size: 2rem;
  }
  .footer-nav {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  .footer-actions {
    justify-content: center;
  }
  .footer {
    min-height: 500px;
  }
  .footer-content {
    padding: 1.5rem 0.5rem;
  }
  .footer-main {
    gap: 2rem;
  }
  .brand-icon {
    font-size: 2.5rem;
  }
  .footer-brand h2 {
    font-size: 1.8rem;
  }
  .footer-brand p {
    font-size: 1rem;
  }
  .brand-decoration {
    font-size: 1.2rem;
  }
  .footer-nav {
    gap: 1.5rem;
  }
  .nav-section h3 {
    font-size: 1.1rem;
  }
  .back-to-top {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
  .footer-emojis {
    font-size: 1rem;
  }
}

`;




document.head.appendChild(style);

const NAME = "Beautiful";
const BIRTHDAY_TARGET = "2026-05-01T00:00";

function resolveTargetTimestamp(parts, timezone) {
  const { year, month, day, hour = 0, minute = 0, second = 0 } = parts;

  if (!timezone) {
    return new Date(year, month - 1, day, hour, minute, second).getTime();
  }

  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, second);
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const map = {};
  for (const part of dtf.formatToParts(new Date(utcGuess))) {
    if (part.type !== "literal") map[part.type] = Number(part.value);
  }

  const asTzUtc = Date.UTC(
    map.year,
    map.month - 1,
    map.day,
    map.hour === 24 ? 0 : map.hour,
    map.minute,
    map.second,
  );

  return utcGuess - (asTzUtc - utcGuess);
}

function parseTargetString(target) {
  const [datePart, timePart = "00:00:00"] = target.split("T");
  const [y, m, d] = datePart.split("-").map(Number);
  const [h, mi, s = 0] = timePart.split(":").map(Number);
  return { year: y, month: m, day: d, hour: h, minute: mi, second: s };
}

function TypingText({ text, speed = 35 }) {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setShown(text.slice(0, index));
      if (index >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [started, text, speed]);

  return (
    <span ref={ref}>
      {shown}
      {started && shown.length < text.length && <span className="typing-cursor">|</span>}
    </span>
  );
}

function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Moments", id: "moments" },
    { label: "Gifts", id: "gifts" },
    { label: "Countdown", id: "countdown" },
    { label: "Message", id: "message" },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
<div className="nav-brand" onClick={() => handleNavClick("hero")}>
<img src={profileImg} alt="Birthday Star" className="brand-image" />
</div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a onClick={() => handleNavClick(item.id)}>{item.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="nav-mobile active">
          {navItems.map((item) => (
            <a key={item.id} onClick={() => handleNavClick(item.id)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function App() {
  const [lightbox, setLightbox] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [now, setNow] = useState(Date.now());
  const [videoModal, setVideoModal] = useState(null);
  const [currentGift, setCurrentGift] = useState(0);
  const [unwrappedGifts, setUnwrappedGifts] = useState(new Set());

  const targetTs = useMemo(
    () => resolveTargetTimestamp(parseTargetString(BIRTHDAY_TARGET)),
    [],
  );

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const toggleVideoPlay = (title) => {
    setPlayingVideos(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const diff = targetTs - now;
  const days = Math.max(0, Math.floor(diff / 86400000));
  const hours = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const minutes = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const seconds = Math.max(0, Math.floor((diff % 60000) / 1000));

  const moments = [
    {
      image: img1,
      message: "The sparkle in your eyes that lights up every room you enter",
      side: "left",
      delay: 0
    },
    {
      image: img2,
      message: "Your laughter that turns ordinary moments into celebrations",
      side: "left",
      delay: 0.2
    },
    {
      image: img3,
      message: "The warmth of your heart that makes everyone feel loved",
      side: "left",
      delay: 0.4
    },
    {
      image: img4,
      message: "Your kindness that creates ripples of joy in others' lives",
      side: "right",
      delay: 0.1
    },
    {
      image: img6,
      message: "The dreams you chase with unwavering determination",
      side: "right",
      delay: 0.3
    },
    {
      image: img7,
      message: "Every beautiful memory we've created together",
      side: "right",
      delay: 0.5
    }
  ];

  const gifts = [
    {
      id: 1,
      title: "Sweet Surprise",
      description: "A surprise cake baked with love and decorated with your favorite colors",
      emoji: "🎂",
      color: "#ff6b9d"
    },
    {
      id: 2,
      title: "Melody of Joy",
      description: "A carefully curated playlist of songs that make your heart dance",
      emoji: "🎵",
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "Heartfelt Words",
      description: "A warm hand-written note expressing all the love and appreciation",
      emoji: "💌",
      color: "#ffd93d"
    },
    {
      id: 4,
      title: "Golden Sunrise",
      description: "A peaceful sunrise walk to start the day with golden memories",
      emoji: "🌅",
      color: "#ff8a65"
    },
    {
      id: 5,
      title: "Dream Journal",
      description: "A beautiful journal to capture your dreams and aspirations",
      emoji: "📖",
      color: "#a78bfa"
    },
    {
      id: 6,
      title: "Star Gazing",
      description: "A night under the stars with stories and constellations",
      emoji: "⭐",
      color: "#6366f1"
    }
  ];

  const qualities = [
    { emoji: "✨", title: "Natural Spark", description: "She turns ordinary days into unforgettable moments." },
    { emoji: "🌸", title: "Tender Heart", description: "Her kindness makes everyone feel seen and loved." },
    { emoji: "🎉", title: "Joyful Spirit", description: "Her laughter makes the whole room glow." },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const nextGift = () => {
    setCurrentGift((prev) => (prev + 1) % gifts.length);
  };

  const prevGift = () => {
    setCurrentGift((prev) => (prev - 1 + gifts.length) % gifts.length);
  };

  const unwrapGift = (giftId) => {
    setUnwrappedGifts(prev => new Set([...prev, giftId]));
  };

  return (
    <div className="app-shell">
      <Navbar onNavigate={handleScroll} />
  <header className="hero" id="hero">
      {/* Background Layer */}
      <div className="hero-bg-image"></div>
      <div className="hero-vignette"></div>

      {/* Main Content Panel */}
      <div className="hero-panel-container">
        {/* Animated Glows */}
        <div className="panel-glow glow-1"></div>
        <div className="panel-glow glow-2"></div>
        
        <div className="hero-content">
          <div className="hero-badge">✨ Birthday Serenade</div>
          
          <h1>
            Celebrating <span className="highlight-text">{NAME}</span> 
            <br />
            in a vibrant new way
          </h1>
          
          <p>
            A modern, glowing birthday page with charming sections, 
            upbeat motion, and a warm surprise for the special day.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => handleScroll("about")}>
              Explore
            </button>
            <button className="btn-secondary" onClick={() => handleScroll("countdown")}>
              Countdown
            </button>
          </div>
        </div>

        {/* Floating Emoji Dock */}
        <div className="hero-dock">
          <span className="dock-item">🎂</span>
          <span className="dock-item">🎈</span>
          <span className="dock-item">💐</span>
          <span className="dock-item">🌟</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <span className="float-item balloon">🎈</span>
        <span className="float-item star">⭐</span>
        <span className="float-item cake">🎂</span>
        <span className="float-item heart">💖</span>
      </div>
    </header>


    {/* About Section */}
      <section className="section highlight" id="about">
        <div className="about-container">
          <div className="about-card">
            <div className="about-image" style={{ backgroundImage: `url(${img9})` }}></div>
            <div className="about-overlay">
              <span className="about-emoji">✨</span>
              <h3>Meet the Star</h3>
              <p>Beautiful & Radiant</p>
            </div>
          </div>
          <div className="about-text">
            <p className="section-tag">About the star</p>
            <h2>Why she shines so brightly</h2>
            <p>
              A modern, glowing birthday page with charming sections, upbeat motion, and a warm surprise for the special day. 
              She turns ordinary days into unforgettable moments with her kindness, warmth, and joyful spirit that lights up every room.
            </p>
            <div className="about-features">
              {qualities.map((item) => (
                <div key={item.title} className="about-feature">
                  <span>{item.emoji}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setShowMessage(true)}>Open heartfelt note</button>
          </div>
        </div>
      </section>


          {/* Gallery Section */}
      <section className="section gallery" id="gallery">
        <div className="section-header">
          <div>
            <p className="section-tag">Visual stories</p>
            <h2>Gallery</h2>
          </div>
        </div>

        <div className="gallery-section-container">
          {[
            { type: 'photo', emoji: "📷", title: "Moment 1", src: img1 },
            { type: 'photo', emoji: "🌅", title: "Moment 2", src: img2 },
            { type: 'photo', emoji: "✨", title: "Moment 3", src: img3 },
            { type: 'photo', emoji: "💫", title: "Moment 4", src: img4 },
            { type: 'photo', emoji: "🎨", title: "Moment 5", src: img6 },
            { type: 'photo', emoji: "🎭", title: "Moment 6", src: img7 },
            { type: 'photo', emoji: "🌙", title: "Moment 7", src: img8 },
            { type: 'photo', emoji: "💎", title: "Moment 8", src: img9 },
            { type: 'photo', emoji: "🎪", title: "Moment 9", src: img10 },
            { type: 'photo', emoji: "🌸", title: "Moment 10", src: img11 },
            { type: 'photo', emoji: "🎯", title: "Moment 11", src: img12 },
            { type: 'photo', emoji: "🎬", title: "Moment 12", src: img13 },
            { type: 'photo', emoji: "🎵", title: "Moment 13", src: img14 },
            { type: 'photo', emoji: "🌟", title: "Moment 14", src: img15 },
            { type: 'video', emoji: "🎥", title: "Video 1", src: vid1 },
            { type: 'video', emoji: "🎞️", title: "Video 2", src: vid2 },
            { type: 'video', emoji: "📹", title: "Video 3", src: vid3 },
            { type: 'video', emoji: "🎬", title: "Video 4", src: vid4 },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`gallery-card ${item.type === 'video' ? 'video-card' : 'image-card'}`}
              onClick={() => item.type === 'video' ? setVideoModal(item.src) : setLightbox(item.title)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="gallery-card-content-wrapper">
                {item.type === 'video' ? (
                  <video className="gallery-video" muted loop playsInline autoPlay>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : item.src ? (
                  <img src={item.src} alt={item.title} className="gallery-image" />
                ) : (
                  <div className="gallery-placeholder"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


       {/* Moments Section */}
      <section className="section moments" id="moments">
        <div className="section-header">
          <div>
            <p className="section-tag">Memory lane</p>
            <h2>Capturing beautiful moments</h2>
          </div>
          <button onClick={() => setConfettiKey((k) => k + 1)}>Release confetti</button>
        </div>

        <div className="moments-container">
          <div className="moments-center-line"></div>
          <div className="moments-left">
            {moments.filter(moment => moment.side === 'left').map((moment, index) => (
              <div
                key={index}
                className="hanging-card left-card"
                style={{ animationDelay: `${moment.delay}s` }}
                onClick={() => setLightbox(moments.findIndex(m => m === moment))}
              >
                <div className="card-image">
                  <img src={moment.image} alt="Memory" />
                </div>
                <div className="card-message">
                  <p>{moment.message}</p>
                </div>
                <div className="card-string"></div>
              </div>
            ))}
          </div>
          <div className="moments-right">
            {moments.filter(moment => moment.side === 'right').map((moment, index) => (
              <div
                key={index}
                className="hanging-card right-card"
                style={{ animationDelay: `${moment.delay}s` }}
                onClick={() => setLightbox(moments.findIndex(m => m === moment))}
              >
                <div className="card-image">
                  <img src={moment.image} alt="Memory" />
                </div>
                <div className="card-message">
                  <p>{moment.message}</p>
                </div>
                <div className="card-string"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* Gifts Section */}
{(() => {
  const gifts = [
    { id: 1, title: "Gifts.🤭", description: "Gifts to remember.", image: memory1, color: "#ff6b9d" },
    { id: 2, title: "Melody of the day.", description: "Your favourite melody huh!!.", image: memory2, color: "#4ecdc4" },
    { id: 3, title: "Heartfelt message.", description: "Written message.", image: memory3, color: "#ffe66d" },
    { id: 4, title: "Sunrise👌.", description: "Sunshine to enhance your day.", image: memory4, color: "#ff9f43" },
    { id: 5, title: "Gangster🤭.", description: "Lifestyle.", image: memory5, color: "#a29bfe" },
    { id: 6, title: "Star Gazing😁.", description: "You looking beautiful gazing at the stars.", image: memory6, color: "#fab1a0" },
  ];

  return (
    <section className="section gifts" id="gifts">
      <div className="section-header">
        <div>
          <p className="section-tag">Gift ideas</p>
          <h2>Little delights for the day</h2>
        </div>
      </div>

      <div className="gifts-carousel-container">
        <button className="carousel-arrow left-arrow" onClick={prevGift}>
          ‹
        </button>

        <div className="gifts-carousel">
          {gifts.map((gift, index) => {
            const isActive = index === currentGift;
            const isUnwrapped = unwrappedGifts.has(gift.id);
            const offset = index - currentGift;

            return (
              <div
                key={gift.id}
                className={`gift-box ${isActive ? 'active' : ''} ${isUnwrapped ? 'unwrapped' : ''}`}
                style={{
                  transform: `translateX(${offset * 320}px) scale(${isActive ? 1 : 0.8})`,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3
                }}
                onClick={() => isActive && !isUnwrapped && unwrapGift(gift.id)}
              >
                <div className="gift-lid" style={{ backgroundColor: gift.color }}>
                  <div className="gift-ribbon">
                    <div className="ribbon-bow"></div>
                  </div>
                  
                  <div className="gift-emoji">
                    <img 
                      src={gift.image}
                      loading="eager" 
                      alt={gift.title} 
                      style={{
                        width: '140px', 
                        height: '140px', 
                        objectFit: 'cover', 
                        borderRadius: '15px',
                        pointerEvents: 'none',
                        border: '2px solid rgba(255,255,255,0.3)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                      }} 
                    />
                  </div>
                </div>

                <div className="gift-content">
                  <h3>{gift.title}</h3>
                  <p>{gift.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="carousel-arrow right-arrow" onClick={nextGift}>
          ›
        </button>
      </div>

      <div className="gifts-indicators">
        {gifts.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentGift ? 'active' : ''}`}
            onClick={() => setCurrentGift(index)}
          />
        ))}
      </div>
    </section>
  );
})()}



           {/* Countdown Section */}
      <section className="section countdown" id="countdown">
        <div className="section-header">
          <div>
            <p className="section-tag">Almost there</p>
            <h2>Countdown to celebration</h2>
          </div>
        </div>

        <div className="countdown-circles">
          <div className="countdown-center">
            <div className="countdown-sparkle">✨</div>
            <h3>Days to go!</h3>
            <p>The celebration begins soon</p>
          </div>

          {[
            { label: "Days", value: days, max: 365, color: "#ff6b9d", delay: 0 },
            { label: "Hours", value: hours, max: 24, color: "#4ecdc4", delay: 0.2 },
            { label: "Minutes", value: minutes, max: 60, color: "#ffd93d", delay: 0.4 },
            { label: "Seconds", value: seconds, max: 60, color: "#a78bfa", delay: 0.6 },
          ].map((item, index) => {
            const percentage = (item.value / item.max) * 100;
            const angle = (percentage / 100) * 360;

            return (
              <div
                key={item.label}
                className="countdown-ring"
                style={{
                  '--ring-color': item.color,
                  '--percentage': `${percentage}%`,
                  '--angle': `${angle}deg`,
                  animationDelay: `${item.delay}s`
                }}
              >
                <div className="ring-background"></div>
                <div className="ring-progress"></div>
                <div className="ring-content">
                  <span className="ring-value">{String(item.value).padStart(2, "0")}</span>
                  <span className="ring-label">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  
        {/* Message Section */}
      <section className="section message" id="message">
        <div className="section-header">
          <div>
            <p className="section-tag">Birthday wish</p>
            <h2>A warm note just for you</h2>
          </div>
        </div>

        <div className="message-container">
          <div className="floating-particles">
            {Array.from("May today sparkle with laughter, warm memories, and endless love. You deserve every beautiful moment.").map((char, index) => {
              const text = "May today sparkle with laughter, warm memories, and endless love. You deserve every beautiful moment.";
              const charsPerLine = 25; // Approximate characters per line for readability
              
              // Calculate line and position within line
              const lineIndex = Math.floor(index / charsPerLine);
              const charInLine = index % charsPerLine;
              
              // Calculate pixel positions for readable text layout
              const lineHeight = 24; // 24px line height
              const charWidth = 12; // 12px approximate character width
              const startOffset = -150; // Center the text block
              
              const startX = (Math.random() - 0.5) * 400; // Random start position
              const startY = (Math.random() - 0.5) * 300;
              const endX = startOffset + (charInLine * charWidth);
              const endY = (lineIndex * lineHeight) - 60; // Center vertically
              
              return (
                <span
                  key={index}
                  className="particle-letter"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                    '--start-x': `${startX}px`,
                    '--start-y': `${startY}px`,
                    '--end-x': `${endX}px`,
                    '--end-y': `${endY}px`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>

          <div className="message-reveal">
            <div className="reveal-card">
              <div className="card-front">
                <div className="card-icon">💌</div>
                <h3>Click to reveal</h3>
                <p>A special message awaits</p>
              </div>
              <div className="card-back">
                <div className="heart-pattern">
                  {Array.from({length: 20}, (_, i) => (
                    <span key={i} className="heart-particle" style={{
                      animationDelay: `${i * 0.1}s`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}>💖</span>
                  ))}
                </div>
                <div className="message-content">
                  <TypingText text="May today sparkle with laughter, warm memories, and endless love. You deserve every beautiful moment." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-bg-image"></div>
        <div className="footer-overlay"></div>

        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-icon">🎉</div>
              <h2>Birthday Serenade</h2>
              <p>A beautiful celebration crafted with love, warmth, and unforgettable moments.</p>
              <div className="brand-decoration">
                <span>✨</span>
                <span>💫</span>
                <span>🎈</span>
              </div>
            </div>

            <div className="footer-nav">
              <div className="nav-section">
                <h3>Explore</h3>
                <ul>
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About the Star</a></li>
                  <li><a href="#gallery" onClick={(e) => { e.preventDefault(); handleScroll("gallery"); }}>Photo Gallery</a></li>
                  <li><a href="#moments" onClick={(e) => { e.preventDefault(); handleScroll("moments"); }}>Memory Lane</a></li>
                  <li><a href="#gifts" onClick={(e) => { e.preventDefault(); handleScroll("gifts"); }}>Gift Ideas</a></li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Celebrate</h3>
                <ul>
                  <li><a href="#countdown" onClick={(e) => { e.preventDefault(); handleScroll("countdown"); }}>Countdown</a></li>
                  <li><a href="#message" onClick={(e) => { e.preventDefault(); handleScroll("message"); }}>Special Message</a></li>
                  <li><span className="emoji-link" onClick={() => setConfettiKey(k => k + 1)}>🎊 Confetti</span></li>
                  <li><span className="emoji-link" onClick={() => setShowMessage(true)}>💌 Heartfelt Note</span></li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Share the Joy</h3>
                <div className="social-links">
                  <a href="#" className="social-link" title="Share on Instagram">
                    📸 <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link" title="Share on Facebook">
                    📘 <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link" title="Share on Twitter">
                    🐦 <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link" title="Send via Email">
                    ✉️ <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-quote">
              <p>"Made with ❤️ for {NAME}. Every moment matters."</p>
            </div>
            <div className="footer-actions">
              <button className="back-to-top" onClick={() => handleScroll("hero")}>
                <span>↑</span> Back to Top
              </button>
              <div className="footer-emojis">
                <span>🎂</span>
                <span>🎈</span>
                <span>💖</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-particles">
          {Array.from({length: 15}, (_, i) => (
            <div
              key={i}
              className="footer-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['✨', '💫', '🎈', '🎊', '💖'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </footer>

      {showMessage && (
        <div className="modal" onClick={() => setShowMessage(false)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <h3>You are amazing</h3>
            <p>
              Today is a celebration of your warmth, your light, and your gentle strength. Keep shining.
            </p>
            <button onClick={() => setShowMessage(false)}>Close</button>
          </div>
        </div>
      )}

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-card">Memory: {moments[lightbox]}</div>
        </div>
      )}

      {videoModal && (
        <div className="video-modal" onClick={() => setVideoModal(null)}>
          <div className="video-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="video-close-btn" onClick={() => setVideoModal(null)}>✕</button>
            <video className="video-modal-player" controls autoPlay>
              <source src={videoModal} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
