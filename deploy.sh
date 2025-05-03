#!/usr/bin/env bash
die() { echo "$*" 1>&2 ; exit 1; }

echo -e "Deploying jour.rest.quest to production!"

[ -z "$(git status --porcelain)" ] || die "There are uncommitted changes"

npm run build || die "Build failed"

docker --context arm cp dist caddy:/srv/rest.quest || die "Failed to copy files to container"