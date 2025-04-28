This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```
## Main Page
    Updated Workflow and Configuration of GitHub
    Key Setup, in Github configuration, in settings-> pages, choose deploy from Branch(legacy) instead of actions.  You can still create an actions workflow to automate build/deploy on any push to the repo, also go to actions and make sure workflow permissions are read/write; Also removed the gh-pages npm library and removed the predeploy and deploy scripts and instead leveraged the ./github/workflows/deploy.yml workflow to automate everything once pushed to the repo.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

