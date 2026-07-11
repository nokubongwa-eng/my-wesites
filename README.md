# My Website

This is a simple static website. To publish on GitHub Pages:

1. Create a GitHub repository and push this project.
2. In the repo Settings → Pages, set the source to the `main` branch and `/` (root).

Or use the GitHub CLI:

```bash
# create and push (runs interactively if needed)
# replace REPO_NAME with your desired repository name
gh repo create REPO_NAME --public --source=. --remote=origin --push
```
