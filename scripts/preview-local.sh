#!/bin/bash

set -euo pipefail

CONTAINER_NAME="annoq-site-preview"
PORT="${1:-8080}"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
NGINX_CONF="$ROOT_DIR/scripts/nginx-local.conf"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required for local preview."
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Docker daemon is not running. Start Docker Desktop and retry."
  exit 1
fi

if [ ! -d "$DIST_DIR" ]; then
  echo "Missing dist/ build output. Run: npm run build:site"
  exit 1
fi

if [ ! -d "$DIST_DIR/docs" ]; then
  echo "Missing dist/docs output. Run: npm run build:docs"
  exit 1
fi

if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
  docker rm -f "$CONTAINER_NAME" >/dev/null
fi

docker run --name "$CONTAINER_NAME" --rm -d \
  -p "$PORT:80" \
  -v "$DIST_DIR:/var/www/annoq-site:ro" \
  -v "$NGINX_CONF:/etc/nginx/conf.d/default.conf:ro" \
  nginx:alpine >/dev/null

echo "Preview started: http://localhost:$PORT"
echo "Angular app:      http://localhost:$PORT/"
echo "Docs site:        http://localhost:$PORT/docs/"
echo "Stop preview:     docker stop $CONTAINER_NAME"
