---
title: LarvaERP Landing Page
description: Modern, clean landing page showcasing LarvaERP features and demo data
url: larvaerp.larvalabs-apps.store
status: active
framework: React + Vite
styling: Tailwind CSS
seo:
  keywords: ERP, Enterprise Resource Planning, Inventory, Purchase, Sales, Jewellery Management
  og_image: /og-image.png
build:
  command: npm run build
  output: dist
deploy:
  platform: Cloudflare Pages
  branch: main
  path: landing-pages/larvaerp-landing
demo_data:
  inventory: 300+ stock levels across 3 locations
  purchase_orders: 2 sample POs (₹147.5K)
  sales_orders: 2 sample SOs (₹295K)
  jewellery: 4 metals, 5 stones, 3 collections, 4 designs
  total_records: 50+
created_at: 2026-05-04
last_updated: 2026-05-04
