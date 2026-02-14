# Cloudflare Pages Migration Guide

Follow these steps in order to migrate your website from Vercel to Cloudflare Pages with zero downtime.

## Phase 1: Deploy to Cloudflare (Staging)

1.  **Push Changes:** ensuring the latest `next.config.ts` changes are pushed to your GitHub repository.
2.  **Log in to Cloudflare:** Go to [dash.cloudflare.com](https://dash.cloudflare.com).
3.  **Create Application:**
    *   Go to **Workers & Pages** -> **Create Application**.
    *   Click the **Pages** tab -> **Connect to Git**.
4.  **Select Repository:** Choose your `ajmeraconstruction` repository.
5.  **Configure Build:**
    *   **Project Name:** `ajmeraaconstruction` (or similar).
    *   **Framework Preset:** Select **Next.js (Static HTML Export)**.
    *   *Note: If "Next.js (Static HTML Export)" is not available, just select "Next.js" and ensure the build command is `npx next build` or `npm run build` and output directory is `out`.*
6.  **Deploy:** Click **Save and Deploy**.
7.  **Verify:** Once finished, open the provided `*.pages.dev` URL to ensure the site looks correct.

## Phase 2: Update DNS (Hostinger)

1.  **Get Cloudflare Nameservers:**
    *   In your Cloudflare Dashboard, go to your website (if you already added it) or "Add a Site" if you haven't.
    *   Enter your domain (`ajmeraaconstruction.org`).
    *   Click **Continue**.
    *   On the next page, scroll down to the bottom (or look for the card) to select the **Free** plan ($0).
    *   Click **Continue**.
    *   Cloudflare will scan your DNS records. Review them and click **Continue**.
    *   Cloudflare will provide two nameservers (e.g., `bob.ns.cloudflare.com` and `lola.ns.cloudflare.com`). **Copy these.**
2.  **Update Hostinger:**
    *   Log in to your **Hostinger** account.
    *   Go to **Domains** -> Manage `ajmeraaconstruction.org`.
    *   Find **DNS / Nameservers**.
    *   Select **Change Nameservers**.
    *   Choose **Change nameservers**.
    *   Delete the Hostinger nameservers and paste the two **Cloudflare Nameservers** you copied.
    *   Click **Save**.

## Phase 3: Remove from Vercel (Cleanup)

1.  Log in to **Vercel**.
2.  Go to the `ajmeraconstruction` project.
3.  Go to **Settings** -> **General**.
4.  Scroll to the bottom and click **Delete Project**.
5.  Confirm the deletion.

**Note:** DNS propagation can take up to 24-48 hours, but usually happens within minutes. During this time, some users may see the old Vercel site, and some will see the new Cloudflare site. Since they are identical, this is fine.
